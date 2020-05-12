import WebSocket from "ws";
import { randomBytes } from "crypto";
import { arch, platform } from "os";
import { CmdInitResponse, WhatsAppCmdType, WhatsAppCmdAction, WhatsAppServerMsg } from "./interfaces";
const Curve = require("curve25519-n")

export default class WhatsAppClient {
    /** This app name */
    clientName = 'WhatsAppWS'

    /** Compactible Web WhatsApp Version */
    version = '2.2019.6'

    /** 16 Byte ID Auto Generated */
    clientId: String

    /** Our generated secret key */
    clientSecretKey: Buffer

    /** Our generated private key */
    clientPrivateKey: Buffer

    /** Our generated public key */
    clientPublicKey: Buffer

    /** ServerID Obtained from init */
    serverId: string
    serverData: any;

    ws: WebSocket

    private isLoggedIn = false
    private messageConter: number = 0
    private startTime: number;
    private cmdStack = new Map<String, { message: String, resolve: Function, reject: Function }>()

    constructor(options?: any) {
        if ('undefined' != typeof options) {
            Object.keys(options).forEach(
                k => this[k] = options[k]
            )
        }
        if ('undefined' == typeof this.clientId) {
            // Generate 16 byte client ID
            this.clientId = randomBytes(16).toString('base64');
        }
        if ('undefined' == typeof this.clientSecretKey) {
            this.clientSecretKey = randomBytes(32);
            this.clientPrivateKey = Curve.makeSecretKey(Buffer.from(this.clientSecretKey))
            this.clientPublicKey = Curve.derivePublicKey(Buffer.from(this.clientPrivateKey))
        }
    }

    connect() {
        return new Promise(
            (resolve, reject) => {
                this.startTime = new Date().getTime()
                // Connecting to whats app server
                this.ws = new WebSocket("wss://web.whatsapp.com/ws", {
                    origin: "https://web.whatsapp.com",
                    headers: {
                        "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.113 Safari/537.36 WhatsAppWS/0.0.1"
                    }
                })

                this.ws.once("error", reject)
                this.ws.once("open", () => {
                    this.ws.removeListener("error", reject)
                    this.ws.on('error', this.onError)
                    this.init().then(resolve).catch(reject)
                })
                this.ws.on("message", this.onMessage)
                this.ws.on("close", this.onClose)
            }
        )
    }

    private init() {
        // Init
        return this.sendCmd<CmdInitResponse>('admin', 'init',
            this.version.split('.').map(v => parseInt(v)),
            [this.clientName, platform(), arch()],
            this.clientId,
            true).then(
                response => {
                    if (!response || !response.ref) {
                        return Promise.reject('No server id')
                    }
                    return this.waitForLogin(response.ref, response.ttl || 20000)
                }
            )
    }

    private waitForLogin(ref: string, ttl: number) {
        return new Promise((resolve, reject) => {
            let timer;
            // Wait first server response after scan QR CODE, ignore s2,s3,s4
            this.cmdStack.set('s1', {
                message: null,
                resolve() {
                    clearTimeout(timer)
                    resolve(this.isLoggedIn = true)
                },
                reject
            })
            const checker = () => {
                if (this.isLoggedIn) return;
                console.log('Refreshing QR Code..')
                this.sendCmd<CmdInitResponse>('admin', 'Conn', 'reref').then(
                    response => {
                        if (response.status != 200) {
                            return Promise.reject('QRCode timeout')
                        }
                        this.generateQRCode(response.ref)
                        timer = setTimeout(checker, ttl)
                    }
                ).catch(reject)
            }

            console.log('Please Login..')
            this.generateQRCode(ref)
            timer = setTimeout(checker, ttl)
        })
    }

    generateQRCode(serverId: string) {
        const qrContent = [
            serverId,
            this.clientPublicKey.toString('base64'),
            this.clientId
        ].join(',')
        console.log('QR', qrContent);
        require('qrcode-terminal').generate(qrContent,
            {
                small: true
            })
    }

    private onMessage = (data: WebSocket.Data) => {
        if (typeof data == 'string') {
            console.log('GotString', data);
            const firstCommaPos = data.indexOf(',');
            const tag = data.slice(0, firstCommaPos)
            const message = data.slice(firstCommaPos + 1)
            console.log(tag, message);
            if (tag[0] == 's') {
                //server message
                const params: any[] = JSON.parse(message);
                this.handleServerMessage(params.unshift() as any, params);
            }
            if (this.cmdStack.has(tag)) {
                const handle = this.cmdStack.get(tag)
                this.cmdStack.delete(tag)
                handle.resolve(JSON.parse(message))
            } else {
                console.log('Unhandled CMD Response', tag, message)
            }
        } else {
            console.log("GotBuffer", data);
        }
    }
    private onClose = (code: Number, message: String) => {
        console.log("CLOSED!", code, message);
    }
    private onError = (error: Error) => {
        console.error("ERR!", error);
    }

    sendCmd<RESPONSE = any>(scope: WhatsAppCmdType, cmd: WhatsAppCmdAction, ...args: any): Promise<RESPONSE> {
        return new Promise(
            (resolve, reject) => {
                const tag = `${this.startTime}.${this.messageConter++}`
                const message = `${tag},${JSON.stringify(
                    [scope, cmd, ...args]
                )}`
                console.log('SEND', message);
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
                console.log('WhatsAppServerCommand', cmd, params);
                break;
            case 'Conn':

                break;
            default:
                this.serverData[cmd] = params
                break;
        }
    }

    state() {

    }
    close() {
        this.ws.send('goodbye,,["admin","Conn","disconnect"]')
    }
}