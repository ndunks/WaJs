import WebSocket from "ws";
import { WhatsAppCmdType, WhatsAppCmdAction, WhatsAppClientConfig } from "./interfaces";
import { EventEmitter } from "events";
import { Color } from "../utils";
import { commandTagHandlers, AsyncTagHandler } from "./handler";
import { hmacDecrypt, hmacEncrypt } from "./secure";

export class WASocket {
    private messageConter: number = 0

    public sock: WebSocket
    constructor(private event: EventEmitter, private config: WhatsAppClientConfig) {

        this.sock = new WebSocket("wss://web.whatsapp.com/ws", {
            origin: "https://web.whatsapp.com",
        })
        this.sock.on('error', (...args) => event.emit('error', ...args))
        this.sock.on('close', (...args) => event.emit('close', ...args))
        this.sock.on('open', (...args) => event.emit('open', ...args))
        this.sock.on('message', (data: string | Buffer) => {
            let firstCommaPos = data.indexOf(',');
            let tag: string;
            let message: string | Buffer;
            const logs: any[] = [Color.g("<<")]
            if (firstCommaPos < 0) {
                if (typeof data == 'string') {
                    tag = data
                    message = ''
                } else {
                    tag = ''
                    message = data
                    logs.push(Color.r('no tag'))
                }
            } else {
                tag = data.slice(0, firstCommaPos).toString('ascii')
                message = data.slice(firstCommaPos + 1)
            }

            logs.push(tag)
            if (message instanceof Buffer) {
                logs.push(Color.b('BIN'))
                try {
                    message = hmacDecrypt(this.config.aesKey, this.config.macKey, message)
                } catch (error) {
                    logs.push(Color.r(error))
                    message = ''
                }
            } else if (message.length && (message[0] == '[' || message[0] == '{')) {
                logs.push(Color.b('JSON'))
                message = JSON.parse(message)
            }
            let emitEvents: any[];
            let handle: AsyncTagHandler;

            switch (tag[0]) {
                case '!':
                    let ts = parseInt(tag.slice(1))
                    logs.push('[timeskew]');
                    emitEvents = ['timeskew', ts, message]
                    break;

                case 's':
                    if (message instanceof Buffer) {
                        logs.push(Color.r('(!) Binary server message'), message.length)
                    } else if (typeof message == 'object') {
                        const params: any[] = message as any
                        logs.push(Color.b('[server-message]'))
                        emitEvents = ['server-message', params.shift(), params]
                    } else {
                        logs.push(Color.r('(!) Not object server message'), message)
                    }
                    break;
            }

            // Check for async handler that waiting thats tag
            if (tag) {
                if (commandTagHandlers.has(tag)) {
                    logs.push(Color.g('[handled]'))
                    handle = commandTagHandlers.get(tag)
                    commandTagHandlers.delete(tag)
                } else if (!emitEvents) {
                    logs.push(Color.r('[unhandled]'))
                    if (typeof message != 'string' && !(message instanceof Buffer))
                        logs.push(message)
                }
            }
            L.apply(undefined, logs)
            if (emitEvents) {
                this.event.emit.apply(this.event, emitEvents)
            }
            if (handle) {
                try {
                    handle.tag = tag
                    handle.callback.call(handle, message)
                } catch (error) {
                    E('callback error', error)
                }
            }
        })

    }
    sendRaw(data, cb: (err?: Error) => void) {
        return this.sock.send(data, cb)
    }
    send<T = any>(message: Buffer | string, hint?: string) {
        return new Promise<T>(
            (resolve, reject) => {
                const tag = `${Date.now()}.${this.messageConter++}`
                if (typeof message == 'string') {
                    message = `${tag},${message}`
                } else {
                    // encrypt
                    message = hmacEncrypt(this.config.aesKey, this.config.macKey, message)
                    message = Buffer.concat([Buffer.from(`${tag},`, 'ascii'), message])
                }
                commandTagHandlers.set(tag, { sentMessage: message, callback: resolve, hint })
                L(Color.y('>>'), tag, hint)
                this.sock.send(message, err => err ? reject(err) : null)
            }
        )
    }

    sendCmd<T = any>(scope: WhatsAppCmdType, cmd: WhatsAppCmdAction, ...args: Array<string | boolean | any[]>) {
        return this.send<T>(JSON.stringify(
            [scope, cmd, ...args]
        ),
            `${scope},${cmd}`
        )
    }

    close() {
        if (this.sock && this.sock.readyState == this.sock.OPEN) {
            this.sock.close()
        }
    }
}

export default WASocket