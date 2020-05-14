// app.c7929dae1df9f428d8c7.js#dcbdjheea
function(e, t, n) {
    "use strict";
    var a = n("cfjecfhbfg");
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.numberToWid = c,
    t.createWid = u,
    t.createWidFromWidLike = function(e) {
        return u("string" == typeof e ? e : e._serialized)
    }
    ,
    t.isWidlike = function(e) {
        return !!e && (!!i.default.isWid(e) || !(!e || "object" != typeof e || !i.default.isWid(e._serialized)))
    }
    ,
    t.toUserWid = function(e) {
        if (!e.isUser())
            throw new Error("asUserWid: wid is not a user wid");
        return null != e.device && 0 !== e.device || null != e.agent && 0 !== e.agent ? c(e.user) : e
    }
    ,
    t.createDeviceWid = function(e, t) {
        throw Error("createDeviceWid: invalid call.")
    }
    ,
    t.createUserWid = function(e, t) {
        var n = t || "c.us";
        return u("".concat(e, "@").concat(n))
    }
    ;
    var r = n("hjbbdjjdf")
      , i = a(n("jccfhaecf"))
      , o = a(n("ecadbdfdef"));
    function c(e) {
        return u((0,
        r.isString)(e) && (e.endsWith("@c.us") || e.endsWith("@s.whatsapp.net")) ? e : e + "@c.us")
    }
    function u(e) {
        var t;
        return o.default && o.default.cache ? (t = o.default.cache[e]) || (t = new i.default(e,{
            intentionallyUsePrivateConstructor: !0
        }),
        o.default.cache[e] = t) : t = new i.default(e,{
            intentionallyUsePrivateConstructor: !0
        }),
        t
    }
}