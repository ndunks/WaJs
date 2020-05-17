import { BinAttr, BinNode } from "./whatsapp/interfaces"
import Wid from "./whatsapp/wid/wid"
import { msgGetTarget, parseMsg } from "./whatsapp/parser"

interface WaMessage {
}
interface WaChat {
    meta: BinAttr,
    chat?: Wid,
    msg?: any,
    msgs?: any[],
    recent?: boolean
}

const chats: WaChat[] = []

function storeChats(_chats: WaChat[]) {
    chats.push(..._chats)
}
function getRecentChats() {
    return chats.filter(v => v.recent)
}

// Refs on app2.{hash}.js search for "handleActionMsg"
function handleActionMsg(attr: BinAttr, childs: BinNode[]) {
    switch (attr.add) {
        case "relay":
        case "update":
            const o = parseMsg(childs[0], "relay")
            let s = msgGetTarget(o);
            // (0,
            //     v.default)([{
            //         meta: a,
            //         chat: s,
            //         msg: o
            //     }])
            storeChats([{
                meta: attr,
                chat: s,
                msg: o
            }])
            return o
        case "last":
            const d = childs.map(c => parseMsg(c, "last"))
            let l = {
                recent: true,
                meta: attr,
                //binarySize: t
            }

            for (let f = 0; f < d.length; f++) {
                l['chat'] = msgGetTarget(d[f]);
                l[msgGetTarget(d[f])] = d[f];
                storeChats([l])
            }
            // (0,
            // v.default)([l])
            return d.length
        case "before":
        case "after":
        case "unread":
            const h = childs.map(c => parseMsg(c, attr.add))
            var m = msgGetTarget(h[0]);
            // LOG(2)(be(), [e, "action", "msg", attr.add, m, h.length].join(",")),
            // (0,
            // v.default)([{
            //     meta: attr,
            //     chat: m,
            //     msgs: h,
            //     binarySize: t
            // }])
            return storeChats([{
                meta: attr,
                chat: m,
                msgs: h,
                //binarySize: t
            }])
        default:
            // LOG(4)(pe())
            return null
    }
}
export {
    chats,
    storeChats,
    getRecentChats,
    handleActionMsg
}