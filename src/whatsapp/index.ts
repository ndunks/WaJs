import Client from "./client";
import { EventEmitter } from "events";
import {
    WhatsAppServerMsg, DataMsgTypes, PreemptMessage,
    BinAttrChat, BinAttrUser, BinAttrResponse, BinNode, Chat,
    METRIC, BinAttr, WhatsAppServerMsgCmdPresence
} from "./interfaces";
import { Color, L } from "../utils";
import "../whatsapp_pb"
import store, { StoreChat } from "../store";
import { Message, MessageKey, WebMessageInfo } from "../whatsapp_pb";
import { binaryOptions, createMessageId, widHelper } from "./helper";


class WhatsApp extends EventEmitter {
    client: Client
    private chatsLoaded = false
    unreadInboxMessage: WebMessageInfo.AsObject[] = []

    constructor(config = null) {
        super()
        this.client = new Client(config, this)
    }

    connect() {
        const preemptHandle = parsed => this.binaryHandle(parsed)
        this.on('preempt', preemptHandle)
        this.on('chats-loaded', () => {
            this.off('preempt', preemptHandle)
            this.presence('available')
        })
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

    queryProfilePicThumb(jid: string) {
        return this.client.ws.send(`,["query","ProfilePicThumb","${jid}"]`, "ProfilePicThumb")
            .then(r => r.eurl);
    }

    queryExist(jid: string) {
        return this.client.ws.sendCmd("query", "exist", jid)
            .then(r => r.status == "200");
    }

    presence(type: 'available' | 'unavailable') {
        const node = this.client.actionNode('set', [
            ['presence', { type }, undefined]
        ])
        return this.client.ws.sendNode(node, undefined, binaryOptions(METRIC.PRESENCE))
    }

    presenceSubscribe(wid: string) {
        let tag = this.client.ws.shortTag();
        return this.client.ws.sock.send(`${tag},,["action","presence","subscribe","${wid}"]`);
    }

    sendTextMessage(jid: string, message) {
        const msg = new Message()
        const key = new MessageKey()
        const webMsg = new WebMessageInfo()
        const msgId = createMessageId()

        key.setId(msgId)
        key.setRemotejid(widHelper.sanitizer(jid))
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

    markRead(jid: string, index: string, count = 1) {
        const node = this.client.actionNode('set', [['read', {
            jid,
            index,
            count: count.toString(),
            kind: undefined,
            owner: 'false',
            chat: undefined
        }, undefined]])
        return this.client.ws.sendNode(node, undefined, binaryOptions(METRIC.READ, {
            ackRequest: true
        }))
    }

    markAllRead(chat: StoreChat) {
        const m = chat.getLastInMessage()
        return this.markRead(m.key.remotejid, m.key.id, chat.unread)
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
                    L(attr.add, msg.key, msg.message)
                }
                store.getChat(msg.key.remotejid).addMessage({
                    key: msg.key,
                    direction: msg.key.fromme ? 'out' : 'in',
                    message: msg.message,
                })
                break
            case "last":
                const d = childs.map(c => this.parseWebMessageInfo(c, "last"))
                for (msg of d as WebMessageInfo.AsObject[]) {
                    store.getChat(msg.key.remotejid).addMessage({
                        key: msg.key,
                        direction: msg.key.fromme ? 'out' : 'in',
                        message: msg.message
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
                chat.addMessages(h.map(msg => ({
                    key: msg.key,
                    direction: msg.key.fromme ? 'out' : 'in',
                    message: msg.message,
                    //ack: attr.add == 'unread' ? 1 : 2,
                })), attr.add)

                break
            default:
                L(Color.r('Handle action not known:'), attr)
                break
        }
        if (!this.chatsLoaded && attr.last == 'true') {
            this.chatsLoaded = true
            L(Color.y('*** chats-loaded ***'))
            this.emit('chats-loaded')
        }
    }

    parseWebMessageInfo(node: BinNode, kind: string) {
        switch (node[0]) {
            case 'message':
                const msg = WebMessageInfo.deserializeBinary(Buffer.from(node[2])).toObject()
                if (msg && msg.key && msg.key.remotejid.indexOf('s.whatsapp.net')) {
                    msg.key.remotejid = widHelper.serialize(widHelper.parse(msg.key.remotejid))
                }
                return msg
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
    /** After login and received initial chats data from server. 
     * 
     * TODO: Sometime this event is not called (maybe when account has no chats)
    */
    on(event: 'chats-loaded', listener: () => void): this;
    /** '!' prefixed */
    on(event: 'timeskew', listener: (ts: number, message: null | string | Buffer) => void): this;
    on(event: 'preempt', listener: (data: PreemptMessage) => void): this;
    on(event: 'Stream', listener: (data: any) => void): this;
    on(event: 'Props', listener: (data: any) => void): this;
    on(event: 'Blocklist', listener: (data: any) => void): this;
    on(event: 'Presence', listener: (data: WhatsAppServerMsgCmdPresence) => void): this;
    on(event: 'Msg', listener: (data: DataMsgTypes) => void): this;
    on(event: 'qrcode', listener: (data: string) => void): this;

}

export default WhatsApp