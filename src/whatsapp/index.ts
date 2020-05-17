import Client from "./client";
import { EventEmitter } from "events";
import {
    WhatsAppServerMsg, DataMsgTypes, DataPresence, PreemptMessage,
    BinNodeAttrChat, BinNodeAttrUser
} from "./interfaces";

class WhatsApp extends EventEmitter {
    client: Client
    chats: BinNodeAttrChat[] = []
    contacts: BinNodeAttrUser[] = []
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
                this.once('close', () => {
                    if (this.keepAliveTimer) {
                        clearTimeout(this.keepAliveTimer)
                        this.keepAliveTimer = null
                    }
                })
                return info
            }
        )
    }
    private watchdog = () => {
        // ?,,
        this.client.ws.send(',', 'watchdog', '?').then((e) => {
            this.keepAliveTimer = setTimeout(this.watchdog, 30000)
        }).catch(e => {
            this.keepAliveTimer = null
            E('Watchdog fail')
            this.close()
        })

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
    /** On preempt chats received */
    on(event: 'chats-loaded', listener: (chats: BinNodeAttrChat[]) => void): this;
    /** '!' prefixed */
    on(event: 'timeskew', listener: (ts: number, message: null | string | Buffer) => void): this;
    on(event: 'preempt', listener: (data: PreemptMessage) => void): this;
    on(event: 'Stream', listener: (data: any) => void): this;
    on(event: 'Props', listener: (data: any) => void): this;
    on(event: 'Blocklist', listener: (data: any) => void): this;
    on(event: 'Presence', listener: (data: DataPresence) => void): this;
    on(event: 'Msg', listener: (data: DataMsgTypes) => void): this;
}

export default WhatsApp