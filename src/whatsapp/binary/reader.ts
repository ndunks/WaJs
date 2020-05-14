import Tags from "./tags";
import Dictionary from "./dictionary";
import BinaryBuffer from "./buffer";

export function readString(buf: BinaryBuffer, tag: number, createWidAttr = false) {
    if (tag < 0)
        throw new Error("invalid start token readString" + tag);
    if (tag > 2 && tag < 236) {
        var token = getToken(tag);
        return "s.whatsapp.net" == token ? "c.us" : token
    }
    let tmpStr;
    switch (tag) {
        case Tags.DICTIONARY_0:
        case Tags.DICTIONARY_1:
        case Tags.DICTIONARY_2:
        case Tags.DICTIONARY_3:
            let len = buf.readByte();
            return getTokenDouble(tag - Tags.DICTIONARY_0, len);
        case Tags.LIST_EMPTY:
            return;
        case Tags.BINARY_8:
            tmpStr = readString(buf, buf.readByte())
            console.error('Not Implemented: Tags.BINARY_8');
            return null //this.isAttr && createWidAttr && o.default.isWid(i) ? createWild(i) : i;
        case Tags.BINARY_20:
            tmpStr = readString(buf, buf.readInt20())
            console.error('Not Implemented: Tags.BINARY_20');
            return null //this.isAttr && createWidAttr && o.default.isWid(i) ? createWild(i) : i;
        case Tags.BINARY_32:
            tmpStr = readString(buf, buf.readInt32())
            console.error('Not Implemented: Tags.BINARY_32');
            return null //this.isAttr && createWidAttr && o.default.isWid(i) ? createWild(i) : i;
        case Tags.JID_PAIR:
            let f = readString(buf, buf.readByte())
            let h = readString(buf, buf.readByte())
            if (void 0 !== f && void 0 !== h) {
                var p = f + "@" + h;
                console.error('Not Implemented: Tags.JID_PAIR');
                return null //createWidAttr && o.default.isWid(p) ? createWild(p) : p
            }
            if (void 0 !== h)
                return h;
            throw new Error("invalid jid " + f + "," + h + " " + buf.debugInfo());
        case Tags.NIBBLE_8:
        case Tags.HEX_8:
            return readPacked8(tag, buf);
        default:
            //throw LOG(1, !0)(d(), n, t, a, e.debugInfoWithPadding()),
            throw new Error("invalid string " + tag)
    }
}
export function readPacked8(tag: number, buf: BinaryBuffer) {
    let a,n,i,r,s,o: number

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
export function unpackByte( buf: BinaryBuffer, tag, len: number) {
    switch (tag) {
        case Tags.NIBBLE_8:
            return unpackNibble(buf, len);
        case Tags.HEX_8:
            return unpackHex(buf, len);
        default:
            throw new Error("unpack non-nibble/hex type: " + tag)
    }
}

export function unpackNibble( buf: BinaryBuffer, e: number) {
    if (!Dictionary.nibbleDecode.hasOwnProperty(e))
        throw new Error("invalid nibble to unpack: " + e);
    return Dictionary.nibbleDecode[e]
}

export function unpackHex(buf: BinaryBuffer, e: number) {
    if (e >= 0 && e <= 15)
        return e.toString(16).toUpperCase();
    throw new Error("invalid hex to unpack: " + e)
}

export function readListSize(buf: BinaryBuffer, tag) {
    if (tag === Tags.LIST_EMPTY)
        return 0;
    if (tag === Tags.LIST_8)
        return buf.readByte();
    if (tag === Tags.LIST_16)
        return buf.readInt16();
    throw new Error("invalid list size " + buf.debugInfo())
}

export function getToken(tag: number) {
    if (tag < 3 || tag >= Dictionary.singleByte.length) {
        console.error("Undefined Byte Token")
    }
    return Dictionary.singleByte[tag]
}

export function getTokenDouble(tag: number, len: number) {
    var a, n = 256 * len + tag;
    if (n >= 0 && n < Dictionary.doubleByte.length && (a = Dictionary.doubleByte[n]),
        void 0 === a)
        throw new Error("invalid double byte token " + len + " " + tag);
    return a
}

export function readNode(buf: BinaryBuffer) {
    const listSize = buf.readByte()
    const tag = buf.readByte()
    if (!listSize) {
        console.error('Invalid list size');
        return null
    }

    if (tag == Tags.STREAM_END) {
        throw new Error("Unexpected end tag")
    }

    let descr = readString(buf, tag)
    if (!descr) {
        console.error('Invalid strTag');
        return null
    }
    console.log('readNode', listSize, tag, descr);
}
