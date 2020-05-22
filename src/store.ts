import { BinAttr, BinAttrUser, BinAttrChat, Chat, WhatsAppServerMsgConn, ChatMessage, Contact } from "./whatsapp/interfaces";
import { Color } from "./utils";
import { widHelper } from "./whatsapp/helper";
import { WebMessageInfo } from "./whatsapp_pb";
//const chats = new Map<Wid,WaChat>()
type addChatKind = 'relay' | 'update' | 'last' | 'before' | 'after' | 'unread'
export function msgGetTarget(e) {
    return (e.from == store.me) ? e.to : e.from
}


export class StoreChat implements Chat {
    t: number = 0;
    unread: number = 0;
    spam: boolean = false;
    modify_tag: number;
    messages: ChatMessage[] = [];
    name: string;
    jid: string;
    addMessage(msg: ChatMessage) {
        if (msg.ack < 2) {
            L('Unread', this.jid, msg.message.conversation)
        }
        this.messages.push(msg)
    }

}

class Store {
    // Got from preempt
    private mapContacts: { [jid: string]: Contact } = Object.create(null)
    private mapChats: { [jid: string]: StoreChat } = Object.create(null)
    /** This number xxxx@c.us,same as this.conn.jid is our number */
    private conn: WhatsAppServerMsgConn = Object.create(null)

    get me() {
        return this.conn.wid
    }
    get name() {
        return this.conn.pushname
    }
    get device() {
        return `${this.conn.phone.device_manufacturer} ${this.conn.phone.device_model}`
    }

    get chats() {
        return Object.values(this.mapChats)
    }

    get messageCount() {
        return this.chats.reduce((t, v) => t + v.messages.length, 0)
    }

    dump(dir: string = 'tmp') {
        const fs = require('fs')
        const util = require('util')
        fs.writeFileSync(
            `${dir}/store.contacts.js`,
            `let contacts = ${util.inspect(Object.values(this.mapContacts), { maxArrayLength: null, breakLength: Infinity, showHidden: false, depth: 2, compact: false })}`,
            'utf8'
        )
        fs.writeFileSync(
            `${dir}/store.chats.js`,
            `let chats = ${util.inspect(Object.values(this.mapChats), { maxArrayLength: null, breakLength: Infinity, showHidden: false, depth: 5, compact: false })}`,
            'utf8'
        )
    }

    storeConn(conn: WhatsAppServerMsgConn) {
        this.conn = Object.assign(this.conn, conn)
        //L('store.conn', this.conn)
    }

    storeContact(value: BinAttrUser | Contact) {
        if ('string' == typeof value.verify) {
            value.verify = parseInt(value.verify)
        }
        const found = this.mapContacts[value.jid] || {}
        this.mapContacts[value.jid] = Object.assign(found, value)
    }

    storeChat(value: Partial<Chat>) {
        if (!value.jid) {
            L('storeChat no jid!', value, new Error().stack)
            return null
        }
        const found = this.mapChats[value.jid]
        if (!found) {
            if (!value.name && this.mapContacts[value.jid]) {
                value.name = this.mapContacts[value.jid].notify
            }
            this.mapChats[value.jid] = Object.assign(new StoreChat(), value)
        } else {
            this.mapChats[value.jid] = Object.assign(found, value)
        }
        return this.mapChats[value.jid]
    }

    getChat(jid: string) {
        return this.mapChats[jid] || this.storeChat({ jid })
    }

    /** Return chats that have received and unread messages */
    getUnreadChats() {
        return Object.values(this.mapChats).filter(c => c.unread)
    }

    getChatGroupList() {
        return Object.values(this.mapChats).filter(c => widHelper.isGroup(c.jid))
    }
}

const store = new Store()
export default store;


