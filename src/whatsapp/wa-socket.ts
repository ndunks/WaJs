import WebSocket from "ws";
import { WhatsAppCmdType, WhatsAppCmdAction, WhatsAppClientConfig } from "./interfaces";
import { EventEmitter } from "events";
import { Color } from "../utils";
import { commandTagHandlers } from "./handler";
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
                message = hmacDecrypt(this.config.aesKey, this.config.macKey, message)
            } else if (message.length && (message[0] == '[' || message[0] == '{')) {
                logs.push(Color.b('JSON'))
                message = JSON.parse(message)
            }

            switch (tag[0]) {
                case '!':
                    let ts = parseInt(tag.slice(1))
                    this.event.emit('timeskew', ts, message)
                    logs.push('[timeskew]');
                    break;

                case 's':
                    if (message instanceof Buffer) {
                        logs.push(Color.r('(!) Binary server message'), message.length)
                    } else if (typeof message == 'object') {
                        const params: any[] = message as any
                        logs.push(Color.b('[server-message]'))
                        this.event.emit('server-message', params.shift(), params)
                    } else {
                        logs.push(Color.r('(!) Not object server message'), message)
                    }
                    break;
                default:
                    if (commandTagHandlers.has(tag)) {
                        logs.push(Color.g('[handled]'))
                        const handle = commandTagHandlers.get(tag)
                        commandTagHandlers.delete(tag)
                        try {
                            handle.resolve(message)
                        } catch (error) {
                            logs.push(Color.r('ERR'), error)
                        }
                    } else {
                        logs.push(Color.r('[unhandled]'))
                        if (typeof message == 'string' || message instanceof Buffer) {
                            logs.push(message.constructor.name, message.length)
                        } else {
                            logs.push(message)
                        }
                        //event.emit('message', tag, message)
                    }
                    break
            }
            L.apply(undefined, logs)
        })

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
                commandTagHandlers.set(tag, { message, resolve, reject, hint })
                L(Color.y('>>'), tag, hint)
                this.sock.send(message)
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