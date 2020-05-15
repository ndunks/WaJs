import Constant from "../constant";

const regex = /(?:^([^.:@]+))(?:\.([0-9]{1,2}))?(?:\:([0-9]{1,2}))?@(s\.whatsapp\.net|c\.us|g\.us|broadcast|call|b\.whatsapp\.net)$/i;
const l = ["name", "short", "notify"];

/** #hjbbdjjdf */
export const WidHelper = {
    isFunction(e) {
        return "function" == typeof e
    },
    isNumber(e) {
        return "number" == typeof e
    },
    isString(e) {
        return "string" == typeof e
    },
    isBoolean(e) {
        return "boolean" == typeof e
    },
    LogLevels: {
        ALL: "all",
        LOG: "log",
        WARN: "warn",
        ERROR: "error",
        INFO: "info",
        OFF: "off"
    }
}

export default class Wid {
    server: string
    user: string
    agent: number
    device: number
    _serialized: string

    constructor(str: string, flag) {
        if (!(flag && flag.intentionallyUsePrivateConstructor))
            throw new Error("You should use WidFactory.createWid() instead of the Wid constructor. If you absolutely must use the constructor, pass {intentionallyUsePrivateConstructor: true} as a second parameter.");
        let match = str.match(regex);
        if (!match)
            throw new Error("wid error: invalid wid: ".concat(str));

        let vals = []
        this.user = match[1]
        this.server = match[4].toLowerCase();
        if (this.server == 's.whatsapp.net') {
            this.server = "c.us"
        }
        let tmpAgent = match[2], tmpDevice = match[3]

        vals.push(this.user)
        if (tmpAgent) {
            if ("c.us" !== this.server)
                throw new Error(`wid error: wrong server for wid with agent present: ${str}`);
            let f = parseInt(tmpAgent, 10);
            if (isNaN(f))
                throw new Error(`wid error: NaN agent: ${tmpAgent} wid: ${str}`);
            if (f > 255)
                throw new Error(`wid error: agent>255 : ${f} wid: ${str}`);
            f && (vals.push("."),
                vals.push(f),
                this.agent = f)
        }
        if (tmpDevice) {
            if ("c.us" !== this.server)
                throw new Error(`wid error: wrong server for wid with device present: ${str}`);
            var deviceNum = parseInt(tmpDevice, 10);
            if (isNaN(deviceNum))
                throw new Error(`wid error: NaN device: ${tmpDevice} wid: ${str}`);
            if (deviceNum > 255)
                throw new Error(`wid error: device>255 : ${deviceNum} wid: ${str}`);
            if (deviceNum)
                vals.push(":")
            vals.push(deviceNum)
            this.device = deviceNum
        }
        vals.push("@")
        vals.push(this.server)
        this._serialized = vals.join("")
    }

    toString(opt?: { legacy: boolean, formatFull: boolean }) {
        if (!opt) return this._serialized
        let t, n
        let a = opt.legacy && "c.us" === this.server ? "@s.whatsapp.net" : this.server;
        if (opt.formatFull) {
            t = `.${this.agent || 0}`
            n = `:${this.device || 0}`
        } else {
            t = null != this.agent && 0 !== this.agent ? `.${this.agent}` : ''
            n = null != this.device && 0 !== this.device ? `:${this.device}` : ''
        }
        if (opt.formatFull || opt.legacy && "c.us" === this.server)
            return [this.user, t, n, a].join("")

    }
    getSignalAddress() {
        let e = null != this.agent && 0 !== this.agent ? `_${this.agent}` : ""
        let t = null != this.device && 0 !== this.device ? `:${this.device}` : "";
        return [this.user, e, t].join("")
    }
    equals(t) {
        return t instanceof Wid && this.toString() === t.toString()
    }
    isLessThan(t) {
        return t instanceof Wid && this.toString() < t.toString()
    }
    isGreaterThan(t) {
        return t instanceof Wid && this.toString() > t.toString()
    }
    isUser() {
        return "c.us" === this.server
    }
    isBroadcast() {
        return "broadcast" === this.server
    }
    isOfficialBizAccount() {
        return this.toString() === Constant.OFFICIAL_BIZ_WID
    }
    isGroup() {
        return "g.us" === this.server
    }
    isServer() {
        return "server" === this.user && "c.us" === this.server
    }
    isPSA() {
        return "0" === this.user && "c.us" === this.server
    }
    isStatusV3() {
        return "status" === this.user && "broadcast" === this.server
    }
    toJSON() {
        return this.toString()
    }
    static isXWid(t: string, n) {
        return WidHelper.isString(n) ?
            n.split("@")[1] === t :
            n instanceof Wid ?
                n.server === t :
                false //(void 0 !== n && LOG(2)(s(), String(n)), !1)
    }
    static isUser(t) {
        return Wid.isXWid("c.us", t)
    }
    static isBroadcast(t) {
        return Wid.isXWid("broadcast", t)
    }
    static isGroup(t) {
        return Wid.isXWid("g.us", t)
    }
    static isGroupCall(t) {
        return Wid.isXWid("call", t)
    }
    static isWid(t) {
        return WidHelper.isString(t) ? regex.test(t) : t instanceof Wid
    }
    static canBeWid(e) {
        return !e || !l.includes(e)
    }
    static isServer(t) {
        return WidHelper.isString(t) ? t.toLowerCase() === Constant.SERVER_WID : t instanceof Wid && t.isServer()
    }
    static isPSA(t) {
        return WidHelper.isString(t) ? t.toLowerCase() === Constant.PSA_WID : t instanceof Wid && t.isPSA()
    }
    static isStatusV3(t) {
        return WidHelper.isString(t) ? t.toLowerCase() === Constant.STATUS_WID : t instanceof Wid && t.isStatusV3()
    }
    static isOfficialBizAccount(t) {
        return WidHelper.isString(t) ? t.toLowerCase() === Constant.OFFICIAL_BIZ_WID : t instanceof Wid && t.isOfficialBizAccount()
    }
    static user(t) {
        return WidHelper.isString(t) ? t.split("@")[0] : t instanceof Wid ? t.user : void 0
    }
    static equals(t, n) {
        return t instanceof Wid || n instanceof Wid ? t instanceof Wid && t.equals(n) : t === n
    }
    static isLessThan(t, n) {
        return t instanceof Wid && n instanceof Wid && t.toString() < n.toString()
    }
    static isGreaterThan(t, n) {
        return t instanceof Wid && n instanceof Wid && t.toString() > n.toString()
    }
}