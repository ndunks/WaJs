import { BinNode, BinAttr, ChatMessage } from "./interfaces";
import { nodeHelper } from "./binary/helper";
import { Color } from "../utils";


import { WebMessageInfo } from "../whatsapp_pb";
import store from "../store";
// Refs on app2.{hash}.js search for "handleActionMsg"
export function handleActionMsg(attr: BinAttr, childs: BinNode[]) {

    let msg: WebMessageInfo.AsObject
    L(Color.b("<< Action"), attr)

    switch (attr.add) {
        // Realtime new message?
        case "relay":
        case "update":
            msg = parseMsg(childs[0], "relay") as WebMessageInfo.AsObject
            if (!msg) {
                L(Color.r("<< Action IGNORED"), attr.add, attr, childs)
                return
            }
            //let s = msgGetTarget(o);
            // (0,
            //     v.default)([{
            //         meta: a,
            //         chat: s,
            //         msg: o
            //     }])
            // storeChats([{
            //     meta: attr,
            //     chat: s,
            //     msg: o
            // }])
            L(attr.add, msg.key.id, msg.key.participant || msg.key.remotejid)
            store.getChat(msg.key.remotejid).addMessage({
                key: msg.key,
                direction: msg.key.fromme ? 'out' : 'out',
                message: msg.message,
                ack: 1,
            })
            // storeChats({
            //     recent: true,
            //     wid: o.key.remotejid,
            //     msgs: [o]
            // }, attr.add)
            return 1
        case "last":
            const d = childs.slice(0, 4).map(c => parseMsg(c, "last"))
            for (msg of d as WebMessageInfo.AsObject[]) {
                store.getChat(msg.key.remotejid).addMessage({
                    key: msg.key,
                    direction: msg.key.fromme ? 'out' : 'out',
                    message: msg.message,
                    ack: 2,
                    recent: true
                })
                // storeChats({
                //     recent: true,
                //     wid: webMsg.key.remotejid,
                //     msgs: [webMsg]
                // }, attr.add)
            }
            // for (let f = 0; f < d.length; f++) {
            //     let l = {
            //         recent: true,
            //         meta: attr,
            //         //binarySize: t
            //     }

            //     // l[msgGetTarget(d[f])] = d[f];
            //     // L(msgGetTarget(d[f]), d[f])
            //     // //l['chat'] = msgGetTarget(d[f]);
            //     // l['msg'] = d[f];
            //     if(!d[f]) continue;
            //     storeChats({
            //         meta: attr,
            //         recent: true,
            //         wid: d[f].key.remoteji)
            //     })
            // }
            // (0,
            // v.default)([l])
            return d.length
        case "before":
        case "after":
        case "unread":
            const h = childs.map(
                c => parseMsg(c, attr.add) as WebMessageInfo.AsObject
            )
            //var m = msgGetTarget(h[0]);
            // LOG(2)(be(), [e, "action", "msg", attr.add, m, h.length].join(",")),
            // (0,
            // v.default)([{
            //     meta: attr,
            //     chat: m,
            //     msgs: h,
            //     binarySize: t
            // }])
            // return storeChats([{
            //     meta: attr,
            //     chat: m,
            //     msgs: h,
            //     //binarySize: t
            // }])
            const chat = store.getChat(h[0].key.remotejid)
            h.forEach(msg => {
                chat.addMessage({
                    key: msg.key,
                    direction: msg.key.fromme ? 'out' : 'out',
                    message: msg.message,
                    ack: attr.add == 'unread' ? 1 : 2,
                })
            })
            /* 
            storeChats({
                recent: false,
                wid: h[0].key.remotejid,
                msgs: h
            }, attr.add)
            if (attr.add == 'unread') {
                L('GOT UNREAD!', h.map(v => v.message))
            } */
            return h.length
        default:
            L('Handle action not known:', attr.add)
            return 0
    }
}

// Module id: cahfddcdga
function sureNotEmpty(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "?";
    if (null == e)
        throw new Error("Unexpected null or undefined: ".concat(t));
    return e
}

// v 13
function parseMsgMessage(node: BinNode, kind: string) {

    var child = nodeHelper.children(node);
    if (child instanceof Buffer)
        try {
            const parsed = WebMessageInfo.deserializeBinary(Buffer.from(child)).toObject()
            // const id = WidFactory.createWid(parsed.key.remotejid)
            // const chat: any = {

            // }
            return parsed// parseWebMessageInfo(parsed, kind)
        } catch (t) {
            L('fail parse', t)
        }
    else
        L('parseMsgMessage: not a buffer', new Error().stack)
}

export function parseMsg(node: BinNode, kind: string) {
    switch (node[0]) {
        case 'message':
            return parseMsgMessage(node, kind);
        case "groups_v2":
            throw new Error('Not implemented parseMsgGp2(node)')
        case "broadcast":
            throw new Error('Not implemented parseMsgBroadcast(node')
        case "notification":
            throw new Error('Not implemented parseMsgNotification(node)')
        case "call_log":
            throw new Error('Not implemented parseMsgCallLog(node)')
        case "security":
            throw new Error('Not implemented parseMsgSecurity(node)')
        default:
            return L(Color.r("parseMsg: unhandled"), node)
    }
}