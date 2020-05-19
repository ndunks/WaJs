import { BinNode } from "../interfaces";
/*
bcjjbcbjaa: function(e, t, n) {
    "use strict";
    var a = n("cfjecfhbfg")(n("bfefjaegfe"))
      , r = 
*/
const nodeHelper = {
    tag: function (e: BinNode) {
        return e && e[0]
    },
    attr: function (e, t: BinNode) {
        return t && t[1] ? t[1][e] : void 0
    },
    attrs: function (e: BinNode) {
        return e[1]
    },
    child: function (e, t: BinNode) {
        var n = t[2];
        if (Array.isArray(n))
            for (var a = n.length, r = 0; r < a; r++) {
                var i = n[r];
                if (Array.isArray(i) && i[0] === e)
                    return i
            }
    },
    children: function (e: BinNode, t?) {
        if (!t)
            return e && e[2];
        var n = e[2];
        return Array.isArray(n) ? n.filter((function (e) {
            return e[0] === t
        }
        )) : void 0
    },
    dataStr: function (e: BinNode) {
        if ("string" == typeof e[2])
            return e[2]
        if (e[2] instanceof ArrayBuffer) {
            //new BinaryBuffer(e[2]).readString(e[2].byteLength)
            return Buffer.from(e[2]).toString('utf8')
        } else return ""
    },
    toString(e, t?) {
        if (!e)
            return "undefined";
        var n = function (e: BinNode, t) {
            if (e) {
                var n = "";
                for (var a in e) {
                    var r = "string" == typeof e[a] ? t ? "..." : '"' + e[a] + '"' : e[a];
                    n += " " + a + "=" + r
                }
                return n
            }
            return ""
        }(e[1], t)
            , a = function (e, t) {
                if (e instanceof ArrayBuffer)
                    return "<<bin:" + e.byteLength + ">>";
                if ("string" == typeof e)
                    return t ? "<<string:" + e.length + ">>" : e;
                if (Array.isArray(e))
                    return e.map((function (e) {
                        return nodeHelper.toString(e, t)
                    }
                    )).join("\n");
                return ""
            }(e[2], t);
        return "<" + e[0] + n + (a ? ">\n" + a + "\n</" + e[0] + ">" : "/>")
    }
};
export { nodeHelper }