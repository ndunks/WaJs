import { readFileSync, writeFileSync } from "fs";
import { WhatsAppClientConfig } from "./whatsapp/interfaces"

///@ts-ignore
global.L = console.log
///@ts-ignore
global.E = console.error


function configLoad(file: string) {
    const obj = JSON.parse(readFileSync(file, 'utf8'))
    const cfg: WhatsAppClientConfig = Object.assign({}, obj)
    cfg.serverSecret = Buffer.from(obj.serverSecret, 'base64')
    cfg.aesKey = Buffer.from(obj.aesKey, 'base64')
    cfg.macKey = Buffer.from(obj.macKey, 'base64')
    Object.keys(obj.keys).forEach(
        k => cfg.keys[k] = Buffer.from(obj.keys[k], 'base64')
    )
    return cfg
}

function configStore(file: string, cfg: WhatsAppClientConfig) {
    const obj: any = Object.assign({}, cfg)
    obj.serverSecret = cfg.serverSecret.toString('base64')
    obj.aesKey = cfg.aesKey.toString('base64')
    obj.macKey = cfg.macKey.toString('base64')
    Object.keys(cfg.keys).forEach(
        k => obj.keys[k] = cfg.keys[k].toString('base64')
    )
    return writeFileSync(file, JSON.stringify(obj, null, 2))
}

const Color = {
    c(s: string) { return `\x1b[36m${s}\x1b[0m` },
    m(s: string) { return `\x1b[35m${s}\x1b[0m` },
    y(s: string) { return `\x1b[33m${s}\x1b[0m` },
    r(s: string) { return `\x1b[31m${s}\x1b[0m` },
    g(s: string) { return `\x1b[32m${s}\x1b[0m` },
    b(s: string) { return `\x1b[34m${s}\x1b[0m` },
    w(s: string) { return `\x1b[37m${s}\x1b[0m` },
}
export { configStore, configLoad, Color }