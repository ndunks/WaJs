import { BinAttr, BinAttrUser, BinAttrChat, Chat } from "./whatsapp/interfaces";
import { WebMessageInfo } from "./whatsapp_pb";
import { Color } from "./utils";
import { widHelper } from "./whatsapp/helper";

// Mocked
const me = '6285726501017@c.us'
const chats: { [key: string]: WaChat } = Object.create(null)

// Got from preempt
export const chatList: Chat[] = []
export const contacts: BinAttrUser[] = []

//const chats = new Map<Wid,WaChat>()
type addChatKind = 'relay' | 'update' | 'last' | 'before' | 'after' | 'unread'

export function msgGetTarget(e) {
    return (e.from == me) ? e.to : e.from
}

interface WaChat {
    meta?: BinAttr
    wid: string
    recent: boolean
    msgs: WebMessageInfo.AsObject[]
}

function getUnreadChatList() {
    return chatList.filter(c => c.count)
}

function getChatGroupList() {
    return chatList.filter(c => widHelper.isGroup(c.jid))
}

function storeChats(chat: WaChat, kind: addChatKind) {
    if (!chat.wid)
        throw new Error("StoreChat no WID");
    if (chats[chat.wid]) {
        //L('Exists', chat.wid, chat.msgs && chat.msgs.length || '')
        if (chat.msgs) {
            chats[chat.wid].msgs.push(...chat.msgs)
        }
    } else {
        if (!chat.msgs)
            chat.msgs = []
        chats[chat.wid] = chat
    }
}
function getRecentChats() {
    return Object.values(chats).filter(v => v.recent)
}

function dumpChats() {
    for (let id in chats) {
        L(Color.y(id), chats[id].msgs.length, chats[id].msgs[0].message && chats[id].msgs[0].message.conversation)
    }
}
export { me, storeChats, getRecentChats, dumpChats, getUnreadChatList }