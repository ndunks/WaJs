import Constant from "./constant";
import { WidObj } from "./interfaces";

const widRegex = /(?:^([^.:@]+))(?:\.([0-9]{1,2}))?(?:\:([0-9]{1,2}))?@(s\.whatsapp\.net|c\.us|g\.us|broadcast|call|b\.whatsapp\.net)$/i;
const widCanBe = ["name", "short", "notify"];

export const widHelper = {
    serialize(obj: WidObj) {
        let vals = []
        vals.push(obj.user)
        if (obj.agent) {
            if ("c.us" !== obj.server)
                throw new Error(`wid error: wrong server for wid with agent present: ${obj.server}`);
            if (isNaN(obj.agent))
                throw new Error(`wid error: NaN agent: ${obj.agent} wid: ${obj.agent}`);
            if (obj.agent > 255)
                throw new Error(`wid error: agent>255 : ${obj.agent} wid: ${obj.agent}`);

            vals.push(".")
            vals.push(obj.agent)
        }
        if (obj.device) {
            if ("c.us" !== obj.server)
                throw new Error(`wid error: wrong server for wid with device present: ${obj.server}`);
            if (isNaN(obj.device))
                throw new Error(`wid error: NaN device: ${obj.device} wid: ${obj.device}`);
            if (obj.device > 255)
                throw new Error(`wid error: device>255 : ${obj.device} wid: ${obj.device}`);
            if (obj.device)
                vals.push(":")
            vals.push(obj.device)
        }
        vals.push("@")
        vals.push(obj.server)
        return vals.join("")
    },
    parse(str: string) {
        let match = str.match(widRegex);
        if (!match)
            throw new Error("wid error: invalid wid: ".concat(str));

        const obj: WidObj = {
            user: match[1],
            server: match[4].toLowerCase()
        }
        if (obj.server == 's.whatsapp.net') {
            obj.server = "c.us"
        }
        let tmpAgent = match[2], tmpDevice = match[3]
        if (tmpAgent) {
            if ("c.us" !== obj.server)
                throw new Error(`wid error: wrong server for wid with agent present: ${str}`);
            let f = parseInt(tmpAgent, 10);
            if (isNaN(f))
                throw new Error(`wid error: NaN agent: ${tmpAgent} wid: ${str}`);
            if (f > 255)
                throw new Error(`wid error: agent>255 : ${f} wid: ${str}`);
            obj.agent = f
        }
        if (tmpDevice) {
            if ("c.us" !== obj.server)
                throw new Error(`wid error: wrong server for wid with device present: ${str}`);
            var deviceNum = parseInt(tmpDevice, 10);
            if (isNaN(deviceNum))
                throw new Error(`wid error: NaN device: ${tmpDevice} wid: ${str}`);
            if (deviceNum > 255)
                throw new Error(`wid error: device>255 : ${deviceNum} wid: ${str}`);
            obj.device = deviceNum
        }
        return obj
    },
    isXWid(t: string, n: string) {
        return n.split("@")[1] === t
    },
    isUser(t: string) {
        return widHelper.isXWid("c.us", t)
    },
    isBroadcast(t: string) {
        return widHelper.isXWid("broadcast", t)
    },
    isGroup(t: string) {
        return widHelper.isXWid("g.us", t)
    },
    isGroupCall(t: string) {
        return widHelper.isXWid("call", t)
    },
    isWid(t: string) {
        return widRegex.test(t)
    },
    canBeWid(t: string) {
        return !t || !widCanBe.includes(t)
    },
    isServer(t: string) {
        return t.toLowerCase() === Constant.SERVER_WID
    },
    isPSA(t: string) {
        return t.toLowerCase() === Constant.PSA_WID
    },
    isStatusV3(t: string) {
        return t.toLowerCase() === Constant.STATUS_WID
    },
    isOfficialBizAccount(t: string) {
        return t.toLowerCase() === Constant.OFFICIAL_BIZ_WID
    },
    user(t: string) {
        return t.split("@")[0]
    }
}

