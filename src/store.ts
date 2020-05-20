import { BinAttr, BinAttrUser, BinAttrChat, Chat, WhatsAppServerMsgConn, ChatMessage } from "./whatsapp/interfaces";
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
    unreadCount: number = 0;
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
    private contacts: { [jid: string]: BinAttrUser } = Object.create(null)
    private chats: { [jid: string]: StoreChat } = Object.create(null)
    /** This number xxxx@c.us,same as this.conn.jid is our number */
    private conn: WhatsAppServerMsgConn = Object.create(null)

    get me() {
        return this.conn.wid
    }

    storeConn(conn: WhatsAppServerMsgConn) {
        this.conn = Object.assign(this.conn, conn)
    }

    storeContact(value: BinAttrUser) {
        const found = this.contacts[value.jid] || {}
        this.contacts[value.jid] = Object.assign(found, value)
    }

    storeChat(value: Partial<Chat>) {
        if (!value.jid) {
            L('storeChat no jid!', value, new Error().stack)
            return null
        }
        const found = this.chats[value.jid]
        if (!found) {
            this.chats[value.jid] = Object.assign(new StoreChat(), value)
        } else {
            this.chats[value.jid] = Object.assign(found, value)
        }
        return this.chats[value.jid]
    }

    getChat(jid: string) {
        return this.chats[jid] || this.storeChat({ jid })
    }

    /** Return chats that have unread messages */
    getUnreadChats() {
        return Object.values(this.chats).filter(c => c.unreadCount)
    }

    getChatGroupList() {
        return Object.values(this.chats).filter(c => widHelper.isGroup(c.jid))
    }

    // storeChats(chat: WaChat, kind: addChatKind) {
    //     if (!chat.wid)
    //         throw new Error("StoreChat no WID");

    //     if (kind == 'last') {
    //         L(kind, chat)
    //     }

    //     if (this.chats[chat.wid]) {
    //         //L('Exists', chat.wid, chat.msgs && chat.msgs.length || '')
    //         if (chat.msgs) {
    //             this.chats[chat.wid].msgs.push(...chat.msgs)
    //         }
    //     } else {
    //         if (!chat.msgs)
    //             chat.msgs = []
    //         this.chats[chat.wid] = chat
    //     }
    // }
}

const store = new Store()
export default store;


