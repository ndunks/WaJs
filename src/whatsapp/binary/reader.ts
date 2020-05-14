// app2.b77125350eb0570a9fcd.js#cdjdachjig
import BinaryTag from "./tags";
import Dictionary from "../dictionary";
import BufferReader from "./buffer-reader";
import Wid from "../wid/wid";
import WidFactory from "../wid/wid-factory";


function tryMakeWid(str: string) {
    try {
        return WidFactory.createWid(str)
    } catch (e) {
        L('reader: createWid FAIL', e);
        return str
    }
}
export default class BinaryReader {
    READING_ATTR_FLAG: boolean = false;
    CURRENT_ATTR_KEY: string;

    readString(buf: BufferReader, tag: BinaryTag, autoCreateWid = true): string {
        if (tag < 0)
            throw new Error("invalid start token readString" + tag);
        if (tag > 2 && tag < 236) {
            var token = this.getToken(tag);
            return "s.whatsapp.net" == token ? "c.us" : token
        }
        let tmpStr;
        switch (tag) {
            case BinaryTag.DICTIONARY_0:
            case BinaryTag.DICTIONARY_1:
            case BinaryTag.DICTIONARY_2:
            case BinaryTag.DICTIONARY_3:
                let len = buf.readByte();
                return this.getTokenDouble(tag - BinaryTag.DICTIONARY_0, len);
            case BinaryTag.LIST_EMPTY:
                return;
            case BinaryTag.BINARY_8:
                tmpStr = this.readString(buf, buf.readByte())
                return this.READING_ATTR_FLAG && autoCreateWid && Wid.isWid(tmpStr) ? tryMakeWid(tmpStr) : tmpStr;
            case BinaryTag.BINARY_20:
                tmpStr = this.readString(buf, buf.readInt20())
                return this.READING_ATTR_FLAG && autoCreateWid && Wid.isWid(tmpStr) ? tryMakeWid(tmpStr) : tmpStr;
            case BinaryTag.BINARY_32:
                tmpStr = this.readString(buf, buf.readInt32())
                return this.READING_ATTR_FLAG && autoCreateWid && Wid.isWid(tmpStr) ? tryMakeWid(tmpStr) : tmpStr;
            case BinaryTag.JID_PAIR:
                let f = this.readString(buf, buf.readByte())
                let h = this.readString(buf, buf.readByte())
                if (void 0 !== f && void 0 !== h) {
                    tmpStr = f + "@" + h;
                    return autoCreateWid && Wid.isWid(tmpStr) ? tryMakeWid(tmpStr) : tmpStr
                }
                if (void 0 !== h)
                    return h;
                throw new Error("invalid jid " + f + "," + h + " " + buf.debugInfo());
            case BinaryTag.JID_AD:
                let agent = buf.readByte()
                let device = buf.readByte()
                let user = this.readString(buf, buf.readByte());

                if (!user) {
                    throw new Error(`invalid JID_AD agent:${agent} device:${device} user:${user}`);
                }
                return tryMakeWid(
                    agent && device ? `${user}.${agent}:${device}@c.us` :
                        agent ? `${user}.${agent}@c.us` :
                            device ? `${user}:${device}@c.us` : `${user}@c.us`
                );

            case BinaryTag.NIBBLE_8:
            case BinaryTag.HEX_8:
                return this.readPacked8(tag, buf);
            default:
                //throw LOG(1, !0)(d(), n, t, a, e.debugInfoWithPadding()),
                throw new Error(`invalid string tag: ${tag}, attr_key: ${this.CURRENT_ATTR_KEY}`)
        }
    }
    readList(buf: BufferReader, byteTag: BinaryTag) {
        let list = []
        let size = this.readListSize(buf, byteTag)
        L('reader: readList', size);
        for (let i = 0; i < size; i++) {
            L('reader: readList', i)
            list.push(this.readNode(buf));
        }
        return list
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
            case BinaryTag.NIBBLE_8:
                return this.unpackNibble(buf, len);
            case BinaryTag.HEX_8:
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

    readListSize(buf: BufferReader, tag: BinaryTag): number {
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

    getToken(no: number) {
        if (no < 3 || no >= Dictionary.singleByte.length) {
            throw new Error("Undefined Byte Token")
        }
        return Dictionary.singleByte[no]
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
        if (byteTag == BinaryTag.STREAM_END) {
            throw new Error("Unexpected end tag");
        }
        let tag = this.readString(buf, byteTag)
        if (listSize === 0 || !tag) {
            throw new Error(`Invalid node. 0 list (${listSize}) or empty tag (${tag}).`);
        }

        let attrSize = listSize - 2 + listSize % 2 >> 1;
        let attr: { [key: string]: string } = this.readAttributes(buf, attrSize);
        if (listSize % 2 == 1) {
            L('reader: readNode', tag, 'NO DATA', BinaryTag[byteTag]);
            return { tag, attr }
        }

        let data;

        byteTag = buf.readByte()
        L('reader: readNode', tag, 'Data', BinaryTag[byteTag]);
        if (this.isListTag(byteTag)) {
            data = this.readList(buf, byteTag);
        } else if (byteTag === BinaryTag.BINARY_8) {
            var c = buf.readByte();
            data = buf.readBytes(c)
        } else if (byteTag === BinaryTag.BINARY_20) {
            var u = buf.readInt20();
            data = buf.readBytes(u)
        } else if (byteTag === BinaryTag.BINARY_32) {
            var l = buf.readInt32();
            data = buf.readBytes(l)
        } else
            data = this.readString(buf, byteTag);
        return { tag, attr, data }
    }
    isListTag(tag: number) {
        return tag === BinaryTag.LIST_EMPTY || tag === BinaryTag.LIST_8 || tag === BinaryTag.LIST_16
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