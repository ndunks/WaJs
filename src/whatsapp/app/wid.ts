// app.c7929dae1df9f428d8c7.js#jccfhaecf
function(e, t, n) {
    var d = /(?:^([^.:@]+))(?:\.([0-9]{1,2}))?(?:\:([0-9]{1,2}))?@(s\.whatsapp\.net|c\.us|g\.us|broadcast|call|b\.whatsapp\.net)$/i;
    var l = ["name", "short", "notify"];
    var f = function () {
        function e(t, n) {
            if ((0,
                i.logRawFreeze)(this, e),
                !(n && n.intentionallyUsePrivateConstructor))
                throw new Error("You should use WidFactory.createWid() instead of the Wid constructor. If you absolutely must use the constructor, pass {intentionallyUsePrivateConstructor: true} as a second parameter.");
            var a = t.match(d);
            if (!a)
                throw new Error("wid error: invalid wid: ".concat(t));
            var r, o = [], c = a[1], u = a[2], s = a[3], l = a[4].toLowerCase();
            switch (l) {
                case "s.whatsapp.net":
                    r = "c.us";
                    break;
                default:
                    r = l
            }
            if (this.server = r,
                this.user = c,
                o.push(this.user),
                u) {
                if ("c.us" !== this.server)
                    throw new Error("wid error: wrong server for wid with agent present: ".concat(t));
                var f = parseInt(u, 10);
                if (isNaN(f))
                    throw new Error("wid error: NaN agent: ".concat(u, " wid: ").concat(t));
                if (f > 255)
                    throw new Error("wid error: agent>255 : ".concat(f, " wid: ").concat(t));
                f && (o.push("."),
                    o.push(f),
                    this.agent = f)
            }
            if (s) {
                if ("c.us" !== this.server)
                    throw new Error("wid error: wrong server for wid with device present: ".concat(t));
                var h = parseInt(s, 10);
                if (isNaN(h))
                    throw new Error("wid error: NaN device: ".concat(s, " wid: ").concat(t));
                if (h > 255)
                    throw new Error("wid error: device>255 : ".concat(h, " wid: ").concat(t));
                h && (o.push(":"),
                    o.push(h),
                    this.device = h)
            }
            o.push("@"),
                o.push(this.server),
                this._serialized = o.join("")
        }
        return (0,
            o.default)(e, [{
                key: "toString",
                value: function (e) {
                    if (e) {
                        var t, n, a = e.legacy && "c.us" === this.server ? "@s.whatsapp.net" : this.server;
                        if (e.formatFull ? (t = ".".concat(this.agent || 0),
                            n = ":".concat(this.device || 0)) : (t = null != this.agent && 0 !== this.agent ? ".".concat(this.agent) : "",
                                n = null != this.device && 0 !== this.device ? ":".concat(this.device) : ""),
                            e.formatFull || e.legacy && "c.us" === this.server)
                            return [this.user, t, n, a].join("")
                    }
                    return this._serialized
                }
            }, {
                key: "getSignalAddress",
                value: function () {
                    var e = null != this.agent && 0 !== this.agent ? "_".concat(this.agent) : ""
                        , t = null != this.device && 0 !== this.device ? ":".concat(this.device) : "";
                    return [this.user, e, t].join("")
                }
            }, {
                key: "equals",
                value: function (t) {
                    return t instanceof e && this.toString() === t.toString()
                }
            }, {
                key: "isLessThan",
                value: function (t) {
                    return t instanceof e && this.toString() < t.toString()
                }
            }, {
                key: "isGreaterThan",
                value: function (t) {
                    return t instanceof e && this.toString() > t.toString()
                }
            }, {
                key: "isUser",
                value: function () {
                    return "c.us" === this.server
                }
            }, {
                key: "isBroadcast",
                value: function () {
                    return "broadcast" === this.server
                }
            }, {
                key: "isOfficialBizAccount",
                value: function () {
                    return this.toString() === createWild.default.OFFICIAL_BIZ_WID
                }
            }, {
                key: "isGroup",
                value: function () {
                    return "g.us" === this.server
                }
            }, {
                key: "isServer",
                value: function () {
                    return "server" === this.user && "c.us" === this.server
                }
            }, {
                key: "isPSA",
                value: function () {
                    return "0" === this.user && "c.us" === this.server
                }
            }, {
                key: "isStatusV3",
                value: function () {
                    return "status" === this.user && "broadcast" === this.server
                }
            }, {
                key: "toJSON",
                value: function () {
                    return this.toString()
                }
            }], [{
                key: "isXWid",
                value: function (t, n) {
                    return (0,
                        u.isString)(n) ? n.split("@")[1] === t : n instanceof e ? n.server === t : (void 0 !== n && LOG(2)(s(), String(n)),
                            !1)
                }
            }, {
                key: "isUser",
                value: function (t) {
                    return e.isXWid("c.us", t)
                }
            }, {
                key: "isBroadcast",
                value: function (t) {
                    return e.isXWid("broadcast", t)
                }
            }, {
                key: "isGroup",
                value: function (t) {
                    return e.isXWid("g.us", t)
                }
            }, {
                key: "isGroupCall",
                value: function (t) {
                    return e.isXWid("call", t)
                }
            }, {
                key: "isWid",
                value: function (t) {
                    return (0,
                        u.isString)(t) ? d.test(t) : t instanceof e
                }
            }, {
                key: "canBeWid",
                value: function (e) {
                    return !e || !l.includes(e)
                }
            }, {
                key: "isServer",
                value: function (t) {
                    return (0,
                        u.isString)(t) ? t.toLowerCase() === createWild.default.SERVER_WID : t instanceof e && t.isServer()
                }
            }, {
                key: "isPSA",
                value: function (t) {
                    return (0,
                        u.isString)(t) ? t.toLowerCase() === createWild.default.PSA_WID : t instanceof e && t.isPSA()
                }
            }, {
                key: "isStatusV3",
                value: function (t) {
                    return (0,
                        u.isString)(t) ? t.toLowerCase() === createWild.default.STATUS_WID : t instanceof e && t.isStatusV3()
                }
            }, {
                key: "isOfficialBizAccount",
                value: function (t) {
                    return (0,
                        u.isString)(t) ? t.toLowerCase() === createWild.default.OFFICIAL_BIZ_WID : t instanceof e && t.isOfficialBizAccount()
                }
            }, {
                key: "user",
                value: function (t) {
                    return (0,
                        u.isString)(t) ? t.split("@")[0] : t instanceof e ? t.user : void 0
                }
            }, {
                key: "equals",
                value: function (t, n) {
                    return t instanceof e || n instanceof e ? t instanceof e && t.equals(n) : t === n
                }
            }, {
                key: "isLessThan",
                value: function (t, n) {
                    return t instanceof e && n instanceof e && t.toString() < n.toString()
                }
            }, {
                key: "isGreaterThan",
                value: function (t, n) {
                    return t instanceof e && n instanceof e && t.toString() > n.toString()
                }
            }]),
            e
    }();
    t.default = f
}