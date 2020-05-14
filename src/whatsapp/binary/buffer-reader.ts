import BinaryBuffer from "./buffer";

//app2.b77125350eb0570a9fcd.js#djchfddccj
export default class BufferReader {

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

    readString(len: number) {
        return this.buf.readString(len)
    }
    readBytes(len: number) {
        return this.buf.readBuffer(len)
    }
    debugInfo() {
        return `Buf[${this.buf.size()}]: ${this.buf._readIndex}`;
    }
}