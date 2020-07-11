import Constant from "./constant";
import { WidObj, METRIC, EphemeralFlag, MediaKeyInfo } from "./interfaces";
import { randomBytes } from "crypto";
import { L } from "../utils";
const widRegex = /(?:^([^.:@]+))(?:\.([0-9]{1,2}))?(?:\:([0-9]{1,2}))?@(s\.whatsapp\.net|c\.us|g\.us|broadcast|call|b\.whatsapp\.net)$/i;
const widCanBe = ["name", "short", "notify"];

export function getMediaKeyInfo(type:string = "image"){
	return MediaKeyInfo[type.toUpperCase()] ? MediaKeyInfo[type.toUpperCase()]:null;
}

export function createMessageId(msgType = "default") {
    let byteMap = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 65, 66, 67, 68, 69, 70]
	let rand_b = {
		image: 16,
		default: 10
	}
    let randBytes = randomBytes(rand_b[msgType] ? rand_b[msgType]:10)
	let res_len = {
		image: 32,
		default: 20
	}

    let result = new Array(res_len[msgType] ? res_len[msgType]:20), randByte, randIdx = 0

    for (let idx = 0; randIdx < randBytes.length; randIdx++, idx += 2) {
        randByte = randBytes[randIdx];
        result[idx] = byteMap[randByte >> 4]
        result[idx + 1] = byteMap[15 & randByte]
    }
    return String.fromCharCode.apply(String, result)
}

export function binaryOptions(metric: METRIC, flagObj: EphemeralFlag = { ignore: true }) {
    const bytes = new Uint8Array(2)
    bytes[0] = metric
    bytes[1] = 0
    if (flagObj.ignore) {
        bytes[1] |= (1 << 7)
    }
    if (flagObj.ackRequest) {
        bytes[1] |= (1 << 6)
    }
    if (flagObj.available) {
        bytes[1] |= (1 << 5)
    }
    if (flagObj.notAvailable) {
        bytes[1] |= (1 << 4)
    }
    if (flagObj.expires) {
        bytes[1] |= (1 << 3)
    }
    if (flagObj.skipOffline) {
        bytes[1] |= (1 << 2)
    }
    if (!bytes[0]) {
        L('Invalid metric', metric, METRIC[metric])
    }
    return bytes
}

export const widHelper = {
    sanitizer(str: string) {
        let obj = widHelper.parse(str);
        if (obj.server == 'c.us') {
            obj.server = 's.whatsapp.net'
        }
        return widHelper.serialize(obj);
    },
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

