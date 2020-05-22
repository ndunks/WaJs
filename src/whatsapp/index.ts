import Client from "./client";
import { EventEmitter } from "events";
import {
    WhatsAppServerMsg, DataMsgTypes, DataPresence, PreemptMessage,
    BinAttrChat, BinAttrUser, BinAttrResponse, BinNode, Chat, ChatMessage,
    METRIC,
    BinAttr
} from "./interfaces";
import { Color } from "../utils";
import * as fs from "fs";
import "../whatsapp_pb"
import store from "../store";
import { Message, MessageKey, WebMessageInfo } from "../whatsapp_pb";
import { binaryOptions, createMessageId, widHelper } from "./helper";


class WhatsApp extends EventEmitter {
    client: Client
    private isInitialized = false
    unreadInboxMessage: WebMessageInfo.AsObject[] = []

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

    query(obj: BinAttr) {
        const node = this.client.queryNode(obj)
        const metric = METRIC[`QUERY_${obj.type.toUpperCase()}`]
        return this.client.ws.sendNode(
            node,
            undefined,
            metric && binaryOptions(metric)
        )
    }

    queryContacts() {
        return this.query({ type: 'contacts', kind: undefined })
    }

    queryChat() {
        return this.query({ type: 'chat' })
    }

    queryStatus() {
        return this.query({ type: 'status' })
    }

    presence(type: 'available' | 'unavailable') {
        const node = this.client.actionNode('set', [
            ['presence', { type }, undefined]
        ])
        return this.client.ws.sendNode(node, undefined, binaryOptions(METRIC.PRESENCE))
    }

    sendTextMessage(jid: string, message) {
        const msg = new Message()
        const key = new MessageKey()
        const webMsg = new WebMessageInfo()
        const msgId = createMessageId()
        key.setId(msgId)
        key.setRemotejid(jid)
        key.setFromme(true)
        msg.setConversation(message)
        webMsg.setKey(key)
        webMsg.setMessage(msg)
        webMsg.setMessagetimestamp(Math.floor(Date.now() / 1000))
        webMsg.setStatus(1)
        const buf = webMsg.serializeBinary()
        const node = this.client.actionNode("relay", [
            ["message", undefined, buf]
        ])
        return this.client.ws.sendNode(node, msgId, binaryOptions(METRIC.MESSAGE))
    }

    markRead() {
        /*
        */
    }
    // loadMessage
    /*
    [
  "query",
  {
    "type": "message",
    "kind": "before",
    "jid": "628997026464@c.us",
    "count": "50",
    "index": "3EB01C2454884CAA32CC",
    "owner": "false",
    "epoch": "2"
  },
  null
]
    */

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
        store.storeContact(attr)
    }

    binaryHandle_chat(attr: BinAttrChat, childs) {
        const chat: Chat = {
            unread: parseInt(attr.count),
            jid: attr.jid,
            modify_tag: parseInt(attr.modify_tag),
            name: attr.name,
            spam: attr.spam == 'true',
            t: parseInt(attr.t)
        }
        store.storeChat(chat)
    }

    binaryHandle_action(attr: BinAttrChat, childs: BinNode[]) {
        let msg: WebMessageInfo.AsObject
        L(Color.b("<< Action"), attr)

        switch (attr.add) {
            // Realtime new message?
            case "relay":
            case "update":
                msg = this.parseWebMessageInfo(childs[0], "relay") as WebMessageInfo.AsObject
                if (!msg) {
                    L(Color.r("<< Action IGNORED"), attr.add, attr, childs)
                    return
                }
                if (!msg.key.fromme) {
                    const jid = widHelper.parse(msg.key.remotejid)
                    switch (jid.server) {
                        case 'c.us':
                            this.emit('new-user-message', msg)
                            break;

                        case 'g.us':
                            this.emit('new-group-message', msg)
                            break;
                        case 'broadcast':
                            if (jid.user == 'status') {
                                this.emit('status-broadcast', msg)
                                break;
                            }
                        default:
                            L(Color.y('Unknown sender message'), jid, msg.message)
                            break;
                    }
                } else {
                    L(attr.add, msg.key, msg.message.conversation)
                }
                store.getChat(msg.key.remotejid).addMessage({
                    key: msg.key,
                    direction: msg.key.fromme ? 'out' : 'in',
                    message: msg.message,
                    ack: 1,
                })
                break
            case "last":
                const d = childs.slice(0, 4).map(c => this.parseWebMessageInfo(c, "last"))
                for (msg of d as WebMessageInfo.AsObject[]) {
                    store.getChat(msg.key.remotejid).addMessage({
                        key: msg.key,
                        direction: msg.key.fromme ? 'out' : 'in',
                        message: msg.message,
                        //ack: 3,
                        recent: true
                    })
                }
                break
            case "before":
            case "after":
            case "unread":
                const h = childs.map(
                    c => this.parseWebMessageInfo(c, attr.add) as WebMessageInfo.AsObject
                )

                const chat = store.getChat(h[0].key.remotejid)
                h.forEach(msg => {
                    chat.addMessage({
                        key: msg.key,
                        direction: msg.key.fromme ? 'out' : 'in',
                        message: msg.message,
                        //ack: attr.add == 'unread' ? 1 : 2,
                    })
                })
                break
            default:
                L('Handle action not known:', attr.add)
                break
        }
        if (!this.isInitialized && attr.last == 'true') {
            this.isInitialized = true
            this.emit('initialized')
        }
    }

    parseWebMessageInfo(node: BinNode, kind: string) {
        switch (node[0]) {
            case 'message':
                return WebMessageInfo.deserializeBinary(Buffer.from(node[2])).toObject()
            case "groups_v2":
                return L(Color.r('Not implemented parseMsgGp2(node)'))
            case "broadcast":
                return L(Color.r('Not implemented parseMsgBroadcast(node'))
            case "notification":
                return L(Color.r('Not implemented parseMsgNotification(node)'))
            case "call_log":
                return L(Color.r('Not implemented parseMsgCallLog(node)'))
            case "security":
                return L(Color.r('Not implemented parseMsgSecurity(node)'))
            default:
                return L(Color.r("parseMsg: unhandled"), node)
        }
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
    /** No new Message arrived */
    on(event: 'new-user-message', listener: (msg: WebMessageInfo.AsObject) => void): this;
    on(event: 'new-group-message', listener: (msg: WebMessageInfo.AsObject) => void): this;
    on(event: 'status-broadcast', listener: (msg: WebMessageInfo.AsObject) => void): this;
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