import Client from "./client";
import { EventEmitter } from "events";
import {
    WhatsAppServerMsg, DataMsgTypes, DataPresence, PreemptMessage,
    BinAttrChat, BinAttrUser, BinAttrResponse, BinNode
} from "./interfaces";
import { Color } from "../utils";
import * as fs from "fs";
import "../whatsapp_pb"

class WhatsApp extends EventEmitter {
    client: Client
    chats: BinAttrChat[] = []
    contacts: BinAttrUser[] = []

    constructor(authFile = '.auth') {
        super()
        this.client = new Client(authFile, this)
        const preemptHandle = parsed => this.binaryHandle(parsed)
        this.on('preempt', preemptHandle)
        this.on('initialized', () => this.off('preempt', preemptHandle))
    }

    connect() {
        return this.client.connect()
    }

    close() {
        this.client.ws.send('goodbye,,["admin","Conn","disconnect"]')
        this.client.close()
    }

    binaryHandle(parsed: BinNode) {
        if ('undefined' == typeof this[`binaryHandle_${parsed[0]}`]) {
            L(Color.r('Missing binaryHandler'), parsed[0])
        } else {
            return this[`binaryHandle_${parsed.shift()}`](...parsed)
        }
    }

    binaryHandle_response(attr: BinAttrResponse, childs) {
        if (Array.isArray(childs)) {
            childs.forEach(child => this.binaryHandle(child))
        } else {
            L(Color.r("binaryHandle_response: invalid child"), childs)
        }
    }

    binaryHandle_user(attr: BinAttrUser, childs) {
        this.contacts.push(attr)
    }

    binaryHandle_chat(attr: BinAttrChat, childs) {
        this.chats.push(attr)
    }

    binaryHandle_action(attr: BinAttrChat, childs) {
        // fs.writeFileSync(`etc/proto-sample/action-${Date.now()}-add-${attr.add}.bin`, Buffer.from(childs[0][2]))
        L('action', attr, childs[0])
        switch (attr.add) {
            case "relay":
            case "update":
               /*  var o = this.parseMsg(n[0], "relay");
                if (1 !== r && LOG(4)(Ae()),
                o) {
                    LOG(2)(Se(), [e, "action", "msg", a.add, o.type, o.from, o.to, o.id, o.author].join(","));
                    var s = this.msgGetTarget(o);
                    (0,
                    v.default)([{
                        meta: a,
                        chat: s,
                        msg: o
                    }])
                } else
                    LOG(4)(_e()); */
                break;
            case "last":
                /* for (var d = [], c = 0; c < r; c++) {
                    var u = this.parseMsg(n[c], "last");
                    u ? d.push(u) : LOG(4)(Ee())
                }
                if (d.length > 0) {
                    LOG(2)(ye(), [e, "action", "msg", "last", n.length].join(","));
                    for (var l = {
                        recent: !0,
                        meta: a,
                        binarySize: t
                    }, f = 0; f < d.length; f++)
                        l[this.msgGetTarget(d[f])] = d[f];
                    (0,
                    v.default)([l])
                } else
                    LOG(4)(je()); */
                break;
            case "before":
            case "after":
            case "unread":
                /* if (r > 0) {
                    for (var h = [], p = 0; p < r; p++) {
                        var g = this.parseMsg(n[p], a.add);
                        g ? h.push(g) : LOG(4)(ve())
                    }
                    if (h.length > 0) {
                        var m = this.msgGetTarget(h[0]);
                        LOG(2)(be(), [e, "action", "msg", a.add, m, h.length].join(",")),
                        (0,
                        v.default)([{
                            meta: a,
                            chat: m,
                            msgs: h,
                            binarySize: t
                        }])
                    } else
                        LOG(4)(me(), a.add)
                } else
                    LOG(4)(ge()); */
                break;
            default:
                // LOG(4)(pe())
            }
    }

    binaryHandle_message(attr: BinAttrChat, data) {
        //const obj: any = proto.proto.Message.deserializeBinary(data).toObject()

        //L('message', attr, data)
    }

}

declare interface WhatsApp extends NodeJS.EventEmitter {
    /**
     * its server command, have kind param,
     * if kind 'replaced' then replaced event also emitted
     */
    on(event: string, listener: (...args: any[]) => void): this;
    on(event: 'open', listener: () => void): this;
    /** After login and received some initial data from server */
    on(event: 'initialized', listener: () => void): this;
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
    on(event: 'chats-loaded', listener: (chats: BinAttrChat[]) => void): this;
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