import { BinNode } from "./interfaces";
import Wid from "./wid/wid";
import WidFactory from "./wid/wid-factory";
import { nodeHelper } from "./binary/helper";
import { Color } from "../utils";
const me: Wid = WidFactory.createWid('6285726501017@c.us')
export function msgGetTarget(e) {
    return Wid.equals(e.from, me) ? e.to : e.from
}
function decodeJid(e) {
    return Wid.isWid(e) ? WidFactory.createWid(e) : e
}
// v 13
function parseMsgMessage(node: BinNode, kind: string) {

    var child = nodeHelper.children(node);
    if (child instanceof ArrayBuffer)
        try {
            return proto.proto.WebMessageInfo.deserializeBinary(Buffer.from(child)).toObject()
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