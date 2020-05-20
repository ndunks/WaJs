export default class BinaryOutputStream {
    WRITING_ATTR_FLAG: boolean = false;
    CURRENT_ATTR_KEY: string;
    buf: Buffer
    constructor(size = 0) {
        this.buf = Buffer.alloc(size)
    }
    get size() {
        return this.buf.byteLength
    }

    pushInt16(e: number) {
        const buf = Buffer.alloc(2)
        buf.writeUInt16BE(e)
        this.pushBuffer(buf)
    }
    pushInt20(e: number) {
        if ("number" != typeof e)
            throw new Error("invalid int20");
        const buf = Buffer.alloc(5)
        buf.writeUInt8((983040 & e) >> 16)
        buf.writeUInt16BE(65535 & e)
        this.pushBuffer(buf)
    }

    pushInt32(e: number) {
        const buf = Buffer.alloc(4)
        buf.writeUInt32BE(e)
        this.pushBuffer(buf)
    }
    pushByte(e: number) {
        this.pushBuffer(Buffer.from([e]))
    }
    pushBytes(e: Uint8Array) {
        if (!(e instanceof Uint8Array))
            throw new Error("invalid byte buffer");
        this.pushBuffer(Buffer.from(e))
    }
    pushUint8Array(e: Uint8Array) {
        if ("[object Uint8Array]" !== Object.prototype.toString.call(e))
            throw new Error("invalid Uint8Array");
        const newBuf = new Uint8Array(this.size + e.byteLength)
        newBuf.set(this.buf)
        newBuf.set(e, this.size)
        this.buf = Buffer.concat([this.buf, e])
        return this
    }
    pushString(e: string) {
        if ("string" != typeof e)
            throw new Error("invalid string");
        this.pushBuffer(Buffer.from(e, 'utf8'))
    }
    pushBuffer(e: Buffer) {
        return this.buf = Buffer.concat([this.buf, e])
    }

    toBuffer() {
        return this.buf
    }
}
