import Dictionary from "../dictionary";
import BinaryTag from "./tags";
import { BinNode, BinAttr } from "../interfaces";
import BinaryOutputStream from "./output-stream";
import { widHelper } from "../helper";
import { L } from "../../utils";

/** Reversed single bytes */
let singleByteMaps = {};
let nibbleEncode = Dictionary.nibbleEncode;

for (let t = 0; t < Dictionary.singleByte.length; t++) {
    Dictionary.singleByte[t] && (singleByteMaps[Dictionary.singleByte[t]] = t);
}
for (let t = 0; t < Dictionary.doubleByte.length; t++) {
    Dictionary.doubleByte[t] && (singleByteMaps[Dictionary.doubleByte[t]] = t + BinaryTag.SINGLE_BYTE_MAX);
}

export function writeNode(bos: BinaryOutputStream, node: BinNode) {
    if (!node) return
    if (3 !== node.length)
        throw new Error("invalid node");
    var a = node[1] ? 2 * Object.keys(node[1]).filter(e => !!node[1][e]).length : 0;
    writeListStart(bos, 1 + a + (node[2] ? 1 : 0))
    writeString(bos, node[0])
    writeAttributes(bos, node[1])
    writeChildren(bos, node[2])
}

export function writeString(bos: BinaryOutputStream, value: string, server?: boolean) {
    if ("string" != typeof value)
        throw new Error('writer:writeString passed non-string/wid type: ' + typeof value)

    // if (value instanceof Wid)
    //     writeJid(bos, value);
    // else {
    let i
    let r
    let byteCode = singleByteMaps.hasOwnProperty(value) ? singleByteMaps[value] : undefined;
    if ("c.us" !== value || server) {
        if (undefined === byteCode) {
            if (value.indexOf("@") < 1)
                writeStringRaw(bos, value);
            else
                try {
                    //var u = WidFactory.createWid(value);
                    writeJid(bos, value)
                } catch (a) {
                    writeStringRaw(bos, value)
                }
        } else {
            if (byteCode < BinaryTag.SINGLE_BYTE_MAX)
                writeToken(bos, byteCode);
            else {
                let f = byteCode - BinaryTag.SINGLE_BYTE_MAX;
                r = f % 256
                switch (f >> 8) {
                    case 0:
                        i = BinaryTag.DICTIONARY_0;
                        break;
                    case 1:
                        i = BinaryTag.DICTIONARY_1;
                        break;
                    case 2:
                        i = BinaryTag.DICTIONARY_2;
                        break;
                    case 3:
                        i = BinaryTag.DICTIONARY_3;
                        break;
                    default:
                        throw new Error("double byte dictionary token out of range: " + value + " " + byteCode)
                }
            }
            writeToken(bos, i)
            writeToken(bos, r)
        }
    }
    else
        writeToken(bos, singleByteMaps["s.whatsapp.net"])
    //}
}

export function writeStringRaw(buf: BinaryOutputStream, t) {
    var a = Buffer.byteLength(t, 'utf8');
    if (a >= 4294967296)
        throw new Error("string too large to encode (len = " + a + "): " + t);
    a >= 1 << 20 ? (buf.pushByte(BinaryTag.BINARY_32),
        buf.pushInt32(a)) : a >= 256 ? (buf.pushByte(BinaryTag.BINARY_20),
            buf.pushInt20(a)) : (buf.pushByte(BinaryTag.BINARY_8),
                buf.pushByte(a)),
        buf.pushString(t)
}

export function writeJid(bos: BinaryOutputStream, rawJid: string) {
    const jid = widHelper.parse(rawJid)

    if (jid.agent || jid.device) {
        bos.pushByte(BinaryTag.JID_AD),
            bos.pushByte(jid.agent || 0),
            bos.pushByte(jid.device || 0),
            jid.user ? writePackedBytesStringFallback(bos, jid.user) : writeToken(bos, BinaryTag.LIST_EMPTY)
    } else
        bos.pushByte(BinaryTag.JID_PAIR),
            jid.user ? writePackedBytesStringFallback(bos, jid.user) : writeToken(bos, BinaryTag.LIST_EMPTY),
            writeString(bos, jid.server)
}

export function writeToken(e: BinaryOutputStream, t) {
    if (t < 245) {
        e.pushByte(t);
    }
    else if (t <= 500)
        throw new Error("invalid token")
}

export function writeAttributes(e: BinaryOutputStream, attr: BinAttr) {
    if (attr) {
        e.WRITING_ATTR_FLAG = true
        for (let a in attr) {
            if (attr[a]) {
                writeString(e, a)
                writeString(e, attr[a])
            }
        }
        e.WRITING_ATTR_FLAG = false
    }
}

export function writeChildren(bos: BinaryOutputStream, nodes: Uint8Array | BinNode[]) {
    if (!nodes) return
    let a: number;

    if ("string" == typeof nodes) {
        writeString(bos, nodes, !0);
    }
    else if (nodes instanceof Uint8Array) {
        if ((a = nodes.byteLength) >= 4294967296) {
            throw new Error("invalid children; too long (len = " + a)
        }
        a >= 1 << 20 ? (bos.pushByte(BinaryTag.BINARY_32),
            bos.pushInt32(a)) : a >= 256 ? (bos.pushByte(BinaryTag.BINARY_20),
                bos.pushInt20(a)) : (bos.pushByte(BinaryTag.BINARY_8),
                    bos.pushByte(a)),
            bos.pushBytes(nodes)
    } else {
        if (!Array.isArray(nodes))
            throw new Error("invalid children");
        a = nodes.length
        writeListStart(bos, a);
        for (var n = 0; n < a; n++) {
            writeNode(bos, nodes[n])
        }
    }
}

export function writeListStart(bos: BinaryOutputStream, value: number) {
    0 === value ? bos.pushByte(BinaryTag.LIST_EMPTY) : value < 256 ? (bos.pushByte(BinaryTag.LIST_8),
        bos.pushByte(value)) : (bos.pushByte(BinaryTag.LIST_16),
            bos.pushInt16(value))
}

export function writePackedBytesStringFallback(bos: BinaryOutputStream, t) {
    try {
        writePackedBytes(bos, t)
    } catch (a) {
        L('writer:encode-fallback.', a.message)
        writeString(bos, t)
    }
}

export function writePackedBytes(bos: BinaryOutputStream, t) {
    try {
        writePackedBytesImpl(bos, t, BinaryTag.NIBBLE_8)
    } catch (a) {
        L('writer:enc nib fail, try hex.', a.message)
        writePackedBytesImpl(bos, t, BinaryTag.HEX_8)
    }
}

export function writePackedBytesImpl(bos: BinaryOutputStream, str: string, a) {
    var n = Buffer.byteLength(str, 'utf8');
    if (n > BinaryTag.PACKED_MAX)
        throw new Error("too many bytes to nibble-encode: len = " + n);
    var i, s = [], d = 0;
    n % 2 > 0 && (d = 128);
    var c = d | Math.ceil(n / 2)
    s.push(a)
    s.push(c)
    for (var u = Math.floor(n / 2), l = 0; l < u; l++)
        i = packBytePair(a, str[2 * l], str[2 * l + 1]),
            s.push(i);
    d > 0 && (i = packBytePair(a, str[n - 1], "\0"),
        s.push(i));
    var f = new Uint8Array(s);
    bos.pushUint8Array(f)
}

export function packBytePair(e: number, t, a) {
    var n, i;
    switch (e) {
        case BinaryTag.NIBBLE_8:
            n = packNibble(t)
            i = packNibble(a);
            break;
        case BinaryTag.HEX_8:
            n = packHex(t)
            i = packHex(a);
            break;
        default:
            throw new Error("invalid byte pack type: " + e)
    }
    return n << 4 | i
}

export function packNibble(e: string) {
    if (!nibbleEncode.hasOwnProperty(e))
        throw new Error("invalid byte to nibble-pack: " + e);
    return nibbleEncode[e]
}

export function packHex(e: string) {
    switch (e) {
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "A":
        case "B":
        case "C":
        case "D":
        case "E":
        case "F":
            return parseInt(e, 16);
        case "\0":
            return 15;
        default:
            throw new Error("packHex:invalid byte: " + e)
    }
}
