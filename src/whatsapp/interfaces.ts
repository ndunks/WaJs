import { Message, MessageKey } from "../whatsapp_pb"

export interface WidObj {
    user: string
    server: 'c.us' | 'g.us' | 'broadcast' | string
    agent?: number
    device?: number
}

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
export interface AsyncTagHandler {
    /** Auto assign if sent */
    tag?: string
    sentMessage: String | Buffer
    callback: (this: AsyncTagHandler, message: string | Buffer | any) => void
    /** Logging purpose */
    hint?: string
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

export interface BinAttr {
    add?: string
    type?: string
    [key: string]: string
}

/** Can be encrypted (bin) or not encrypted */
export type WANode = [string, (string | BinAttr | any)?, any?]

export type BinNodeTags = 'response' | 'action' | 'user' | 'chat' | 'message' | 'groups_v2' | 'broadcast' | 'notification' | 'call_log' | 'security' | 'query' | 'error' | 'presence'

/** Binary node after decrypted and parsed */
export interface BinNode extends WANode {
    /** known types */
    0: BinNodeTags
    /** Attributes */
    1: BinAttr
    /** Childs */
    2?: Uint8Array | BinNode[]
}
/** Known response types */
export interface BinAttrResponse extends BinAttr {
    type: 'contacts' | 'chat'
}

export interface BinAttrResponseContacts extends BinAttrResponse {
    type: 'contacts'
    checksum: string
}

export interface BinAttrResponseChat extends BinAttrResponse {
    type: 'chat'
    /** its a number */
    status: string
}

export type BinNodeResponse = BinNode & ['response', BinAttrResponse]
export type BinNodeResponseContacts = BinNodeResponse & [BinAttrResponseContacts, BinNodeUser[]]
export type BinNodeResponseChat = BinNodeResponse & [BinAttrResponseChat, BinNodeChat[]]

export type BinNodeUser = BinNode & ['user', BinAttrUser, undefined]
export type BinNodeChat = BinNode & ['chat', BinAttrChat, undefined]

export type PreemptMessage = BinNodeResponseContacts | BinNodeResponseChat

export interface BinAttrChat extends BinAttr {
    t: string // '1588913596'
    count: string // '0'
    spam: string // 'false'
    jid: string
    modify_tag: string // '481019'
    name: string
}

export interface BinAttrUser extends BinAttr {
    /** pushname */
    notify: string,
    jid: string
}

/** Parsed BinAttrChat */
export interface Chat extends Pick<BinAttrChat, 'name' | 'jid'> {
    t: number
    unread: number
    spam: boolean
    modify_tag: number
    messages?: ChatMessage[]
}

export interface ChatMessage {
    key: MessageKey.AsObject
    recent?: boolean
    direction: 'in' | 'out'
    /** 1: out, 2: sent, 3: read */
    ack?: number
    message: Message.AsObject
}

export interface Contact {
    notify: string
    jid: string
    /** number */
    verify?: number
    short?: string
    vname?: string
    name?: string
    /** first letter */
    index?: string
}

export enum METRIC {
    DEBUG_LOG = 1,
    QUERY_RESUME = 2,
    QUERY_RECEIPT = 3,
    QUERY_MEDIA = 4,
    QUERY_CHAT = 5,
    QUERY_CONTACTS = 6,
    QUERY_MESSAGES = 7,
    PRESENCE = 8,
    PRESENCE_SUBSCRIBE = 9,
    GROUP = 10,
    READ = 11,
    CHAT = 12,
    RECEIVED = 13,
    PIC = 14,
    STATUS = 15,
    MESSAGE = 16,
    QUERY_ACTIONS = 17,
    BLOCK = 18,
    QUERY_GROUP = 19,
    QUERY_PREVIEW = 20,
    QUERY_EMOJI = 21,
    QUERY_MESSAGE_INFO = 22,
    SPAM = 23,
    QUERY_SEARCH = 24,
    QUERY_IDENTITY = 25,
    QUERY_URL = 26,
    PROFILE = 27,
    CONTACT = 28,
    QUERY_VCARD = 29,
    QUERY_STATUS = 30,
    QUERY_STATUS_UPDATE = 31,
    PRIVACY_STATUS = 32,
    QUERY_LIVE_LOCATIONS = 33,
    LIVE_LOCATION = 3,
}
export interface EphemeralFlag {
    /** 1 << 7, */
    ignore?: boolean
    /** 1 << 6, */
    ackRequest?: boolean
    /** 1 << 5, */
    available?: boolean
    /** 1 << 4, */
    notAvailable?: boolean
    /** 1 << 3, */
    expires?: boolean
    /** 1 << 2 */
    skipOffline?: boolean
    unused?: boolean
}
