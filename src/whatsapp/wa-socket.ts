import WebSocket from "ws";
import { WhatsAppCmdType, WhatsAppCmdAction, WhatsAppServerMsgConn } from "./interfaces";
import { EventEmitter } from "events";
import { Color } from "../utils";
import { commandTagHandlers } from "./handler";


// export declare interface WASocket {
//     //on(event: 'disconnect', listener: (kind: 'replaced') => void): this;
//     on(event: 'message', listener: (tag: string, data: Buffer | string) => void): this;
//     on(event: 'open', listener: () => void): this;
//     /** Forward events from WebSocker */
//     on(event: 'close', listener: (code: number, reason: string) => void): this;
//     on(event: 'error', listener: (err: Error) => void): this;
// }

export class WASocket {
    private messageConter: number = 0

    public sock: WebSocket
    constructor(private event: EventEmitter) {
        
        this.sock = new WebSocket("wss://web.whatsapp.com/ws", {
            origin: "https://web.whatsapp.com",
        })
        this.sock.on('error', (...args) => event.emit('error', ...args))
        this.sock.on('close', (...args) => event.emit('close', ...args))
        this.sock.on('open', (...args) => event.emit('open', ...args))
        this.sock.on('message', (data: string | Buffer) => {
            const firstCommaPos = data.indexOf(',');
            const tag = data.slice(0, firstCommaPos).toString('ascii')
            const message = data.slice(firstCommaPos + 1)
            event.emit('message', tag, message)
        })

    }

    send<T = any>(message: Buffer | string) {
        return new Promise<T>(
            (resolve, reject) => {
                const tag = `${Date.now()}.${this.messageConter++}`
                if (typeof message == 'string') {
                    message = `${tag},${message}`
                } else {
                    // encrypted
                    message = Buffer.concat([Buffer.from(`${tag},`, 'ascii'), message])
                }
                commandTagHandlers.set(tag, { message, resolve, reject })
                L(Color.y('>>'), tag)
                this.sock.send(message)
            }
        )
    }

    sendCmd<T = any>(scope: WhatsAppCmdType, cmd: WhatsAppCmdAction, ...args: Array<string | boolean | any[]>) {
        return this.send<T>(JSON.stringify(
            [scope, cmd, ...args]
        ))
    }

    close() {
        if (this.sock && this.sock.readyState == this.sock.OPEN) {
            this.sock.close()
        }
    }
}

export default WASocket