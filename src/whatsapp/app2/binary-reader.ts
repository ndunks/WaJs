// app2.b77125350eb0570a9fcd.js#djchfddccj

import BinaryBuffer from "./binary-buffer"

export default class BinaryReader {
    constructor(public buf: BinaryBuffer) {

    }

    readByte() {
        return this.buf.readUint8()
    }
    readInt16() {
        return this.buf.readUint16()
    }
    readInt20() {
        return ((15 & this.buf.readUint8()) << 16) + (this.buf.readUint8() << 8) + this.buf.readUint8()
    }
    readInt32() {
        return this.buf.readUint32()
    }
    readString(e) {
        return this.buf.readString(e)
    }
    readBytes(e) {
        return this.buf.readBuffer(e)
    }
    debugInfo() {
        var e = this.buf;
        return "offset: ".concat(e._readIndex, " byte: ").concat(e._buffer[e._readIndex])
    }
    debugInfoWithPadding() {
        var e = this.buf
            , t = e._buffer.slice(Math.max(0, e._readIndex - 20), e._readIndex).toString()
            , a = e._buffer.slice(e._readIndex, Math.min(e._buffer.length, e._readIndex + 20)).toString();
        return "offset: ".concat(e._readIndex, " byte: ").concat(e._buffer[e._readIndex], " previous 20 bytes: ").concat(t, "\n        following 20 bytes: ").concat(a, "\n        ")
    }
}
}
