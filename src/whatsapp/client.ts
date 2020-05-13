import WebSocket from "ws";
import { randomBytes, createHmac, createCipheriv, createCipher, createDecipheriv } from "crypto";
import { arch, platform } from "os";
import { CmdInitResponse, WhatsAppCmdType, WhatsAppCmdAction, WhatsAppServerMsg, WhatsAppServerMsgConn, WhatsAppServerMsgCmd, WhatsAppServerMsgCmdChallenge } from "./interfaces";
import * as fs from 'fs'

const Curve = require("curve25519-n")

export default class WhatsAppClient {
    /** This app name */
    clientName = 'WaJs'

    /** Compactible Web WhatsApp Version */
    version = '2.2019.6'

    /** 16 Byte ID Auto Generated */
    clientId: String

    /** Required to relogin session */
    tokens: {
        client: string
        server: string
        browser: string
    }

    /** Our generated secret key */
    clientSecretKey: Buffer

    /** Our generated private key */
    clientPrivateKey: Buffer

    /** Our generated public key */
    clientPublicKey: Buffer

    /** ServerID Obtained from init */
    serverId: string

    /** base64 secret from server */
    serverSecret: string

    /** Used for decrypt/encrypt binary messages from server */
    encKey: Buffer
    /** Validate message from server */
    macKey: Buffer

    serverData: {
        [key: string]: any
        Conn?: WhatsAppServerMsgConn
    } = {};

    ws: WebSocket

    private isQrCodeScanned = false
    private messageConter: number = 0
    private binConter: number = 0
    private startTime: string;
    private cmdStack = new Map<String, { message: String, resolve: Function, reject: Function }>()
    private onReady: (info: WhatsAppServerMsgConn, err?: string) => void

    constructor(private authFile = '.auth') {
        if (fs.existsSync(authFile)) {
            this.restore()
        }

        if ('undefined' == typeof this.clientId) {
            // Generate 16 byte client ID
            console.log('Generating new client id');
            this.clientId = randomBytes(16).toString('base64');
        }
        if ('undefined' == typeof this.clientSecretKey) {
            this.clientSecretKey = randomBytes(32);
            this.clientPrivateKey = Curve.makeSecretKey(Buffer.from(this.clientSecretKey))
            this.clientPublicKey = Curve.derivePublicKey(Buffer.from(this.clientPrivateKey))
        }
        if (!fs.existsSync('log')) {
            fs.mkdirSync('log')
        }
    }

    connect() {
        return new Promise(
            (resolve, reject) => {
                this.startTime = new Date().getTime().toString(36)
                // Connecting to Whatsapp WS server
                this.ws = new WebSocket("wss://web.whatsapp.com/ws", {
                    origin: "https://web.whatsapp.com",
                })

                this.ws.once("error", reject)
                this.ws.once("open", () => {
                    this.ws.removeListener("error", reject)
                    this.ws.on('error', this.onError)
                    this.init().then(resolve).catch(reject)
                })
                this.ws.on("message", this.onMessage)
                this.ws.on("close", this.onClose)
            }
        )
    }

    private init() {
        return this.sendCmd<CmdInitResponse>('admin', 'init',
            this.version.split('.').map(v => parseInt(v)),
            [this.clientName, 'Chrome', arch()],
            this.clientId,
            true).then(
                response => {
                    if (!response || !response.ref) {
                        return Promise.reject('No server id')
                    }
                    if (this.tokens) {
                        return this.restoreSession(response.ref, response.ttl || 20000)
                    } else {
                        return this.waitForLogin(response.ref, response.ttl || 20000)
                    }
                }
            )
    }
    private restoreSession(ref: string, ttl: number) {
        return new Promise((resolve, reject) => {
            this.onReady = (info, err) => err ? reject(err) : resolve(info)
            this.sendCmd('admin', 'login', this.tokens.client, this.tokens.server, this.clientId, 'takeover')
                .then(response => {
                    console.log('restoreSession', response);
                    if (response.status != 200 && fs.existsSync(this.authFile)) {
                        console.log('Deleting expired config');
                        fs.unlinkSync(this.authFile)
                    }
                    switch (response.status) {
                        case 200:
                            return //must received Conn, nothing todo here
                        case 401:
                            //return reject('Unpaired from the phone')
                            return this.waitForLogin(ref, ttl)
                        case 403:
                            return reject('Access denied, check tos field in the JSON: if it equals or greater than 2, you have violated TOS')
                        case 405:
                            return reject('Already logged in')
                        case 409:
                            return reject('Logged in from another location')
                        default:
                            console.log(response)
                            return reject('Unhandled restore response: ' + response.status)
                    }
                })
        })
    }
    private waitForLogin(ref: string, ttl: number) {
        return new Promise((resolve, reject) => {
            let timer;
            // Wait Conn message from server
            this.onReady = (info, err) => err ? reject(err) : resolve(info)
            const checker = () => {
                if (this.isQrCodeScanned) return;
                console.log('Refreshing QR Code..')
                this.sendCmd<CmdInitResponse>('admin', 'Conn', 'reref').then(
                    response => {
                        switch (response.status) {
                            case 429:
                                reject('QRCode timeout')
                                break
                            case 200:
                                this.generateQRCode(response.ref)
                                timer = setTimeout(checker, ttl)
                                break;
                            case 304:
                                timer = setTimeout(checker, 3000)
                                break;
                            default:
                                console.log('QRCode ref Unknown', response)
                                reject('QRCode ref Unknown')
                                break
                        }
                    }
                ).catch(reject)
            }

            console.log('Please Login..')
            this.generateQRCode(ref)
            timer = setTimeout(checker, ttl)
        })
    }

    private generateQRCode(serverId: string) {
        const qrContent = [
            serverId,
            this.clientPublicKey.toString('base64'),
            this.clientId
        ].join(',')
        console.log('QRCode', qrContent);
        require('qrcode-terminal').generate(qrContent, { small: true })
    }
    private restore() {
        const saved = JSON.parse(fs.readFileSync(this.authFile, "ascii"))
        //console.log(this.authFile, options);
        saved.clientSecretKey = Buffer.from(saved.clientSecretKey, 'base64')
        saved.clientPrivateKey = Buffer.from(saved.clientPrivateKey, 'base64')
        saved.clientPublicKey = Buffer.from(saved.clientPublicKey, 'base64')
        Object.keys(saved).forEach(
            k => this[k] = saved[k]
        )
        if (!saved.encKey) {
            this.decryptEncryptionKeys(this.serverSecret, this.clientPrivateKey)
        } else {
            this.encKey = Buffer.from(saved.encKey, 'base64')
            this.macKey = Buffer.from(saved.macKey, 'base64')
        }
    }
    private save() {
        fs.writeFileSync(this.authFile, JSON.stringify({
            clientId: this.clientId,
            tokens: this.tokens,
            serverSecret: this.serverSecret,
            clientSecretKey: this.clientSecretKey.toString('base64'),
            clientPrivateKey: this.clientPrivateKey.toString('base64'),
            clientPublicKey: this.clientPublicKey.toString('base64'),
            encKey: this.encKey.toString('base64'),
            macKey: this.macKey.toString('base64')
        }))
    }
    private clear(){
        
    }
    private onQRCodeScanned(info: WhatsAppServerMsgConn) {
        this.isQrCodeScanned = true
        // On restored session is not contain secret
        if (info.secret) {
            this.decryptEncryptionKeys(info.secret, this.clientPrivateKey)
            this.serverSecret = info.secret
        }
        if (!this.encKey) {
            return this.onReady(null, 'No Encryptions Keys!')
        }
        // Save creds
        this.tokens = {
            client: info.clientToken,
            server: info.serverToken,
            browser: info.browserToken
        }
        this.save();

        // call on ready
        this.onReady(info);
    }

    private decryptEncryptionKeys(secretStr: string, privateKey: Buffer) {
        /*
        * 0-32   PublicKey
        * 32-64  Hmac
        * 64-*   keys
        */
        const secret = Buffer.from(secretStr, 'base64');

        if (secret.length != 144) {
            console.log('Invalid server secret length', secret.length);
        }
        const publicKey = Buffer.from(secret.slice(0, 32))
        const sharedSecret = Curve.deriveSharedSecret(privateKey, publicKey);
        // HKDF implements RFC 5869
        const key = createHmac('sha256', Buffer.alloc(32)).update(sharedSecret).digest()
        let keyStream: Buffer[] = []
        let blockIndex = 1
        let streamLength = 0
        let tmp: Buffer
        let keyBlock: Buffer
        let keyBlockLen = 0
        while (streamLength < 80) {
            tmp = Buffer.alloc(keyBlockLen + 1, keyBlock, 'binary')
            tmp[tmp.byteLength - 1] = blockIndex++
            keyBlock = createHmac('sha256', key).update(tmp).digest()
            keyBlockLen = keyBlock.length
            keyStream.push(keyBlock);
            streamLength += keyBlockLen
        }
        const sharedSecretExpanded = Buffer.concat(keyStream).slice(0, 80)

        // Validate secret
        tmp = Buffer.alloc(secret.byteLength - 32)
        tmp.fill(secret.slice(0, 32))
        tmp.fill(secret.slice(64), 32)
        const hmacValidation = createHmac('sha256', sharedSecretExpanded.slice(32, 64)
        ).update(tmp).digest()

        if (hmacValidation.compare(secret.slice(32, 64)) !== 0) {
            this.close()
            throw new Error('Encryption keys invalid');
        }
        //sharedSecretExpanded.length - 64  + serverSecret.length - 64
        const keysEncrypted = Buffer.concat([
            sharedSecretExpanded.slice(64),
            secret.slice(64)
        ])
        const aesKey = sharedSecretExpanded.slice(0, 32)
        const iv = keysEncrypted.slice(0, 16)
        console.log('aesKey', aesKey.length, aesKey)
        console.log('iv', iv.length, iv)
        const cipher = createDecipheriv('aes-256-cbc', aesKey, iv)
        let bufs = [cipher.update(keysEncrypted.slice(16))]
        bufs.push(cipher.final())
        let keysDecrypted = Buffer.concat(bufs)
        console.log('Key', keysDecrypted.length, keysDecrypted);
        this.encKey = keysDecrypted.slice(0, 32)
        this.macKey = keysDecrypted.slice(32, 64)
    }

    private onMessage = (data: string | Buffer) => {
        const firstCommaPos = data.indexOf(',');
        const tag = data.slice(0, firstCommaPos).toString('ascii')
        const message: string | Buffer = data.slice(firstCommaPos + 1)
        if (typeof message == 'string') {
            //console.log('GotString', data);
            if (tag[0] == 's') {
                //server message
                const params: any[] = JSON.parse(message);
                this.handleServerMessage(params.shift() as any, params);
            } else if (this.cmdStack.has(tag)) {
                const handle = this.cmdStack.get(tag)
                this.cmdStack.delete(tag)
                handle.resolve(JSON.parse(message))
            } else {
                console.log('Unhandled CMD Response', tag, message)
            }
        } else {
            if (this.encKey) {
                let logName = `log/${this.startTime}-${this.binConter++}-${tag}`;
                fs.writeFileSync(`${logName}.enc`, message)
                const decrypted = this.decrypt(message)
                fs.writeFileSync(logName, decrypted)
            }
            else console.log("GotBuffer", data);
        }
    }

    private decrypt(data: Buffer) {
        console.log('Decrypt', data);
        const hmac = createHmac('sha256', this.macKey).update(data.slice(32)).digest()
        const hmacServer = data.slice(0, 32)
        console.log('hmacClient', hmac);
        console.log('hmacServer', hmacServer);
        console.log('is', hmac.compare(hmacServer));
        if (hmac.compare(hmacServer) !== 0) {
            console.log('Hmac Miss Match');
        }
        const cipher = createDecipheriv('aes-256-cbc', this.encKey, data.slice(32, 32 + 16))
        let decs = [cipher.update(data.slice(32 + 16))]
        decs.push(cipher.final())
        cipher.destroy()
        return Buffer.concat(decs)
    }
    private onClose = (code: Number, message: String) => {
        console.log("CLOSED!", code, message);
    }
    private onError = (error: Error) => {
        console.error("ERR!", error);
    }

    sendCmd<RESPONSE = any>(scope: WhatsAppCmdType, cmd: WhatsAppCmdAction, ...args: any): Promise<RESPONSE> {
        return new Promise(
            (resolve, reject) => {
                const tag = `${this.startTime}.${this.messageConter++}`
                const message = `${tag},${JSON.stringify(
                    [scope, cmd, ...args]
                )}`
                console.log('SEND', message);
                this.cmdStack.set(tag, { message, resolve, reject })
                this.ws.send(message)
            }
        )
    }

    private handleServerMessage(cmd: WhatsAppServerMsg, params: any[]) {
        switch (cmd) {
            case 'Stream':
                // Ignore
                return;
            case 'Cmd':
                const args = params[0] as WhatsAppServerMsgCmd
                if (this.serverCmdHandlers[args.type]) {
                    this.serverCmdHandlers[args.type](args)
                } else {
                    console.log('WhatsAppServerCommand', cmd, args)
                }
                break;
            case 'Conn':
                this.serverData[cmd] = params[0]
                this.onQRCodeScanned(params[0])
                break;
            default:
                this.serverData[cmd] = params[0]
                console.log('UnhandledServerMsg', cmd, args)
                break;
        }
    }
    private serverCmdHandlers = {
        challenge: (args: WhatsAppServerMsgCmdChallenge) => {
            console.log('Handling challenge');
            const challenge = Buffer.from(args.challenge, 'base64')
            const signed = this.sign(challenge)
            return this.sendCmd('admin', 'challenge', signed.toString('base64'), this.tokens.server, this.clientId)
                .then(
                    res => console.log('Chalenge response', res)
                )
        }
    }
    sign(data: Buffer) {
        const sign = createHmac('sha256', this.macKey).update(data).digest()
        return Buffer.concat([sign, data])
    }

    state() {

    }
    close() {
        try {
            this.ws.send('goodbye,,["admin","Conn","disconnect"]')
        } catch{ }
        finally {
            if (this.ws && this.ws.readyState == this.ws.OPEN) {
                this.ws.close()
            }
        }
    }
}