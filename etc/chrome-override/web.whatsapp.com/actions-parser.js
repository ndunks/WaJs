function bcbeeajhgb(e, t, a) {
    "use strict";
    var n = a("cfjecfhbfg")
      , i = n(a("dfadhaifh"))
      , r = n(a("ddfeabiaci"))
      , o = n(a("dcdifccjdh"))
      , s = n(a("baagejbchg"))
      , d = n(a("bjigbaghc"))
      , c = a("bgiachiigg")
      , u = n(a("bdiiahhjbe"))
      , l = n(a("cffajefeag"))
      , f = n(a("cahfddcdga"))
      , h = a("bbcaggdbc");
    function p() {
        var e = (0,
        i.default)(["drop: cannot create MsgKey: ", ""]);
        return p = function() {
            return e
        }
        ,
        e
    }
    function g() {
        var e = (0,
        i.default)(["drop: broadcast"]);
        return g = function() {
            return e
        }
        ,
        e
    }
    function m() {
        var e = (0,
        i.default)(["wmi error: ", ""]);
        return m = function() {
            return e
        }
        ,
        e
    }
    function b() {
        var e = (0,
        i.default)(["drop: no bytes"]);
        return b = function() {
            return e
        }
        ,
        e
    }
    function v() {
        var e = (0,
        i.default)(["drop: not message"]);
        return v = function() {
            return e
        }
        ,
        e
    }
    var j = {
        version: "13",
        parseMsgMessage: function(e, t) {
            if ("message" === this.N.tag(e)) {
                var a = this.N.children(e);
                if (a instanceof ArrayBuffer)
                    try {
                        var n = h.WebMessageInfo.parse(a);
                        return this.parseWebMessageInfo(n, t)
                    } catch (t) {
                        return LOG(2)(m(), String(t)),
                        void u.default.assert(!1, "parse-error", "drop: failed parsing wmi")(e)
                    }
                else
                    LOG(4)(b())
            } else
                LOG(4)(v())
        },
        parseWebMessageInfo: function(e, t) {
            var a = e.key
              , n = this.decodeJid(a.remoteJid)
              , i = a.fromMe ? n : d.default.me
              , r = a.fromMe ? d.default.me : n
              , o = this.decodeJid(a.participant)
              , c = "in";
            if (d.default.me.equals(n) && (c = a.fromMe ? "out" : "in"),
            "broadcast" !== i) {
                var u;
                try {
                    u = new l.default({
                        fromMe: (0,
                        f.default)(a.fromMe),
                        remote: n,
                        id: (0,
                        f.default)(a.id),
                        participant: o
                    })
                } catch (e) {
                    return void LOG(4)(p(), e.stack)
                }
                var h = {
                    id: u,
                    from: r,
                    to: i,
                    self: c,
                    participant: o,
                    type: "unknown",
                    t: e.messageTimestamp || 0,
                    ack: "fresh" === t ? s.default.ACK.SENT : e.status - 1,
                    author: this.decodeJid(e.participant),
                    invis: !!e.ignore,
                    star: !!e.starred,
                    broadcast: a.fromMe && e.broadcast,
                    notifyName: e.pushName || "",
                    encFilehash: this.decodeBytes(e.mediaCiphertextSha256),
                    shareDuration: e.message && e.message.liveLocationMessage ? e.duration : void 0,
                    labels: e.labels,
                    ephemeralStartTimestamp: e.ephemeralStartTimestamp,
                    ephemeralDuration: e.ephemeralDuration,
                    ephemeralOffToOn: e.ephemeralOffToOn
                };
                return e.message ? this.parseMsgProto(e.message, h, t, e.paymentInfo, e.finalLiveLocation, e.quotedPaymentInfo) : this.parseMsgStubProto(e, h)
            }
            LOG(4)(g())
        },
        parseMsgStubProto: function(e, t) {
            var a = h.WebMessageInfo.STUBTYPE;
            switch (e.messageStubType) {
            case a.REVOKE:
                return t.type = "revoked",
                t;
            case a.CIPHERTEXT:
                return t.type = "ciphertext",
                t;
            case a.FUTUREPROOF:
                return t.type = "unknown",
                t.subtype = "phone",
                t;
            default:
                return t
            }
        },
        parseProtocolMessageProto: function(e, t, a) {
            if ("relay" === a || t.type === c.Message.ProtocolMessage.TYPE.EPHEMERAL_SETTING)
                switch (e.type = "protocol",
                t.type) {
                case c.Message.ProtocolMessage.TYPE.REVOKE:
                    var n = t.key
                      , i = new l.default({
                        fromMe: n.fromMe,
                        remote: this.decodeJid(n.remoteJid),
                        id: n.id,
                        participant: this.decodeJid(n.participant)
                    });
                    e.subtype = "revoke",
                    e.protocolMessageKey = i;
                    break;
                case c.Message.ProtocolMessage.TYPE.EPHEMERAL_SETTING:
                    e.subtype = "ephemeral_setting",
                    e.ephemeralDuration = t.ephemeralExpiration;
                    break;
                case c.Message.ProtocolMessage.TYPE.EPHEMERAL_SYNC_RESPONSE:
                    e.subtype = "ephemeral_sync_response",
                    e.ephemeralDuration = t.ephemeralExpiration,
                    e.ephemeralSettingTimestamp = t.ephemeralSettingTimestamp;
                    break;
                default:
                    e.subtype = "unknown"
                }
        }
    };
    e.exports = (0,
    r.default)(j, o.default)
}