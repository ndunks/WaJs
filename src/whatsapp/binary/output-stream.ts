import BinaryBuffer from "./buffer";

export default class BinaryOutputStream {
    WRITING_ATTR_FLAG: boolean = false;
    CURRENT_ATTR_KEY: string;

    buf: BinaryBuffer
    constructor() {
        this.buf = new BinaryBuffer
    }

    pushInt16(e) {
        this.buf.writeUint16(e)
    }
    pushInt20(e: number) {
        if ("number" != typeof e)
            throw new Error("invalid int20");
        this.buf.writeUint8((983040 & e) >> 16)
        this.buf.writeUint16(65535 & e)
    }
    pushInt32(e: number) {
        this.buf.writeUint32(e)
    }
    pushByte(e: number) {
        this.buf.writeUint8(e)
    }
    pushBytes(e) {
        if (!(e instanceof ArrayBuffer))
            throw new Error("invalid byte buffer");
        this.buf.writeBuffer(e)
    }
    pushUint8Array(e: Uint8Array) {
        if ("[object Uint8Array]" !== Object.prototype.toString.call(e))
            throw new Error("invalid Uint8Array");
        this.buf.writeByteArray(e)
    }
    pushString(e: string) {
        if ("string" != typeof e)
            throw new Error("invalid string");
        this.buf.writeString(e)
    }
    toBuffer() {
        return this.buf.readBuffer()
    }
}
