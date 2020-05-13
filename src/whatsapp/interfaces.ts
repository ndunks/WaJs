
export type WhatsAppCmdType = 'admin' | ''
export type WhatsAppCmdAction = 'init' | 'Conn' | 'login' | 'challenge' | ''
export type WhatsAppServerMsg = 'Conn' | 'Blocklist' | 'Stream' | 'Props' | 'Cmd' | 'Msg'

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
