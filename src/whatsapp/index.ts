import Client from "./client";
import { EventEmitter } from "events";

/**
 * Event:
 *  `disconnect` -> its server command, have kind param,
 *                  if kind 'replaced' then replaced event also emitted
 *  `replaced`   -> Login in another web.whatsapp
 */
export default class WhatsApp extends EventEmitter {
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
            this.client.ws.send('?,,')
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