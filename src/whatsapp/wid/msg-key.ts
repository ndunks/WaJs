import { me } from "../../store"
import { widHelper } from "../helper"

function l() {
    return "MsgKey case error:"
}

function f() {
    return "MsgKey error: id is already a MsgKey"
}

export default class MsgKey {
    fromMe
    remote
    id
    self
    participant
    private _serialized: string

    constructor(param: {
        id: string | MsgKey
        fromMe: boolean
        from?: string
        to?: string
        remote?: string
        participant?: any
    }) {
        if (!param)
            throw new Error("MsgKey error: obj is null/undefined");

        let obj;
        if (param.id instanceof MsgKey) {
            obj = param.id
            L(f())
        } else {
            obj = param
        }

        var n
        let i
        let o
        let d
        let u
        let p
        let g
        let to = obj.from && obj.to && obj.id
        let remote = obj.fromMe && obj.remote && obj.id;

        if (!me)
            throw new Error("MsgKey error: Conn.me is undefined");
        if (to && remote)
            throw new Error("MsgKey error: unclear which constructor to use: " + JSON.stringify(obj));
        if (!to && !remote)
            throw new Error("MsgKey error: don't have a matching constructor " + JSON.stringify(obj));
        if (to) {
            let v = obj, n = v.from,
                i = v.to,
                o = v.id,
                d = v.participant,
                u = v.selfDir;
            // if (
            //     !(n instanceof Wid) || !(i instanceof Wid) || d && !(d instanceof Wid))
            //     throw new Error("MsgKey error: something's not a wid: from:".concat(String(n), " to:").concat(String(i), " p:").concat(String(d)));
            u = (n == i) ? u : void 0,
                (n == i) && (n == me) ? (p = "out" === u,
                    g = me) : (n == me) ? (p = !0,
                        g = i) : (i == me) ? (p = !1,
                            g = n) : (n == i) && (widHelper.isGroup(n) || widHelper.isBroadcast(n)) ? (p = !0,
                                g = n) : L(l(), [n, i, o, me].join()),
                void 0 !== p && (this.fromMe = p),
                g && (this.remote = g),
                o && (this.id = o)
        } else if (remote) {
            let j = obj, p = j.fromMe,
                g = j.remote,
                o = j.id,
                d = j.participan;
            // if (!(g instanceof Wid) || d && !(d instanceof Wid))
            //     throw new Error("MsgKey error: something's not a wid: remote:".concat(String(g), " p:").concat(String(d)));
            (me == g) && (u = p ? "out" : "in"),
                void 0 !== p && (this.fromMe = p),
                g && (this.remote = g),
                o && (this.id = o)
        }
        var y = [this.fromMe, this.remote, this.id];
        if (undefined !== u) {
            this.self = u
            y.push(this.self)
        }

        if (/* (h.supportsFeature(h.F.KEY_PARTICIPANT) || h.supportsFeature(h.F.MD_BACKEND)) &&  */
            undefined !== d) {
            this.participant = d
            y.push(this.participant)
        }

        this._serialized = y.join("_")
    }

    toString() {
        return this._serialized
    }

    clone() {
        return new MsgKey({
            fromMe: this.fromMe,
            remote: this.remote,
            id: this.id,
            participant: this.participant
        })
    }

    equals(t) {
        return t instanceof MsgKey && this.toString() === t.toString()
    }

    fromString(t) {
        let a = msgKeyParse(t)
        let n = a.fromMe
        let i = a.remote
        let r = a.id
        let o = a.participant;
        return new MsgKey({
            fromMe: n,
            remote: i,
            id: r,
            participant: o ? o : undefined
        })
    }
}

// Module id: djfhifiigg: function(e, t, a) {
function msgKeyParse(e: string) {
    if (typeof e !== 'string')
        throw new Error("MsgKey fromString error: str is null or not a string");
    let parts = e.split("_")
    let participant;
    if (parts.length < 3) {
        throw new Error("MsgKey error: cannot create MsgKey from: " + e)
    } else if (4 === parts.length) {
        "out" !== parts[3] && "in" !== parts[3] && (participant = parts[3])
    } else if (5 === parts.length) {
        participant = parts[4]
    }

    return {
        fromMe: "true" === parts[0],
        remote: parts[1],
        id: parts[2],
        participant: participant
    }
}
