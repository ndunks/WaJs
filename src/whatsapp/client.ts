import WebSocket from "ws";
import { randomBytes, createHmac } from "crypto";
import { arch, platform } from "os";
import { CmdInitResponse, WhatsAppCmdType, WhatsAppCmdAction, WhatsAppServerMsg, WhatsAppServerMsgConn, WhatsAppServerMsgCmd, WhatsAppServerMsgCmdChallenge, WhatsAppClientConfig } from "./interfaces";
import * as fs from 'fs'
import { configLoad, configStore } from "../utils";
import { generateKeyPair, decryptEncryptionKeys, AESDecrypt } from "./secure";

export default class WhatsAppClient {
    /** This app name */
    clientName = 'WaJs'

    /** Compactible Web WhatsApp Version */
    version = '2.2019.6'

    /** Stored Session info */
    config: WhatsAppClientConfig

    /** Collected server command data */
    serverData: {
        [key: string]: any
        Conn?: WhatsAppServerMsgConn
    } = {};

    ws: WebSocket

    private messageConter: number = 0
    private startTime: string;
    private cmdStack = new Map<String, { message: String, resolve: Function, reject: Function }>()
    private onReady: (info: WhatsAppServerMsgConn, err?: string) => void

    constructor(private authFile = '.auth') {
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
        return new Promise(
            (resolve, reject) => {
                this.startTime = new Date().getTime().toString(36)
                this.ws = new WebSocket("wss://web.whatsapp.com/ws", {
                    origin: "https://web.whatsapp.com",
                })
                const onOpen = () => {
                    // Swap error listener
                    this.ws.removeListener("error", reject)
                    this.ws.on('error', this.onError)
                    // INIT
                    this.sendCmd<CmdInitResponse>('admin', 'init',
                        this.version.split('.').map(v => parseInt(v)),
                        [this.clientName, platform(), arch()],
                        this.config.clientId,
                        true
                    ).then(response => {
                        if (response.status != 200) {
                            L(response)
                            return reject('Init error: ' + response.status)
                        }
                        if (!response || !response.ref) {
                            L(response)
                            return reject('No server id')
                        }
                        const ttl = response.ttl || 20000
                        // Has stored session? restore it.
                        if (this.config.tokens) {
                            return this.loginRestore(response.ref, ttl)
                                .then(res => L('loginRestore: OK'))
                                .catch(err => {
                                    E('loginRestore:', err)
                                    if (fs.existsSync(this.authFile)) {
                                        L('Deleting expired config');
                                        //fs.unlinkSync(this.authFile)
                                    }
                                    return this.loginQRCode(response.ref, ttl)
                                })
                        }
                        return this.loginQRCode(response.ref, ttl)

                    }).then(resolve).catch(reject)
                }

                // Fail on early error
                this.ws.once("error", reject)
                this.ws.once("open", onOpen)
                this.ws.on("message", this.onMessage)
                this.ws.on("close", this.onClose)
            }
        )
    }

    private loginRestore(ref: string, ttl: number) {
        return new Promise((resolve, reject) => {
            this.onReady = (info, err) => err ? reject(err) : resolve(info)
            this.sendCmd('admin', 'login',
                this.config.tokens.client,
                this.config.tokens.server,
                this.config.clientId,
                'takeover'
            ).then(response => {
                L('restoreSession:', response);
                switch (response.status) {
                    case 200:
                        return resolve(response)//must received Conn, nothing todo here
                    case 401:
                        return reject('Unpaired from the phone')
                    case 403:
                        return reject('Access denied, check tos field in the JSON: if it equals or greater than 2, you have violated TOS')
                    case 405:
                        return reject('Already logged in')
                    case 409:
                        return reject('Logged in from another location')
                    default:
                        return reject('Unhandled restore response: ' + response.status)
                }
            })
        })
    }
    private loginQRCode(ref: string, ttl: number) {
        let timer;
        return new Promise((resolve, reject) => {
            // Wait Conn message from server
            this.onReady = (info, err) => {
                clearTimeout(timer);
                (err ? reject(err) : resolve(info))
            }
            const checker = () => {
                L('Refreshing QR Code..')
                this.sendCmd<CmdInitResponse>('admin', 'Conn', 'reref').then(
                    response => {
                        switch (response.status) {
                            case 429:
                                reject('QRCode timeout')
                                break
                            case 200:
                                this.generateQRCode(response.ref)
                                timer = setTimeout(checker, ttl)
                                break;
                            case 304:
                                timer = setTimeout(checker, 3000)
                                break;
                            default:
                                L('QRCode ref Unknown', response)
                                reject('QRCode ref Unknown')
                                break
                        }
                    }
                ).catch(reject)
            }

            L('Please Login..')
            this.generateQRCode(ref)
            timer = setTimeout(checker, ttl)
        })
    }

    private generateQRCode(serverId: string) {
        const qrContent = [
            serverId,
            this.config.keys.publicKey.toString('base64'),
            this.config.clientId
        ].join(',')
        L('QRCode', qrContent);
        require('qrcode-terminal').generate(qrContent, { small: true })
    }

    private handleWhatsAppConn(info: WhatsAppServerMsgConn) {
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

    private onMessage = (data: string | Buffer) => {
        const firstCommaPos = data.indexOf(',');
        const tag = data.slice(0, firstCommaPos).toString('ascii')
        const message: string | Buffer = data.slice(firstCommaPos + 1)
        if (typeof message == 'string') {
            //L('GotString', data);
            if (tag[0] == 's') {
                //server message
                const params: any[] = JSON.parse(message);
                this.handleServerMessage(params.shift() as any, params);
            } else if (this.cmdStack.has(tag)) {
                const handle = this.cmdStack.get(tag)
                this.cmdStack.delete(tag)
                handle.resolve(JSON.parse(message))
            } else {
                L('Unhandled CMD Response', tag, message)
            }
        } else {
            this.decrypt(message)
        }
    }

    private decrypt(data: Buffer) {
        if (!this.config.aesKey) {
            throw new Error("GotBuffer but no key to decrypt")
        }
        if (!this.config.macKey) {
            throw new Error("no hmac key to verify")
        }
        const hmac = createHmac('sha256', this.config.macKey).update(data.slice(32)).digest()
        const hmacServer = data.slice(0, 32)
        if (hmac.compare(hmacServer) !== 0) {
            L('HMAC gen', hmac)
            L('HMAC srv', hmacServer)
            L('HMAC ===', hmac.compare(hmacServer))
            throw new Error('Hmac Miss Match');
        }
        return AESDecrypt(this.config.aesKey, data.slice(32, 32 + 16), data.slice(32 + 16))
        // const cipher = createDecipheriv('aes-256-cbc', this.config.aesKey, data.slice(32, 32 + 16))
        // let decs = [cipher.update(data.slice(32 + 16))]
        // decs.push(cipher.final())
        // cipher.destroy()
        // return Buffer.concat(decs)
    }

    private onClose = (code: Number, message: String) => {
        L("CLOSED!", code, message);
    }
    private onError = (error: Error) => {
        console.error("ERR!", error);
    }

    sendCmd<T = any>(scope: WhatsAppCmdType, cmd: WhatsAppCmdAction, ...args: Array<string | boolean | any[]>): Promise<T> {
        return new Promise(
            (resolve, reject) => {
                const tag = `${this.startTime}.${this.messageConter++}`
                const message = `${tag},${JSON.stringify(
                    [scope, cmd, ...args]
                )}`
                L('SEND', message);
                this.cmdStack.set(tag, { message, resolve, reject })
                this.ws.send(message)
            }
        )
    }

    private handleServerMessage(cmd: WhatsAppServerMsg, params: any[]) {
        switch (cmd) {
            case 'Stream':
                // Ignore
                return;
            case 'Cmd':
                const args = params[0] as WhatsAppServerMsgCmd
                if (this.serverCmdHandlers[args.type]) {
                    this.serverCmdHandlers[args.type](args)
                } else {
                    L('handleServerMessage: unhandled cmd.', cmd, args)
                }
                break;
            case 'Conn':
                this.serverData[cmd] = params[0]
                this.handleWhatsAppConn(params[0])
                break;
            default:
                this.serverData[cmd] = params[0]
                L('handleServerMessage: ignored', cmd, params)
                break;
        }
    }
    private serverCmdHandlers = {
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

    state() {

    }
    close() {
        try {
            this.ws.send('goodbye,,["admin","Conn","disconnect"]')
        } catch{ }
        finally {
            if (this.ws && this.ws.readyState == this.ws.OPEN) {
                this.ws.close()
            }
        }
    }
}