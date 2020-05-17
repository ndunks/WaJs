import WebSocket from "ws";
import { WhatsAppCmdType, WhatsAppCmdAction, WhatsAppClientConfig, WANode } from "./interfaces";
import { EventEmitter } from "events";
import { Color } from "../utils";
import { commandTagHandlers, AsyncTagHandler } from "./handler";
import { hmacDecrypt, hmacEncrypt } from "./secure";
import { readNode } from "./binary/reader";
import BufferReader from "./binary/buffer-reader";
import BinaryBuffer from "./binary/buffer";

export class WASocket {
    private messageConter: number = 0

    public sock: WebSocket
    private shortTagBase: string = `${Math.floor(Date.now() / 1000) % 1000}`

    constructor(private event: EventEmitter, private config: WhatsAppClientConfig) {

        this.sock = new WebSocket("wss://web.whatsapp.com/ws", {
            origin: "https://web.whatsapp.com",
        })
        this.sock.on('error', (...args) => event.emit('error', ...args))
        this.sock.on('close', (...args) => event.emit('close', ...args))
        this.sock.on('open', (...args) => event.emit('open', ...args))
        this.sock.on('message', (data: string | Buffer) => {
            let firstCommaPos = data.indexOf(',');
            let id: string;
            let message: string | Buffer;
            const logs: any[] = [Color.g("<<")]
            if (firstCommaPos < 0) {
                if (typeof data == 'string') {
                    id = data
                    message = ''
                } else {
                    id = ''
                    message = data
                    logs.push(Color.r('no tag'))
                }
            } else {
                id = data.slice(0, firstCommaPos).toString('ascii')
                message = data.slice(firstCommaPos + 1)
            }

            logs.push(Color.g(id))
            let parsed: WANode = null;
            if (message instanceof Buffer) {
                logs.push(Color.b('BIN'))
                try {
                    message = hmacDecrypt(this.config.aesKey, this.config.macKey, message)
                    parsed = readNode(new BufferReader(new BinaryBuffer(message)))
                } catch (error) {
                    logs.push(Color.r(error))
                    parsed = ['FAIL']
                }
            } else if (message) {
                if (message.length && (message[0] == '[' || message[0] == '{')) {
                    logs.push(Color.b('JSON'))
                    parsed = JSON.parse(message)
                } else {
                    logs.push(Color.r('(!) Cannot parse'))
                }
            } else logs.push(Color.m('[no data]'))
            let emitEvents: any[];
            let handle: AsyncTagHandler;

            switch (id[0]) {
                case '!':
                    let ts = parseInt(id.slice(1))
                    logs.push('[timeskew]');
                    emitEvents = ['timeskew', ts, parsed]
                    break;

                case 's':
                    if (Array.isArray(parsed)) {
                        const cmd = parsed.shift()
                        logs.push(Color.b('[server-message]'), Color.g(cmd))
                        emitEvents = ['server-message', cmd, parsed]
                    } else {
                        logs.push(Color.r('(!) Not array'), parsed)
                    }
                    break;
            }

            // Check for async handler that waiting thats tag
            if (id) {
                if (commandTagHandlers.has(id)) {
                    logs.push(Color.g('[handled]'))
                    handle = commandTagHandlers.get(id)
                    commandTagHandlers.delete(id)
                } else if (!emitEvents) {
                    logs.push(Color.r('[unhandled]'), parsed[0] || parsed)
                }
            }
            L.apply(undefined, logs)
            if (emitEvents) {
                this.event.emit.apply(this.event, emitEvents)
            }
            if (handle) {
                try {
                    handle.tag = id
                    handle.callback.call(handle, parsed)
                } catch (error) {
                    E('callback error', error)
                }
            }
        })

    }
    sendRaw(data, cb: (err?: Error) => void) {
        return this.sock.send(data, cb)
    }
    shortTag() {
        return `${this.shortTagBase}.--${this.messageConter++}`
    }
    tag() {
        return `${Math.floor(Date.now() / 1000)}.--${this.messageConter++}`
    }
    send<T = any>(message: Buffer | string, hint?: string, tag?: string) {
        if (!tag) {
            tag = this.tag()
        }
        return new Promise<T>(
            (resolve, reject) => {
                if (typeof message == 'string') {
                    message = `${tag},${message}`
                } else {
                    // encrypt
                    message = hmacEncrypt(this.config.aesKey, this.config.macKey, message)
                    message = Buffer.concat([Buffer.from(`${tag},`, 'ascii'), message])
                }
                commandTagHandlers.set(tag, { sentMessage: message, callback: resolve, hint })
                L(Color.y('>> ' + tag), hint)
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
    sendBin<T = any>(cmd: string, attr: any, data?: any, hint?: string) {
        const msg = [cmd, attr, data]
        console.log('sendBin', msg);
        return this.send<T>(
            Buffer.from(JSON.stringify(msg), 'ascii'),
            hint,
            this.shortTag()
        )
    }

    close() {
        if (this.sock && this.sock.readyState == this.sock.OPEN) {
            this.sock.close()
        }
    }
}

export default WASocket