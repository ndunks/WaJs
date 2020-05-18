import Wid from "./whatsapp/wid/wid";
import WidFactory from "./whatsapp/wid//wid-factory";
import { BinAttr } from "./whatsapp/interfaces";
import { WebMessageInfo } from "./whatsapp_pb";
import { Color } from "./utils";

// Mocked
const me: Wid = WidFactory.createWid('6285726501017@c.us')
const chats: { [key: string]: WaChat } = Object.create(null)
//const chats = new Map<Wid,WaChat>()
type addChatKind = 'relay' | 'update' | 'last' | 'before' | 'after' | 'unread'

export function msgGetTarget(e) {
    return Wid.equals(e.from, me) ? e.to : e.from
}

interface WaChat {
    meta?: BinAttr
    wid: Wid
    recent: boolean
    msgs: WebMessageInfo.AsObject[]
}

function storeChats(chat: WaChat, kind: addChatKind) {
    if (!chat.wid)
        throw new Error("StoreChat no WID");
    if (chats[chat.wid._serialized]) {
        //L('Exists', chat.wid._serialized, chat.msgs && chat.msgs.length || '')
        if (chat.msgs) {
            chats[chat.wid._serialized].msgs.push(...chat.msgs)
        }
    } else {
        if (!chat.msgs)
            chat.msgs = []
        chats[chat.wid._serialized] = chat
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
export { me, storeChats, getRecentChats, dumpChats }