import { readFileSync, writeFileSync } from "fs";
import { WhatsAppClientConfig } from "./whatsapp/interfaces"

function configLoad(file: string) {
    const cfg: WhatsAppClientConfig = {} as any
    const obj = JSON.parse(readFileSync(file, 'utf8'))
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

export { configStore, configLoad }