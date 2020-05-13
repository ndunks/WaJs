// n = a("cfjecfhbfg") // module export
const n = require
const e = module
// i = n(a("dfadhaifh"))
let i = {
    default: function (e, t?) {
        return t || (t = e.slice(0)),
            Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(t)
                }
            }))
    }
}

// r = n(a("ccebfaijda"))
let r = {
    default: {
        BINARY_8: 252,
        BINARY_20: 253,
        BINARY_32: 254,
        DICTIONARY_0: 236,
        DICTIONARY_1: 237,
        DICTIONARY_2: 238,
        DICTIONARY_3: 239,
        HEX_8: 251,
        JID_PAIR: 250,
        LIST_8: 248,
        LIST_16: 249,
        LIST_EMPTY: 0,
        NIBBLE_8: 255,
        PACKED_MAX: 254,
        SINGLE_BYTE_MAX: 256,
        STREAM_END: 2
    }
}
// o = n(a("jccfhaecf")),
// let o  // wid ?
// s = a("dcbdjheea");
// let s // wid-create

function d() {
    /* var e = (0,
            i.default)(["\n                Unexpected token in binary protocol read. Token : ", "\n                lastTag: ", "\n                lastAttributeKey: ", "\n                ", "\n              "]);
            return d = function() {
                return e
            }
            ,
            e */
    return function () {
        return i.default(["\n                Unexpected token in binary protocol read. Token : ", "\n                lastTag: ", "\n                lastAttributeKey: ", "\n                ", "\n              "])
    }
}
function c(e) {
    try {
        return s.createWid(e)
    } catch (t) {
        return e
    }
}

e.exports = function (e) {
    var t = ""
        , a = ""
        , n = e.singleByte
        , i = e.doubleByte
        , s = e.nibbleDecode;
    this.readNode = function (e) {
        var a = e.readByte()
            , n = this.readListSize(e, a);
        if ((a = e.readByte()) === r.default.STREAM_END)
            throw new Error("unexpected stream end " + e.debugInfo());
        var i = this.readString(e, a);
        if (0 === n || !i)
            throw new Error("invalid node. 0 list or empty tag" + e.debugInfo());
        var o = n - 2 + n % 2 >> 1;
        t = i;
        var s, d = this.readAttributes(e, o);
        if (n % 2 == 1)
            return [i, d, void 0];
        if (a = e.readByte(),
            this.isListTag(a))
            s = this.readList(e, a);
        else if (a === r.default.BINARY_8) {
            var c = e.readByte();
            s = e.readBytes(c)
        } else if (a === r.default.BINARY_20) {
            var u = e.readInt20();
            s = e.readBytes(u)
        } else if (a === r.default.BINARY_32) {
            var l = e.readInt32();
            s = e.readBytes(l)
        } else
            s = this.readString(e, a);
        return [i, d, s]
    }
        ,
        this.isListTag = function (e) {
            return e === r.default.LIST_EMPTY || e === r.default.LIST_8 || e === r.default.LIST_16
        }
        ,
        this.readListSize = function (e, t) {
            if (t === r.default.LIST_EMPTY)
                return 0;
            if (t === r.default.LIST_8)
                return e.readByte();
            if (t === r.default.LIST_16)
                return e.readInt16();
            throw new Error("invalid list size " + e.debugInfo())
        }
        ,
        this.readString = function (e, n) {
            var i, s = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            if (-1 === n)
                throw new Error("invalid start token readString" + e.debugInfo());
            if (n > 2 && n < 236) {
                var u = this.getToken(n);
                return "s.whatsapp.net" === u && (u = "c.us"),
                    u
            }
            switch (n) {
                case r.default.DICTIONARY_0:
                case r.default.DICTIONARY_1:
                case r.default.DICTIONARY_2:
                case r.default.DICTIONARY_3:
                    var l = e.readByte();
                    return this.getTokenDouble(n - r.default.DICTIONARY_0, l);
                case r.default.LIST_EMPTY:
                    return;
                case r.default.BINARY_8:
                    return i = e.readString(e.readByte()),
                        this.isAttr && s && o.default.isWid(i) ? c(i) : i;
                case r.default.BINARY_20:
                    return i = e.readString(e.readInt20()),
                        this.isAttr && s && o.default.isWid(i) ? c(i) : i;
                case r.default.BINARY_32:
                    return i = e.readString(e.readInt32()),
                        this.isAttr && s && o.default.isWid(i) ? c(i) : i;
                case r.default.JID_PAIR:
                    var f = this.readString(e, e.readByte())
                        , h = this.readString(e, e.readByte());
                    if (void 0 !== f && void 0 !== h) {
                        var p = f + "@" + h;
                        return s && o.default.isWid(p) ? c(p) : p
                    }
                    if (void 0 !== h)
                        return h;
                    throw new Error("invalid jid " + f + "," + h + " " + e.debugInfo());
                case r.default.NIBBLE_8:
                case r.default.HEX_8:
                    return this.readPacked8(n, e);
                default:
                    //throw LOG(1, !0)(d(), n, t, a, e.debugInfoWithPadding()),
                    throw new Error("invalid string " + n)
            }
        }
        ,
        this.getToken = function (e) {
            var t;
            if (e >= 0 && e < n.length && (t = n[e]),
                void 0 === t)
                throw new Error("invalid token " + e);
            return t
        }
        ,
        this.getTokenDouble = function (e, t) {
            var a, n = 256 * e + t;
            if (n >= 0 && n < i.length && (a = i[n]),
                void 0 === a)
                throw new Error("invalid double byte token " + e + " " + t);
            return a
        }
        ,
        this.readAttributes = function (e, t) {
            var n, i;
            this.isAttr = !0;
            for (var r = t ? {} : void 0, s = 0; s < t; s++)
                n = this.readString(e, e.readByte()),
                    a = n,
                    i = this.readString(e, e.readByte(), o.default.canBeWid(n)),
                    r[n] = i;
            return this.isAttr = !1,
                r
        }
        ,
        this.readList = function (e, t) {
            for (var a = [], n = this.readListSize(e, t), i = 0; i < n; i++)
                a.push(this.readNode(e));
            return a
        }
        ,
        this.readPacked8 = function (e, t) {
            for (var a = t.readByte(), n = a >> 7, i = 127 & a, r = "", o = 0; o < i; o++) {
                var s = t.readByte();
                r += this.unpackByte(e, (240 & s) >> 4),
                    r += this.unpackByte(e, 15 & s)
            }
            return n && (r = r.substring(0, r.length - 1)),
                r
        }
        ,
        this.unpackByte = function (e, t) {
            switch (e) {
                case r.default.NIBBLE_8:
                    return this.unpackNibble(t);
                case r.default.HEX_8:
                    return this.unpackHex(t);
                default:
                    throw new Error("unpack non-nibble/hex type: " + e)
            }
        }
        ,
        this.unpackNibble = function (e) {
            if (!s.hasOwnProperty(e))
                throw new Error("invalid nibble to unpack: " + e);
            return s[e]
        }
        ,
        this.unpackHex = function (e) {
            if (e >= 0 && e <= 15)
                return e.toString(16).toUpperCase();
            throw new Error("invalid hex to unpack: " + e)
        }
}