//app2.b77125350eb0570a9fcd.js#djchfddccj
export default class BinaryInputStream {
    READING_ATTR_FLAG: boolean = false;
    CURRENT_ATTR_KEY: string;

    constructor(public buf: Buffer, public index = 0) {
    }

    readByte() {
        return this.buf.readUInt8(this.index++)
    }

    readInt16() {
        const val = this.buf.readUInt16BE(this.index)
        this.index += 2
        return val
    }

    readInt20() {
        return ((15 & this.readByte()) << 16) + (this.readByte() << 8) + this.readByte()
    }

    readInt32() {
        const val = this.buf.readUInt32BE(this.index)
        this.index += 4
        return val
    }

    /** UTF8 string */
    readString(len: number) {
        return Buffer.from(this.readBytes(len)).toString('utf8')
    }

    readBytes(len: number) {
        if (this.index + len > this.buf.byteLength) {
            throw new Error('Read overflow');
        }
        const bytes = this.buf.slice(this.index, this.index + len)
        this.index += len
        return bytes
    }
    debugInfo() {
        return `Buf[${this.buf.byteLength}]: ${this.index}`;
    }
}