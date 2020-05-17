import { randomBytes, createHmac } from "crypto";
import { arch, platform } from "os";
import {
    CmdInitResponse, WhatsAppCmdType, WhatsAppCmdAction, WhatsAppServerMsg,
    WhatsAppServerMsgConn, WhatsAppServerMsgCmd, WhatsAppServerMsgCmdChallenge, WhatsAppClientConfig, PreemptMessage, BinNodeUser, BinNodeChat, BinNodeResponseContacts, BinNodeResponseChat, BinNodeAttrChat, BinNodeAttrUser
} from "./interfaces";
import * as fs from 'fs'
import { configLoad, configStore, Color } from "../utils";
import { generateKeyPair, decryptEncryptionKeys } from "./secure";
import authRestoreTakeOver from "./auth/restore-takeover";
import WASocket from "./wa-socket";
import WhatsApp from ".";

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
    /** Internal command handler */
    private serverCmdHandlers = {
        disconnect: (args) => {
            this.wa.emit('disconnect', args.kind)
            if (args.kind == 'replaced') {
                this.wa.emit('replaced')
            }
        },
        challenge: (args: WhatsAppServerMsgCmdChallenge) => {
            L('Handling challenge');
            const signed = this.sign(Buffer.from(args.challenge, 'base64'))
            return this.ws.sendCmd('admin', 'challenge',
                signed.toString('base64'),
                this.config.tokens.server,
                this.config.clientId)
                .then(
                    res => L('Chalenge response', res)
                )
        }
    }

    constructor(private authFile = '.auth', private wa: WhatsApp) {
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

                this.ws = new WASocket(this.wa, this.config, this.handlePreempt)
                const onOpen = () => {
                    // Swap error listener
                    this.wa.removeListener("error", reject)
                    // INIT
                    this.ws.sendCmd<CmdInitResponse>('admin', 'init',
                        this.version.split('.').map(v => parseInt(v)),
                        [this.clientName, platform(), arch()],
                        this.config.clientId,
                        true
                    ).then(response => {
                        if (response.status != 200) {
                            L(response)
                            reject('Init error: ' + response.status)
                            this.close()
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
                this.wa.once("error", reject)
                this.wa.once("open", onOpen)
                this.wa.on("server-message", this.handleServerMessage.bind(this))
            }
        )
    }

    private handleWhatsAppConn(info: WhatsAppServerMsgConn) {
        if (!this.onReady) {
            return L('Got Conn but no handler, ignore it', info)
        }
        // On restored session is not contain secret
        if (info.secret) {
            this.config.serverSecret = Buffer.from(info.secret, 'base64');
            const result = decryptEncryptionKeys(this.config.serverSecret, this.config.keys.privateKey)
            this.config.aesKey = result.aesKey
            this.config.macKey = result.macKey
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

    private handleServerMessage(cmd: WhatsAppServerMsg, params: any[]) {
        switch (cmd) {
            case 'Stream':
            case 'Props':
            case 'Blocklist':
            case 'Presence':
            case 'Msg':
                return this.wa.emit(cmd, params[0])
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
                L(Color.r('handleServerMessage:'), cmd, params)
                break;
        }
    }

    private handlePreempt = (data: PreemptMessage) => {
        if (data[0] != 'response') {
            L(Color.r('handlePreempt: but cmd is'), data[0])
            return
        }
        let childs = [];
        const type = data[1] && data[1].type || ''
        if (Array.isArray(data[2])) {
            childs.push(...data[2].map(v => v[1]))
        }
        switch (type) {
            case 'contacts':
                this.wa.contacts.push(...childs)
                break;
            case 'chat':
                this.wa.chats.push(...childs)
                this.wa.emit('chats-loaded', childs)
                break;

            default:
                L(Color.r('handlePreempt: unknown type'), type)
                break;
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
