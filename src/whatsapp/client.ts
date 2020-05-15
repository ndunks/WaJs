import { randomBytes, createHmac } from "crypto";
import { arch, platform } from "os";
import {
    CmdInitResponse, WhatsAppCmdType, WhatsAppCmdAction, WhatsAppServerMsg,
    WhatsAppServerMsgConn, WhatsAppServerMsgCmd, WhatsAppServerMsgCmdChallenge, WhatsAppClientConfig
} from "./interfaces";
import * as fs from 'fs'
import { configLoad, configStore, Color } from "../utils";
import { generateKeyPair, decryptEncryptionKeys, AESDecrypt, AESEncrypt } from "./secure";
import { EventEmitter } from "events";
import authRestoreTakeOver from "./auth/restore-takeover";
import WASocket from "./wa-socket";
import { commandTagHandlers } from "./handler";

export default class Client {
    /** This app name */
    clientName = 'WaJs'

    /** Compactible Web WhatsApp Version */
    version = '2.2019.6'

    /** Proto version when this created */
    protoVersion = [0, 17]

    /** Binary protocol version */
    binVersion = 10

    /** Stored Session info */
    config: WhatsAppClientConfig

    /** Collected server command data */
    serverData: {
        [key: string]: any
        Conn?: WhatsAppServerMsgConn
    } = {};

    ws: WASocket
    timeSkew: number

    private messageConter: number = 0
    protected onReady: (info: WhatsAppServerMsgConn, err?: string) => void

    constructor(private authFile = '.auth', private event: EventEmitter) {
        if (fs.existsSync(authFile)) {
            this.config = configLoad(this.authFile)
        } else {
            // default config
            this.config = {
                clientId: randomBytes(16).toString('base64'),
                keys: generateKeyPair()
            }
        }
    }

    connect() {
        return new Promise<WhatsAppServerMsgConn>(
            (resolve, reject) => {

                this.ws = new WASocket(this.event)
                const onOpen = () => {
                    // Swap error listener
                    this.event.removeListener("error", reject)
                    // INIT
                    this.sendCmd<CmdInitResponse>('admin', 'init',
                        this.version.split('.').map(v => parseInt(v)),
                        [this.clientName, platform(), arch()],
                        this.config.clientId,
                        true
                    ).then(response => {
                        if (response.status != 200) {
                            L(response)
                            reject('Init error: ' + response.status)
                        } else if (!response || !response.ref) {
                            L(response)
                            reject('No server id')
                        } else {
                            const ttl = response.ttl || 20000
                            const qrCodeLogin = () => require('./auth/login-qrcode').default.call(this, response.ref, ttl)
                            // Has stored session? restore it.
                            return this.config.tokens ?
                                authRestoreTakeOver.call(this, response.ref, ttl)
                                    .catch(err => {
                                        E('loginRestore:', err)
                                        if (fs.existsSync(this.authFile)) {
                                            L('Deleting expired config');
                                            fs.unlinkSync(this.authFile)
                                        }
                                        return qrCodeLogin()
                                    }) :
                                qrCodeLogin()
                        }
                    }).then(resolve).catch(reject)
                }

                // Fail on early error
                this.event.once("error", reject)
                this.event.once("open", onOpen)
                this.event.on("message", this.onMessage)
            }
        )
    }

    private handleWhatsAppConn(info: WhatsAppServerMsgConn) {
        if (!this.onReady) {
            return L('Got Conn but no handler, ignore it', info)
        }
        // On restored session is not contain secret
        if (info.secret) {
            L('handleWhatsAppConn: decrypt secret');
            this.config.serverSecret = Buffer.from(info.secret, 'base64');
            const result = decryptEncryptionKeys(this.config.serverSecret, this.config.keys.privateKey)
            this.config.aesKey = result.aesKey
            this.config.macKey = result.macKey
        } else {
            L('handleWhatsAppConn: no secret, its resumed.');
        }

        if (!this.config.aesKey) {
            return this.onReady(null, 'No Encryptions Keys!')
        }
        this.config.tokens = {
            client: info.clientToken,
            server: info.serverToken,
            browser: info.browserToken
        }
        // Save creds
        configStore(this.authFile, this.config)

        // call on ready
        this.onReady(info);
    }

    private onMessage = (tag: string, message: string | Buffer) => {
        let logs = [Color.g("<<"), tag]
        if (typeof message == 'string') {

            switch (tag[0]) {
                case '!':
                    let ts = parseInt(tag.slice(1))
                    this.timeSkew = Date.now() - ts
                    break;

                case 's':
                    const params: any[] = JSON.parse(message);
                    this.handleServerMessage(params.shift() as any, params);
                    break;

                default:
                    if (commandTagHandlers.has(tag)) {
                        logs.push(Color.g('(resolved)'))
                        const handle = commandTagHandlers.get(tag)
                        commandTagHandlers.delete(tag)
                        handle.resolve(message ? JSON.parse(message) : message)
                    } else {
                        logs.push(Color.r('(unhandled)'), message)
                    }
                    break;
            }
        } else {
            logs.push(Color.b('(Binary)'))
            this.decrypt(message)
        }
        L.apply(undefined, logs)
    }

    private decrypt(data: Buffer) {
        if (!this.config.aesKey) {
            throw new Error("GotBuffer but no key to decrypt")
        }
        if (!this.config.macKey) {
            throw new Error("no hmac key to verify")
        }
        const hmac = createHmac('sha256', this.config.macKey).update(data.slice(32)).digest()

        if (hmac.compare(data.slice(0, 32)) !== 0) {
            throw new Error('Hmac Miss Match');
        }
        return AESDecrypt(this.config.aesKey, data.slice(32, 32 + 16), data.slice(32 + 16))
    }

    /** 32 byte HMAC + Buffer */
    private encrypt(data: Buffer) {
        // Encrypt first, then sign
        data = AESEncrypt(this.config.aesKey, data)
        const hmac = createHmac('sha256', this.config.macKey).update(data).digest()
        return Buffer.concat([hmac, data])
    }

    sendCmd<T = any>(scope: WhatsAppCmdType, cmd: WhatsAppCmdAction, ...args: Array<string | boolean | any[]>) {
        return this.ws.send<T>(JSON.stringify(
            [scope, cmd, ...args]
        ))
    }
    sendBin<T = any>(cmd: string, attr: any, data?: any) {
        const message = this.encrypt(Buffer.from(JSON.stringify([cmd, attr, data]), 'ascii'))
        return this.ws.send(message)
    }
    private handleServerMessage(cmd: WhatsAppServerMsg, params: any[]) {
        switch (cmd) {
            case 'Stream':
                // Ignore
                return;
            case 'Props':
                return this.event.emit('props', params[0])
            case 'Blocklist':
                return this.event.emit('blocklist', params[0])
                return;
            case 'Cmd':
                const args = params[0] as WhatsAppServerMsgCmd
                if (this.serverCmdHandlers[args.type]) {
                    this.serverCmdHandlers[args.type](args)
                } else {
                    L('handleServerMessage: UNHANDLED CMD.', cmd, args)
                }
                break;
            case 'Conn':
                this.serverData[cmd] = params[0]
                this.handleWhatsAppConn(params[0])
                break;
            default:
                this.serverData[cmd] = params[0]
                L('handleServerMessage:', cmd, params)
                break;
        }
    }
    /** Internal command handler */
    private serverCmdHandlers = {
        disconnect: (args) => {
            this.event.emit('disconnect', args.kind)
            if (args.kind == 'replaced') {
                this.event.emit('replaced')
            }
        },
        challenge: (args: WhatsAppServerMsgCmdChallenge) => {
            L('Handling challenge');
            const signed = this.sign(Buffer.from(args.challenge, 'base64'))
            return this.sendCmd('admin', 'challenge',
                signed.toString('base64'),
                this.config.tokens.server,
                this.config.clientId)
                .then(
                    res => L('Chalenge response', res)
                )
        }
    }
    sign(data: Buffer) {
        const sign = createHmac('sha256', this.config.macKey).update(data).digest()
        return Buffer.concat([sign, data])
    }

    close() {
        this.ws.close()
    }
}
