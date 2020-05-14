import Wid, { WidHelper } from "./wid";

export const CACHE: {
    cache: { [key: string]: Wid }
    delete: Function
} = {
    cache: {},
    delete() {
        CACHE.cache = {}
    }
}

export default class WidFactory {
    static numberToWid(e) {
        return WidFactory.createWid(
            WidHelper.isString(e) && (e.endsWith("@c.us") || e.endsWith("@s.whatsapp.net")) ? e : e + "@c.us")
    }
    static createWid(e: string) {
        if ('undefined' == typeof CACHE[e]) {
            return CACHE[e] = new Wid(e, { intentionallyUsePrivateConstructor: true })
        } else {
            return CACHE[e]
        }
    }
    static createWidFromWidLike(e) {
        return WidFactory.createWid("string" == typeof e ? e : e._serialized)
    }

    static isWidlike(e) {
        return !!e && (!!Wid.isWid(e) || !(!e || "object" != typeof e || !Wid.isWid(e._serialized)))
    }

    static toUserWid(e: Wid) {
        if (!e.isUser())
            throw new Error("asUserWid: wid is not a user wid");

        return null != e.device && 0 !== e.device || null != e.agent && 0 !== e.agent ?
            WidFactory.numberToWid(e.user) : e
    }

    static createDeviceWid(e, t) {
        throw Error("createDeviceWid: invalid call.")
    }

    static createUserWid(e, t) {
        var n = t || "c.us";
        return WidFactory.createWid(`${e}@${n}`)
    }
}