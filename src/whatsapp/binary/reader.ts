// app2.b77125350eb0570a9fcd.js#cdjdachjig
import BinaryTag from "./tags";
import Dictionary from "../dictionary";
import { Color } from "../../utils";
import { WANode } from "../interfaces";
import BinaryInputStream from "./input-stream";
import { widHelper } from "../helper";

export function readString(buf: BinaryInputStream, tag: BinaryTag): string {
    if (tag < 0)
        throw new Error("invalid start token readString" + tag);
    if (tag > 2 && tag < 236) {
        var token = getToken(tag);
        return "s.whatsapp.net" == token ? "c.us" : token
    }
    let tmpStr;
    switch (tag) {
        case BinaryTag.DICTIONARY_0:
        case BinaryTag.DICTIONARY_1:
        case BinaryTag.DICTIONARY_2:
        case BinaryTag.DICTIONARY_3:
            let len = buf.readByte();
            return getTokenDouble(tag - BinaryTag.DICTIONARY_0, len);
        case BinaryTag.LIST_EMPTY:
            return;
        case BinaryTag.BINARY_8:
            tmpStr = buf.readString(buf.readByte())
            return buf.READING_ATTR_FLAG && tmpStr;
        case BinaryTag.BINARY_20:
            tmpStr = buf.readString(buf.readInt20())
            return buf.READING_ATTR_FLAG && tmpStr;
        case BinaryTag.BINARY_32:
            tmpStr = buf.readString(buf.readInt32())
            return buf.READING_ATTR_FLAG && tmpStr;
        case BinaryTag.JID_PAIR:
            let f = readString(buf, buf.readByte())
            let h = readString(buf, buf.readByte())
            if (void 0 !== f && void 0 !== h) {
                tmpStr = f + "@" + h;
                return tmpStr
            }
            if (void 0 !== h)
                return h;
            throw new Error("invalid jid " + f + "," + h + " " + buf.debugInfo());
        case BinaryTag.JID_AD:
            let agent = buf.readByte()
            let device = buf.readByte()
            let user = readString(buf, buf.readByte());

            if (!user) {
                throw new Error(`invalid JID_AD agent:${agent} device:${device} user:${user}`);
            }
            return agent && device ? `${user}.${agent}:${device}@c.us` :
                agent ? `${user}.${agent}@c.us` :
                    device ? `${user}:${device}@c.us` : `${user}@c.us`


        case BinaryTag.NIBBLE_8:
        case BinaryTag.HEX_8:
            return readPacked8(tag, buf);
        default:
            //throw LOG(1, !0)(d(), n, t, a, e.debugInfoWithPadding()),
            throw new Error(`invalid string tag: ${tag}, attr_key: ${buf.CURRENT_ATTR_KEY}. ${buf.debugInfo()}`)
    }
}
export function readList(buf: BinaryInputStream, byteTag: BinaryTag) {
    let list: WANode[] = []
    let size = readListSize(buf, byteTag)
    for (let i = 0; i < size; i++) {
        try {
            const child = readNode(buf)
            list.push(child)
        } catch (error) {
            E(Color.r('Fail readList at'), i, error)
            break
        }
    }
    return list
}
export function readPacked8(tag: number, buf: BinaryInputStream) {
    let a, n, i, r, s, o: number

    for (a = buf.readByte(), n = a >> 7, i = 127 & a, r = "", o = 0; o < i; o++) {
        s = buf.readByte();
        r += unpackByte(buf, tag, (240 & s) >> 4)
        r += unpackByte(buf, tag, 15 & s)
    }
    if (n) {
        r = r.substring(0, r.length - 1)
    }
    return r
}
export function unpackByte(buf: BinaryInputStream, tag, len: number) {
    switch (tag) {
        case BinaryTag.NIBBLE_8:
            return unpackNibble(buf, len);
        case BinaryTag.HEX_8:
            return unpackHex(buf, len);
        default:
            throw new Error("unpack non-nibble/hex type: " + tag)
    }
}

export function unpackNibble(buf: BinaryInputStream, e: number) {
    if (!Dictionary.nibbleDecode.hasOwnProperty(e))
        throw new Error("invalid nibble to unpack: " + e);
    return Dictionary.nibbleDecode[e]
}

export function unpackHex(buf: BinaryInputStream, e: number) {
    if (e >= 0 && e <= 15)
        return e.toString(16).toUpperCase();
    throw new Error("invalid hex to unpack: " + e)
}

export function readListSize(buf: BinaryInputStream, tag: BinaryTag): number {
    switch (tag) {
        case BinaryTag.LIST_EMPTY:
            return 0;
        case BinaryTag.LIST_8:
            return buf.readByte();
        case BinaryTag.LIST_16:
            return buf.readInt16();
        default:
            // console.error('reader: readListSize', `invalid list size. tag ${tag} ${String.fromCharCode(tag)}. ${buf.debugInfo()}`)
            // return 0
            throw new Error(`invalid list size. tag ${tag} ${String.fromCharCode(tag)}. ${buf.debugInfo()}`)
    }
}

export function getToken(no: number) {
    if (no < 3 || no >= Dictionary.singleByte.length) {
        E(Color.r("Miss sungle byte token"), no);
        return `sunglebyte_${no}`
    }
    return Dictionary.singleByte[no]
}

export function getTokenDouble(no: number, len: number) {
    var a, n = 256 * len + no;
    if (n >= 0 && n < Dictionary.doubleByte.length && (a = Dictionary.doubleByte[n]),
        void 0 === a) {
        E(Color.r("Miss double byte token"), len, no);
        return `doublebyte_${no}_${len}`
    }
    return a
}

export function readNode(bis: BinaryInputStream): WANode {
    let byteTag = bis.readByte()
    const listSize = readListSize(bis, byteTag)
    byteTag = bis.readByte();
    if (byteTag == BinaryTag.STREAM_END) {
        throw new Error("Unexpected end tag");
    }
    let tag = readString(bis, byteTag)
    if (listSize === 0 || !tag) {
        throw new Error(`Invalid node. 0 list (${listSize}) or empty tag (${tag}).`);
    }

    let attrSize = listSize - 2 + listSize % 2 >> 1;
    let attr: { [key: string]: string } = readAttributes(bis, attrSize);
    if (listSize % 2 == 1) {
        return [tag, attr, undefined]
    }

    let child;

    byteTag = bis.readByte()
    if (isListTag(byteTag)) {
        child = readList(bis, byteTag);
    } else if (byteTag === BinaryTag.BINARY_8) {
        var c = bis.readByte();
        child = bis.readBytes(c)
    } else if (byteTag === BinaryTag.BINARY_20) {
        var u = bis.readInt20();
        child = bis.readBytes(u)
    } else if (byteTag === BinaryTag.BINARY_32) {
        var l = bis.readInt32();
        child = bis.readBytes(l)
    } else
        child = readString(bis, byteTag);
    return [tag, attr, child]
}
export function isListTag(tag: number) {
    return tag === BinaryTag.LIST_EMPTY || tag === BinaryTag.LIST_8 || tag === BinaryTag.LIST_16
}
export function readAttributes(buf: BinaryInputStream, len: number): { [key: string]: string } {
    buf.READING_ATTR_FLAG = true
    //L("Read Attr", len)

    let result = {}
    for (let idx = 0; idx < len; idx++) {
        let key = readString(buf, buf.readByte())
        buf.CURRENT_ATTR_KEY = key
        let value = readString(buf, buf.readByte())
        result[key] = value;
    }

    buf.READING_ATTR_FLAG = false
    return result
}
