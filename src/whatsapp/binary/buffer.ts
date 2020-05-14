
export default class BinaryBuffer {

    constructor(public buf: Buffer, public offset = 0) {
    }

    readByte() {
        return this.buf.readUInt8(this.offset++)
    }

    readInt16() {
        const v = this.buf.readUInt16BE(this.offset)
        this.offset += 2;
        return v
    }

    readInt20() {
        return ((15 & this.readByte()) << 16) + (this.readByte() << 8) + this.readByte()
    }

    readInt32() {
        return this.buf.readUInt32BE(this.offset++)
    }

    debugInfo() {
        return `Buf[${this.buf.length}]: ${this.offset}`;
    }
}