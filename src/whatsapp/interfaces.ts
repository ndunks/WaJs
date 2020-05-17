
export interface WhatsAppClientConfig {
    /** 16 Byte ID Auto Generated */
    clientId: string
    /** base64 secret from server contains encrypted aesKey and macKey */
    serverSecret?: Buffer
    /** Encrypt decrypt AES */
    aesKey?: Buffer
    /** HMAC based key to sign/verify */
    macKey?: Buffer
    /** Our key, auto generated */
    keys: {
        /** 32 byte */
        secretKey: Buffer
        privateKey: Buffer
        publicKey: Buffer
    }
    /** Tokens from server, to relogin session */
    tokens?: {
        client: string
        server: string
        browser: string
    }
}

export type WhatsAppCmdType = 'admin' | 'query' | string
export type WhatsAppCmdAction = 'init' | 'Conn' | 'login' | 'challenge' | string
export type WhatsAppServerMsg = 'Conn' | 'Blocklist' | 'Stream' | 'Props' | 'Cmd' | 'Msg' | 'Presence'
export interface WhatsAppServerMsgCmd {
    type: 'disconnect' | 'challenge' | string
}

export interface WhatsAppServerMsgMsg {
    cmd: 'ack' | string
    id: string          // 3AA55DBD30C9CD2FD815
    ack: number         // 3
    from: string        // 6285726501017@c.us
    to: string          // 628561840781@c.us
    t: number           // 1589358323
    broadcast: string   // status@broadcast
}

export interface WhatsAppServerMsgCmdDisconnect extends WhatsAppServerMsgCmd {
    type: 'disconnect'
    kind: 'replaced'
}

export interface WhatsAppServerMsgCmdChallenge extends WhatsAppServerMsgCmd {
    type: 'challenge'
    /** Base64 challenge */
    challenge: string
}

export interface WhatsAppServerMsgConn {
    /** Battery percentage */
    battery: number
    binVersion: number
    /** used to logout without active WebSocket connection */
    browserToken: string
    /** used to resuming closed sessions aka "Remember me" */
    clientToken: string
    connected: boolean
    features: { KEY_PARTICIPANT: boolean, FLAGS: string }
    is24h: boolean
    isResponse: string
    lc: string
    lg: string
    locales: string
    phone: {
        /** eg: Apple */
        device_manufacturer: string
        /** eg: iPhone 6s */
        device_model: string
        /** eg: 510 */
        mcc: string
        /** eg: 001 */
        mnc: string
        /** eg: undefined */
        os_build_number: string
        /** eg: 13.3 */
        os_version: string
        /** eg: 2.20.42 */
        wa_version: string
    }
    /** Device platform iphone/android */
    platform: string
    /** Charging state */
    plugged: boolean
    /** Protobuf version? */
    protoVersion: [number, number]
    /** Account name */
    pushname: string
    /** ServerID ? */
    ref: string
    secret: string
    /** used to resuming closed sessions aka "Remember me" */
    serverToken: string
    tos: number
    /** Phone number in xxxxx@c.us */
    wid: string
}

export interface CmdInitResponse {
    status: number // 200,
    ref: string     // '1@mewF8U0AheBe2drAw5r0TQK7q+Id5ODcqkiQTyg45TzhQlT9WukYusD1',
    ttl: number    // 20000,
    update: boolean // false,
    curr: string    // '2.2019.6',
    time: number   // 1589285271073
}


/** xxxxxxxx@c.us */
export type PhoneNum = string
export interface DataMsg {
    cmd: 'ack' | 'acks'
    /** Msg id */
    id: string | string[] // '3AA93912230CC6CD0516'
    /** 1: out, 2: received, 3: read */
    ack: number // 1 - 3 ?
    from: PhoneNum
    to: PhoneNum
    /** Unix TS */
    t: number
}
export interface DataMsgSingle extends DataMsg {
    cmd: 'ack'
    id: string
}

export interface DataMsgsMulti extends DataMsg {
    cmd: 'acks'
    id: string[]
}
export type DataMsgTypes = DataMsgSingle | DataMsgsMulti
export interface DataPresence {
    /** WA ID/Phone Number */
    id: string // 6285747168008@c.us
    type: 'unavailable' | 'available' | 'composing'
    /** Unix TS */
    t: number
    deny: boolean
}

export type WANode = [string, { [key: string]: string }, any]