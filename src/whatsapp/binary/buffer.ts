// app.c7929dae1df9f428d8c7.js#bfefjaegfe
let s = "", d = 0;

function numUtf8Bytes(e) {
    if (e === s)
        return d;
    let n = 0, a = 0
    for (let t = e.length; a < t; a++) {
        let r = e.charCodeAt(a);
        if (r < 128)
            n++;
        else if (r < 2048)
            n += 2;
        else if (r < 55296 || 57344 <= r && r <= 65535)
            n += 3;
        else if (55296 <= r && r < 56320 && a + 1 !== t) {
            let i = e.charCodeAt(a + 1);
            56320 <= i && i < 57344 ? (a++,
                n += 4) : n += 3
        } else
            n += 3
    }
    return s = e,
        d = n
}
function f(e, t, n, a) {
    if ("number" != typeof e || e != e || Math.floor(e) !== e || e < t || e >= n)
        throw new TypeError("string" == typeof e ? 'WriteError: string "'.concat(e, '" is not a valid ').concat(a) : "WriteError: ".concat(String(e), " is not a valid ").concat(a))
}
function getDataView(e: BinaryBuffer) {
    return e._view || (e._view = new DataView(e._buffer.buffer, e._buffer.byteOffset))
}

function markRead(buf: BinaryBuffer, size: number) {
    if (size < 0)
        throw new Error("ReadError: given negative number of bytes to read");
    let n = buf._readIndex
    let a = n + size
    if (a > buf._readEndIndex)
        throw new Error(n === buf._readEndIndex ? "ReadError: tried to read from depleted binary" : "ReadError: tried to read beyond end of binary");
    buf._readIndex = a
    buf._hiddenReads || (buf._earliestIndex = a)
    return n
}

function g(e, t) {
    let n = _(e, e._writeIndex + t)
        , a = e._writeIndex;
    return e._writeIndex = n,
        e._hiddenWrites || (e._readEndIndex = n),
        a
}
function _(e, t) {
    let n = e._buffer;
    if (t <= n.length)
        return t;
    let a = e._earliestIndex
        , r = t - a
        , i = Math.max(r, 2 * (n.length - a), 64)
        , o = new Uint8Array(i);
    return a ? (o.set(n.subarray(a)),
        e._bytesTrashed += a,
        e._readIndex -= a,
        e._readEndIndex -= a,
        e._writeIndex -= a,
        e._earliestIndex = 0) : o.set(n),
        e._buffer = o,
        e._view = null,
        r
}
function b(e, t, n) {
    let a = markRead(n, 8)
    let r = getDataView(n);
    return v(e, r.getInt32(t ? a + 4 : a, t), r.getInt32(t ? a : a + 4, t))
}
function m(e, t, n: BinaryBuffer) {
    let a = g(n, 8)
        , r = e < 0
        , i = r ? -e : e
        , o = Math.floor(i / 4294967296)
        , c = i - 4294967296 * o
        , u = getDataView(n);
    u.setUint32(t ? a + 4 : a, o, t)
    u.setUint32(t ? a : a + 4, c, t)
    if (r) {
        let s = n._buffer
        for (let d = a; d < a + 8; d++)
            s[d] = 255 & ~s[d];
        let l = 255;
        if (t) {
            for (let f = a; f < a + 8 && 255 === l; f++) {
                l = s[f]
                s[f] = 255 === l ? 0 : l + 1;
            }
        }
        else {
            for (let p = a + 7; p >= a && 255 === l; p--) {
                l = s[p]
                s[p] = 255 === l ? 0 : l + 1
            }
        }
    }
}
function v(e, t, n) {
    let a = t >> 20
        , r = 4294967296 * (t >= 0 ? t : e ? t : 4294967296 + t) + (n >= 0 ? n : 4294967296 + n);
    return 0 === a || e && -1 === a ? r : BinaryBuffer.onLongLong(r, e, t, n)
}
function E(e, t, n) {
    if (t >= n)
        return 0;
    let a = 0 | e[t];
    return 128 == (192 & a) ? a : 0
}

export default class BinaryBuffer {
    static numUtf8Bytes = numUtf8Bytes
    _buffer: Uint8Array
    _readEndIndex: number
    _writeIndex: number
    _bytesTrashed: number = 0
    _earliestIndex: number = 0
    _readIndex: number = 0
    _view: DataView = null
    _littleEndian: boolean
    _hiddenReads: number = 0
    _hiddenWrites: number = 0
    _tmpBuf: Uint8Array = new Uint8Array(10)

    constructor(t?: ArrayBufferLike, littleEndian = false) {
        // let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c
        //     , n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        //(0,r.default)(this, e)
        if ('undefined' == typeof t || !t) {
            this._buffer = new Uint8Array(0)
            this._readEndIndex = this._writeIndex = 0
        } else if (t instanceof ArrayBuffer) {
            this._buffer = new Uint8Array(t)
            this._readEndIndex = this._writeIndex = t.byteLength
        } else if (t instanceof Uint8Array) {
            this._buffer = t
            this._readEndIndex = this._writeIndex = t.length
        }
        this._littleEndian = littleEndian
    }
    size() {
        return this._readEndIndex - this._readIndex
    }
    peek(e, t) {
        this._hiddenReads++;
        let n = this._readIndex
            , a = this._bytesTrashed;
        try {
            return e(this, t)
        } finally {
            this._hiddenReads--,
                this._readIndex = n - (this._bytesTrashed - a)
        }
    }
    advance(e) {
        markRead(this, e)
    }
    readUint8() {
        return this._buffer[markRead(this, 1)]
    }
    readInt8() {
        let e = markRead(this, 1);
        return getDataView(this).getInt8(e)
    }
    readUint16() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._littleEndian
            , t = markRead(this, 2);
        return getDataView(this).getUint16(t, e)
    }
    readInt32() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._littleEndian
            , t = markRead(this, 4);
        return getDataView(this).getInt32(t, e)
    }
    readUint32() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._littleEndian
            , t = markRead(this, 4);
        return getDataView(this).getUint32(t, e)
    }
    readInt64() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._littleEndian;
        return b(!0, e, this)
    }
    readUint64() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._littleEndian;
        return b(!1, e, this)
    }
    readFloat32() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._littleEndian
            , t = markRead(this, 4);
        return getDataView(this).getFloat32(t, e)
    }
    readFloat64() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._littleEndian
            , t = markRead(this, 8);
        return getDataView(this).getFloat64(t, e)
    }
    readVarInt() {
        let e, t = this._readIndex, n = this._readEndIndex - t, a = this._buffer;
        n <= 0 && markRead(this, 1);
        let r = a[t];
        for (e = 1; e < n && e < 11 && 128 & r; e++)
            r = a[t + e];
        let i = e;
        if (i > 10 || 10 === i && a[t + 9] > 1)
            throw new Error("ParseError: varint exceeds 64 bits");
        128 & r && markRead(this, i + 1),
            markRead(this, i);
        let o = 0
            , c = 0;
        for (e = 0; e < 3 && e < i; e++,
            c += 7)
            o |= (127 & a[t + e]) << c;
        if (i < 4)
            return o;
        let u = 0;
        for (c = 0,
            e = 3; e < 6 && e < i; e++,
            c += 7)
            u |= (127 & a[t + e]) << c;
        if (i < 5)
            return u << 21 | o;
        if (i < 7)
            return 2097152 * u + o;
        let s = 0;
        for (c = 0,
            e = 6; e < 9 && e < i; e++,
            c += 7)
            s |= (127 & a[t + e]) << c;
        return 10 === i && (s |= (1 & a[t + 9]) << 21),
            v(!0, s << 10 | u >> 11, u << 21 | o)
    }
    readBuffer(size?: number) {
        if ('undefined' == typeof size)
            size = this.size();
        if (0 === size)
            return new ArrayBuffer(0);
        let t = markRead(this, size)
            , n = this._buffer
            , a = t + n.byteOffset
            , r = n.buffer;
        return 0 === a && this._readIndex === r.byteLength ? r : r.slice(a, a + size)
    }
    readByteArray(size?: number) {
        if ('undefined' == typeof size)
            size = this.size();
        if (0 === size)
            return new Uint8Array(0);
        let t = markRead(this, size);
        return this._buffer.subarray(t, t + size)
    }
    readBinary() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.size()
            , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._littleEndian;
        if (0 === t)
            return new BinaryBuffer(void 0, n);
        let a = markRead(this, t)
            , r = this._buffer.subarray(a, a + t);
        return new BinaryBuffer(r, n)
    }
    indexOf(e) {
        if (0 === e.length)
            return 0;
        for (let t = this._buffer, n = this._readEndIndex, a = this._readIndex, r = 0, i = a, o = a; o < n; o++)
            if (t[o] === e[r]) {
                if (0 === r && (i = o),
                    ++r === e.byteLength)
                    return o - a - e.byteLength + 1
            } else
                r > 0 && (r = 0,
                    o = i);
        return -1
    }
    readString(e) {
        let t, n = markRead(this, e), a = n + e, r = this._buffer, i = []
        for (let o = n; o < a; o++) {
            i.length > 5e3 && (t || (t = []),
                t.push(String.fromCharCode.apply(String, i)),
                i = []);
            let c = 0 | r[o];
            if (0 == (128 & c))
                i.push(c);
            else if (192 == (224 & c)) {
                let u = E(r, o + 1, a);
                if (u) {
                    o++;
                    let s = (31 & c) << 6 | 63 & u;
                    s >= 128 ? i.push(s) : i.push(65533)
                } else
                    i.push(65533)
            } else if (224 == (240 & c)) {
                let d = E(r, o + 1, a)
                    , l = E(r, o + 2, a);
                if (d && l) {
                    o += 2;
                    let f = (15 & c) << 12 | (63 & d) << 6 | 63 & l;
                    f >= 2048 && !(55296 <= f && f < 57344) ? i.push(f) : i.push(65533)
                } else
                    d ? (o++,
                        i.push(65533)) : i.push(65533)
            } else if (240 == (248 & c)) {
                let h = E(r, o + 1, a)
                    , g = E(r, o + 2, a)
                    , _ = E(r, o + 3, a);
                if (h && g && _) {
                    o += 3;
                    let b = (7 & c) << 18 | (63 & h) << 12 | (63 & g) << 6 | 63 & _;
                    if (b >= 65536 && b <= 1114111) {
                        let m = b - 65536;
                        i.push(55296 | m >> 10, 56320 | 1023 & m)
                    } else
                        i.push(65533)
                } else
                    h && g ? (o += 2,
                        i.push(65533)) : h ? (o++,
                            i.push(65533)) : i.push(65533)
            } else
                i.push(65533)
        }
        let v = String.fromCharCode.apply(String, i);
        return t ? (t.push(v),
            t.join("")) : v
    }
    ensureCapacity(e) {
        _(this, this._readIndex + e)
    }
    ensureAdditionalCapacity(e) {
        _(this, this._writeIndex + e)
    }
    write() {
        for (let t = 0; t < arguments.length; t++) {
            let n = t < 0 || arguments.length <= t ? void 0 : arguments[t];
            "string" == typeof n ? this.writeString(n) : "number" == typeof n ? this.writeUint8(n) : n instanceof BinaryBuffer ? this.writeBinary(n) : n instanceof ArrayBuffer ? this.writeBuffer(n) : n instanceof Uint8Array && this.writeByteArray(n)
        }
    }
    writeUint8(e) {
        f(e, 0, 256, "uint8");
        let t = g(this, 1);
        this._buffer[t] = e
    }
    writeInt8(e) {
        f(e, -128, 128, "signed int8");
        let t = g(this, 1);
        this._buffer[t] = e
    }
    writeUint16(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._littleEndian;
        f(e, 0, 65536, "uint16");
        let n = g(this, 2);
        getDataView(this).setUint16(n, e, t)
    }
    writeInt16(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._littleEndian;
        f(e, -32768, 32768, "signed int16");
        let n = g(this, 2);
        getDataView(this).setInt16(n, e, t)
    }
    writeUint32(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._littleEndian;
        f(e, 0, 4294967296, "uint32");
        let n = g(this, 4);
        getDataView(this).setUint32(n, e, t)
    }
    writeInt32(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._littleEndian;
        f(e, -2147483648, 2147483648, "signed int32");
        let n = g(this, 4);
        getDataView(this).setInt32(n, e, t)
    }
    writeUint64(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._littleEndian;
        f(e, 0, 0x10000000000000000, "uint64"),
            m(e, t, this)
    }
    writeInt64(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._littleEndian;
        f(e, -0x8000000000000000, 0x8000000000000000, "signed int64"),
            m(e, t, this)
    }
    writeFloat32(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._littleEndian
            , n = g(this, 4);
        getDataView(this).setFloat32(n, e, t)
    }
    writeFloat64(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._littleEndian
            , n = g(this, 8);
        getDataView(this).setFloat64(n, e, t)
    }
    writeVarInt(e) {
        let t = e;
        f(t, -0x8000000000000000, 0x8000000000000000, "varint (signed int64)");
        let n = t < 0;
        n && (t = -t);
        let u, a = (t < 128 ? 1 : t < 16384 && 2) || t < 2097152 && 3 || t < 268435456 && 4 || t < 34359738368 && 5 || t < 4398046511104 && 6 || t < 562949953421312 && 7 || t < 72057594037927940 && 8 || 9, r = g(this, n ? 10 : a), i = this._buffer, o = t, c = r
        for (u = a; u > 4; u--) {
            let s = Math.floor(o / 128)
                , d = o - 128 * s;
            i[c++] = 128 | 127 & d,
                o = s
        }
        for (; u > 1; u--)
            i[c++] = 128 | 127 & o,
                o >>= 7;
        if (i[c++] = o,
            n) {
            for (let l = r; l < c; l++)
                i[l] = 128 | 127 & ~i[l];
            for (let h = c; h < r + 9; h++)
                i[h] = 255;
            i[r + 9] = 1;
            for (let p = 255, _ = r; _ < r + 9 && 255 === p; _++)
                p = i[_],
                    i[_] = 255 === p ? 128 : p + 1
        }
    }
    writeBinary(e) {
        let t = e._readIndex
            , n = e._readEndIndex;
        if (t !== n) {
            let a = g(this, n - t);
            this._buffer.set(e._buffer.subarray(t, n), a)
        }
    }
    writeBuffer(e) {
        this.writeByteArray(new Uint8Array(e))
    }
    writeByteArray(e) {
        let t = g(this, e.length);
        this._buffer.set(e, t)
    }
    writeBufferView(e) {
        this.writeByteArray(new Uint8Array(e.buffer, e.byteOffset, e.byteLength))
    }
    writeString(e) {
        for (let t = g(this, numUtf8Bytes(e)), n = this._buffer, a = e.length, r = 0; r < a; r++) {
            let i = e.charCodeAt(r);
            if (i < 128)
                n[t++] = i;
            else if (i < 2048)
                n[t++] = 192 | i >> 6,
                    n[t++] = 128 | 63 & i;
            else if (i < 55296 || 57344 <= i)
                n[t++] = 224 | i >> 12,
                    n[t++] = 128 | i >> 6 & 63,
                    n[t++] = 128 | 63 & i;
            else if (55296 <= i && i < 56320 && r + 1 !== a) {
                let o = e.charCodeAt(r + 1);
                if (56320 <= o && o < 57344) {
                    r++;
                    let c = 65536 + ((1023 & i) << 10 | 1023 & o);
                    n[t++] = 240 | c >> 18,
                        n[t++] = 128 | c >> 12 & 63,
                        n[t++] = 128 | c >> 6 & 63,
                        n[t++] = 128 | 63 & c
                } else
                    n[t++] = 239,
                        n[t++] = 191,
                        n[t++] = 189
            } else
                n[t++] = 239,
                    n[t++] = 191,
                    n[t++] = 189
        }
    }
    writeBytes() {
        let e = arguments.length, t = new Array(e)
        for (let n = 0; n < e; n++)
            t[n] = arguments[n];
        for (let a = 0; a < t.length; a++)
            f(t[a], 0, 256, "byte");
        for (let r = g(this, t.length), i = this._buffer, o = 0; o < t.length; o++)
            i[r + o] = arguments[o]
    }
    writeWithVarIntLength(e, t) {
        let n = this._writeIndex;

        function x(e, t, n) {
            e._hiddenWrites++;
            let a = e._writeIndex
                , r = e._bytesTrashed;
            try {
                t(e, n),
                    a = e._writeIndex,
                    r = e._bytesTrashed
            } finally {
                e._hiddenWrites--,
                    e._writeIndex = a - (e._bytesTrashed - r)
            }
        }
        x(this, e, t);

        let a = this._writeIndex;
        this.writeVarInt(a - n);
        let r = this._writeIndex - a, i = this._buffer
        for (let c = 0; c < r; c++)
            this._tmpBuf[c] = i[a + c];
        for (let u = a - 1; u >= n; u--)
            i[u + r] = i[u];
        for (let s = 0; s < r; s++)
            i[n + s] = this._tmpBuf[s]
    }
    build() {
        let t = arguments.length, n = new Array(t)
        for (let a = 0; a < t; a++)
            n[a] = arguments[a];
        let r = 0
        for (let i = 0; i < n.length; i++) {
            let o = n[i];
            "string" == typeof o ? r += numUtf8Bytes(o) : "number" == typeof o ? r++ : o instanceof BinaryBuffer ? r += o.size() : o instanceof ArrayBuffer ? r += o.byteLength : o instanceof Uint8Array && (r += o.length)
        }
        let c = new BinaryBuffer;
        return c.ensureCapacity(r),
            c.write.apply(c, arguments),
            c
    }
    static onLongLong(e, t, n, a) {
        throw new Error("ReadError: integer exceeded 52 bits (".concat(e, ")"))
    }
}