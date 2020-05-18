import { BinNode, BinAttr } from "./interfaces";
import Wid from "./wid/wid";
import WidFactory from "./wid/wid-factory";
import { nodeHelper } from "./binary/helper";
import { Color } from "../utils";
import { msgGetTarget, storeChats, me } from "../store";
import MsgKey from "./wid/msg-key";
import Constant from "./constant";
import { WebMessageInfo } from "../whatsapp_pb";
// Refs on app2.{hash}.js search for "handleActionMsg"
export function handleActionMsg(attr: BinAttr, childs: BinNode[]) {
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

            for (let f = 0; f < d.length; f++) {
                let l = {
                    recent: true,
                    meta: attr,
                    //binarySize: t
                }
                l[msgGetTarget(d[f])] = d[f];
                L(msgGetTarget(d[f]))
                //l['chat'] = msgGetTarget(d[f]);
                l['msg'] = d[f];
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
function decodeJid(e) {
    return Wid.isWid(e) ? WidFactory.createWid(e) : e
}

// Module id: cahfddcdga
function sureNotEmpty(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "?";
    if (null == e)
        throw new Error("Unexpected null or undefined: ".concat(t));
    return e
}
// v 13
function parseWebMessageInfo(msg: any, kind: string) {
    var a = msg.key
    let remoteJid = decodeJid(a.remoteJid)
    let to = a.fromMe ? remoteJid : me
    let from = a.fromMe ? me : remoteJid
    let o = decodeJid(a.participant)
    let direction = "in";
    if (me.equals(remoteJid)) {
        direction = a.fromMe ? "out" : "in"
    }
    if ("broadcast" == to) {
        L('Invalid webMessage', new Error().stack)
        return null
    }
    var id;
    try {
        // l == MsgKey class
        // f = sureNotEmpty
        id = new MsgKey({
            fromMe: sureNotEmpty(a.fromMe),
            remote: remoteJid,
            id: sureNotEmpty(a.id),
            participant: o
        })
    } catch (e) {
        throw e
    }
    var h = {
        id: id,
        from: from,
        to: to,
        self: direction,
        participant: o,
        type: "unknown",
        t: msg.messageTimestamp || 0,
        //baagejbchg
        ack: "fresh" === kind ? Constant.ACK.SENT : msg.status - 1,
        author: decodeJid(msg.participant),
        invis: !!msg.ignore,
        star: !!msg.starred,
        broadcast: a.fromMe && msg.broadcast,
        notifyName: msg.pushName || "",
        // TODO: Unparsed!
        encFilehash: msg.mediaCiphertextSha256, //this.decodeBytes(msg.mediaCiphertextSha256)
        shareDuration: msg.message && msg.message.liveLocationMessage ? msg.duration : void 0,
        labels: msg.labels,
        ephemeralStartTimestamp: msg.ephemeralStartTimestamp,
        ephemeralDuration: msg.ephemeralDuration,
        ephemeralOffToOn: msg.ephemeralOffToOn
    };
    //return msg.message ? this.parseMsgProto(msg.message, h, kind, msg.paymentInfo, msg.finalLiveLocation, msg.quotedPaymentInfo) : this.parseMsgStubProto(msg, h)
    return msg


}
// v 13
function parseMsgMessage(node: BinNode, kind: string) {

    var child = nodeHelper.children(node);
    if (child instanceof ArrayBuffer)
        try {
            const parsed = WebMessageInfo.deserializeBinary(Buffer.from(child))
            return parseWebMessageInfo(parsed, kind)
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
            return L(Color.r("parseMsg: unhandled"), node[0])
    }
}