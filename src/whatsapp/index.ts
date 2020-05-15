import Client from "./client";
import { EventEmitter } from "events";
import { WhatsAppServerMsg } from "./interfaces";

class WhatsApp extends EventEmitter {
    client: Client
    private keepAliveTimer: NodeJS.Timeout

    constructor(authFile = '.auth') {
        super()
        this.client = new Client(authFile, this)
    }
    connect() {
        return this.client.connect().then(
            info => {
                this.keepAliveTimer = setTimeout(() => {
                    this.watchdog()
                }, 10000)
                return info
            }
        )
    }
    private watchdog = () => {
        try {
            this.client.ws.send('?,,', 'watchdog')
            this.keepAliveTimer = setTimeout(this.watchdog, 30000)
        } catch (e) {
            this.keepAliveTimer = null
            E('Watchdog fail')
            this.close()
        }
    }

    getContacts() {
        return this.client.sendBin("query", { type: "contacts", epoch: "1" })
    }

    state() {

    }
    close() {
        if (this.keepAliveTimer) clearTimeout(this.keepAliveTimer)
        this.client.ws.send('goodbye,,["admin","Conn","disconnect"]')
        this.client.close()
    }
}

declare interface WhatsApp extends NodeJS.EventEmitter {
    /**
     * its server command, have kind param,
     * if kind 'replaced' then replaced event also emitted
     */
    on(event: 'disconnect', listener: (kind: 'replaced') => void): this;
    /** Login in another web.whatsapp */
    on(event: 'replaced', listener: () => void): this;
    /** WebSocker error */
    on(event: 'error', listener: (this: WebSocket, err: Error) => void): this;
    /** WebSocket Closed */
    on(event: 'close', listener: (this: WebSocket, code: number, reason: string) => void): this;
    /** Got message */
    //on(event: 'message', listener: (tag: string, data: Buffer | string) => void): this;
    /** Got server message, 's' prefixed eg s1, s2, s3 */
    on(event: 'server-message', listener: (cmd: WhatsAppServerMsg, data: Array<any> | Object) => void): this;
    /** '!' prefixed */
    on(event: 'timeskew', listener: (ts: number, message: null | string | Buffer) => void): this;
}

export default WhatsApp