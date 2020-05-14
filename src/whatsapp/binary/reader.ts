// app2.b77125350eb0570a9fcd.js#cdjdachjig
import Tags from "../tags";
import Dictionary from "../dictionary";
import BufferReader from "./buffer-reader";
import Wid from "../wid/wid";
import WidFactory from "../wid/wid-factory";


function tryMakeWid(str: string) {
    try {
        return WidFactory.createWid(str)
    } catch (e) {
        console.log('Reader.createWid FAIL', e);
        return str
    }
}
export default class BinaryReader {
    READING_ATTR_FLAG: boolean = false;
    CURRENT_ATTR_KEY: string;

    readString(buf: BufferReader, tag: number, autoCreateWid = false): string {
        if (tag < 0)
            throw new Error("invalid start token readString" + tag);
        if (tag > 2 && tag < 236) {
            var token = this.getToken(tag);
            return "s.whatsapp.net" == token ? "c.us" : token
        }
        let tmpStr;
        switch (tag) {
            case Tags.DICTIONARY_0:
            case Tags.DICTIONARY_1:
            case Tags.DICTIONARY_2:
            case Tags.DICTIONARY_3:
                let len = buf.readByte();
                return this.getTokenDouble(tag - Tags.DICTIONARY_0, len);
            case Tags.LIST_EMPTY:
                return;
            case Tags.BINARY_8:
                tmpStr = this.readString(buf, buf.readByte())
                return this.READING_ATTR_FLAG && autoCreateWid && Wid.isWid(tmpStr) ? tryMakeWid(tmpStr) : tmpStr;
            case Tags.BINARY_20:
                tmpStr = this.readString(buf, buf.readInt20())
                return this.READING_ATTR_FLAG && autoCreateWid && Wid.isWid(tmpStr) ? tryMakeWid(tmpStr) : tmpStr;
            case Tags.BINARY_32:
                tmpStr = this.readString(buf, buf.readInt32())
                return this.READING_ATTR_FLAG && autoCreateWid && Wid.isWid(tmpStr) ? tryMakeWid(tmpStr) : tmpStr;
            case Tags.JID_PAIR:
                let f = this.readString(buf, buf.readByte())
                let h = this.readString(buf, buf.readByte())
                if (void 0 !== f && void 0 !== h) {
                    tmpStr = f + "@" + h;
                    return autoCreateWid && Wid.isWid(tmpStr) ? tryMakeWid(tmpStr) : tmpStr
                }
                if (void 0 !== h)
                    return h;
                throw new Error("invalid jid " + f + "," + h + " " + buf.debugInfo());
            case Tags.NIBBLE_8:
            case Tags.HEX_8:
                return this.readPacked8(tag, buf);
            default:
                //throw LOG(1, !0)(d(), n, t, a, e.debugInfoWithPadding()),
                throw new Error(`invalid string tag: ${tag}, attr_key: ${this.CURRENT_ATTR_KEY}`)
        }
    }
    readList(e, t) {
        for (var a = [], n = this.readListSize(e, t), i = 0; i < n; i++)
            a.push(this.readNode(e));
        return a
    }
    readPacked8(tag: number, buf: BufferReader) {
        let a, n, i, r, s, o: number

        for (a = buf.readByte(), n = a >> 7, i = 127 & a, r = "", o = 0; o < i; o++) {
            s = buf.readByte();
            r += this.unpackByte(buf, tag, (240 & s) >> 4)
            r += this.unpackByte(buf, tag, 15 & s)
        }
        if (n) {
            r = r.substring(0, r.length - 1)
        }
        return r
    }
    unpackByte(buf: BufferReader, tag, len: number) {
        switch (tag) {
            case Tags.NIBBLE_8:
                return this.unpackNibble(buf, len);
            case Tags.HEX_8:
                return this.unpackHex(buf, len);
            default:
                throw new Error("unpack non-nibble/hex type: " + tag)
        }
    }

    unpackNibble(buf: BufferReader, e: number) {
        if (!Dictionary.nibbleDecode.hasOwnProperty(e))
            throw new Error("invalid nibble to unpack: " + e);
        return Dictionary.nibbleDecode[e]
    }

    unpackHex(buf: BufferReader, e: number) {
        if (e >= 0 && e <= 15)
            return e.toString(16).toUpperCase();
        throw new Error("invalid hex to unpack: " + e)
    }

    readListSize(buf: BufferReader, tag) {
        if (tag === Tags.LIST_EMPTY)
            return 0;
        if (tag === Tags.LIST_8)
            return buf.readByte();
        if (tag === Tags.LIST_16)
            return buf.readInt16();
        throw new Error("invalid list size " + buf.debugInfo())
    }

    getToken(tag: number) {
        if (tag < 3 || tag >= Dictionary.singleByte.length) {
            console.error("Undefined Byte Token")
        }
        return Dictionary.singleByte[tag]
    }

    getTokenDouble(tag: number, len: number) {
        var a, n = 256 * len + tag;
        if (n >= 0 && n < Dictionary.doubleByte.length && (a = Dictionary.doubleByte[n]),
            void 0 === a)
            throw new Error("invalid double byte token " + len + " " + tag);
        return a
    }

    readNode(buf: BufferReader) {
        let byteTag = buf.readByte()
        const listSize = this.readListSize(buf, byteTag)
        byteTag = buf.readByte();
        if (byteTag == Tags.STREAM_END) {
            throw new Error("Unexpected end tag");
        }
        let tag = this.readString(buf, byteTag)
        if (!listSize || !tag) {
            throw new Error("Invalid node. 0 list or empty tag");
        }
        let attrSize = listSize - 2 + listSize % 2 >> 1;
        let attr: { [key: string]: string } = this.readAttributes(buf, attrSize);
        let data;
        if (listSize % 2 == 1)
            return { tag, attr }

        let a = buf.readByte()
        if (this.isListTag(a))
            data = this.readList(buf, a);
        else if (a === Tags.BINARY_8) {
            var c = buf.readByte();
            data = buf.readBytes(c)
        } else if (a === Tags.BINARY_20) {
            var u = buf.readInt20();
            data = buf.readBytes(u)
        } else if (a === Tags.BINARY_32) {
            var l = buf.readInt32();
            data = buf.readBytes(l)
        } else
            data = this.readString(buf, a);
        return { tag, attr, data }
    }
    isListTag(tag: number) {
        return tag === Tags.LIST_EMPTY || tag === Tags.LIST_8 || tag === Tags.LIST_16
    }
    readAttributes(buf: BufferReader, len: number) {
        this.READING_ATTR_FLAG = true

        let result = {}

        for (let idx = 0; idx < len; idx++) {
            let key = this.readString(buf, buf.readByte())
            this.CURRENT_ATTR_KEY = key
            let value = this.readString(buf, buf.readByte(), Wid.canBeWid(key))
            result[key] = value;
        }

        this.READING_ATTR_FLAG = false
        return result
    }
}