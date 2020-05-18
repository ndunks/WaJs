import Wid from "./whatsapp/wid/wid";
import WidFactory from "./whatsapp/wid//wid-factory";
import { BinAttr } from "./whatsapp/interfaces";

// Mocked
const me: Wid = WidFactory.createWid('6285726501017@c.us')
const chats: WaChat[] = []

export function msgGetTarget(e) {
    return Wid.equals(e.from, me) ? e.to : e.from
}

interface WaMessage {
}
interface WaChat {
    meta: BinAttr,
    chat?: Wid,
    msg?: any,
    msgs?: any[],
    recent?: boolean
    [key: string]: any
}


function storeChats(_chats: WaChat[]) {
    chats.push(..._chats)
}
function getRecentChats() {
    return chats.filter(v => v.recent)
}

export { me, storeChats, getRecentChats }