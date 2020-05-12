import WebSocket from "ws";
import { randomBytes } from "crypto";
import { arch, platform } from "os";
export type WhatsAppCmdType = 'admin' | ''
export type WhatsAppCmdAction = 'init' | 'Conn' | 'login' | ''

export default class WhatsAppClient {
    clientName = 'WhatsAppWS'
    /** Compactible Web WhatsApp Version */
    version = '2.2019.6'
    clientId: String
    ws: WebSocket
    private messageConter: number = 0
    private startTime: number;

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
                    this.init()
                })
                this.ws.on("message", this.onMessage)
                this.ws.on("close", this.onClose)
            }
        )
    }

    private init() {
        // Init
        this.sendCmd('admin', 'init',
            this.version.split('.').map(v => parseInt(v)),
            [this.clientName, platform(), arch()],
            this.clientId,
            true)
    }
    private onMessage = (data: WebSocket.Data) => {
        console.log("Gotdata", data);
    }
    private onClose = (code: Number, message: String) => {
        console.log("CLOSED!", code, message);
    }
    private onError = (error: Error) => {
        console.error("ERR!", error);
    }

    sendCmd(scope: WhatsAppCmdType, cmd: WhatsAppCmdAction, ...args: any) {
        const tag = `${this.startTime}.${this.messageConter++}`
        const message = `${tag},${JSON.stringify(
            [scope, cmd, ...args]
        )}`
        console.log('SEND', message);

        this.ws.send(message)
    }

    state() {

    }
    close() {
        this.ws.send('goodbye,,["admin","Conn","disconnect"]')
    }
}