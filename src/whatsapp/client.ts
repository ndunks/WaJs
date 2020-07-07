import { randomBytes, createHmac } from "crypto";
import { arch, platform } from "os";
import {
    CmdInitResponse, WhatsAppServerMsg,
    WhatsAppServerMsgConn, WhatsAppServerMsgCmd, WhatsAppServerMsgCmdChallenge, WhatsAppClientConfig, BinNode, BinNodeTags, BinAttr
} from "./interfaces";
import * as fs from 'fs'
import { configLoad, configStore, Color, L, E } from "../utils";
import { generateKeyPair, decryptEncryptionKeys } from "./secure";
import WASocket from "./wa-socket";
import WhatsApp from ".";
import store from "../store";

export default class Client {
    /** This app name */
    clientName = 'WaJs'

    /** Compactible Web WhatsApp Version */
    version = '2.2019.6'

    /** Proto version when this created */
    protoVersion = [0, 17]

    /** Binary protocol version */
    binVersion = 10

    /** Stored Session info */
    config: WhatsAppClientConfig

    /** Collected server command data */
    serverData: {
        [key: string]: any
        Conn?: WhatsAppServerMsgConn
    } = {};

    ws: WASocket
    timeSkew: number
    epochCount = 0
    epoch = 0
	timer = null

    
    /** Internal command handler */
    private serverCmdHandlers = {
        disconnect: (args) => {
            this.wa.emit('disconnect', args.kind)
            if (args.kind == 'replaced') {
                this.wa.emit('replaced')
            }
        },
        challenge: (args: WhatsAppServerMsgCmdChallenge) => {
            L('Handling challenge');
            let data = Buffer.from(args.challenge, 'base64')
            const sign = createHmac('sha256', this.config.macKey).update(data).digest()
            data = Buffer.concat([sign, data])
            return this.ws.sendCmd('admin', 'challenge',
                data.toString('base64'),
                this.config.tokens.server,
                this.config.clientId)
                .then(
                    res => L('Chalenge response', res)
                )
        }
    }

    constructor(private authFile = '.auth', private wa: WhatsApp) {
        if (fs.existsSync(authFile)) {
            this.config = configLoad(this.authFile)
        } else {
            // default config
            this.config = {
                clientId: randomBytes(16).toString('base64'),
                keys: generateKeyPair()
            }
        }
    }

    epochSend(noIncrementEpoch?: boolean) {
        if (0 === this.epochCount)
            this.epoch++
        if (!noIncrementEpoch)
            this.epochCount++

        L('epochSend', this.epochCount, this.epoch)
        return this.epoch.toString()
    }

    epochRecv() {
        if (this.epochCount > 0) {
            this.epochCount--
        } else {
            L('epochRecv zero epochCount')
        }
        L('epochRecv', this.epochCount, this.epoch)
    }

    actionNode(type: string, childs: BinNode[], noIncrementEpoch?: boolean): BinNode {
        return ["action", {
            type: type,
            epoch: this.epochSend(noIncrementEpoch)
        }, childs]
    }

    makeNodeWithEpoch(tag: BinNodeTags, attr?: BinAttr, childs?: BinNode[]): BinNode {

        attr = attr || {}
        attr.epoch = this.epochSend()

        return [tag, attr, childs]
    }

    queryNode(attr?: BinAttr, childs?: BinNode[]) {
        return this.makeNodeWithEpoch("query", attr, childs)
    }

    responseNode(attr?: BinAttr, childs?: BinNode[]) {
        return this.makeNodeWithEpoch("response", attr, childs)
    }

    errorNode(e): BinNode {
        return ["error", {
            code: e.toString(),
            epoch: this.epochSend()
        }, void 0]
    }
	
	connectionChecker = () => new Promise<WhatsAppServerMsgConn>((resolve, reject) => {
		this.ws.sendCmd<CmdInitResponse>('admin', 'Conn', 'reref').then(
			response => { 
				switch (response.status) {
					case 429:
						reject('QRCode timeout')
						break
					case 200:
						const qrContent = [
							response.ref, this.config.keys.publicKey.toString('base64'), this.config.clientId
						].join(',')
						this.wa.emit('qrcode', qrContent);
						
						this.timer = setTimeout(this.connectionChecker, response.ttl || 20000)
						break;
					case 304:
						L('Not yet..')
						this.timer = setTimeout(this.connectionChecker, 3000)
						break;
					default:
						L('QRCode ref Unknown', response)
						reject('QRCode ref Unknown')
						break
				}
			}
		).catch(reject)
	})
	protected onReady = (info: WhatsAppServerMsgConn, err?: string) => new Promise( (resolve, reject) => {
		clearTimeout(this.timer);
		this.onReady = null;
		(err ? reject(err) : resolve(info))
	})
	
    connect = () => new Promise<WhatsAppServerMsgConn> ((resolve, reject) => {
		this.ws = new WASocket(this.wa, this.config)
		
		const onOpen = () => {
			// Swap error listener
			this.wa.removeListener("error", reject)
			// INIT
			// INIT
			this.ws.sendCmd<CmdInitResponse>('admin', 'init',
				this.version.split('.').map(v => parseInt(v)),
				[this.clientName, platform(), arch()],
				this.config.clientId,
				true
			).then(response => {
				if (response.status != 200) {
					L(response)
					reject('Init error: ' + response.status)
					this.close()
				} else if (!response || !response.ref) {
					L(response)
					reject('No server id')
				} else {
					 // Has stored session? restore it.
					 if(this.config.tokens) {
						 
						this.ws.sendCmd('admin', 'login', 
							this.config.tokens.client, this.config.tokens.server,
							this.config.clientId,
							'takeover'
						).then(response => {
							L('restoreSession:', response);
							switch (response.status) {
								case 200:
									return response//must received Conn, nothing todo here
								case 401:
									return reject('Unpaired from the phone')
								case 403:
									if (response.tos) {
										return reject(`Access denied. TOS: ${response.tos} ` +
											`${response.tos >= 2 ? 'YOU HAVE VIOLATED TOS!' : ''}`)
									} else {
										return reject('Access denied')
									}
								case 405:
									return reject('Already logged in')
								case 409:
									return reject('Logged in from another location')
								default:
									return reject('Unhandled restore response: ' + response.status)
							}
						}).catch(err => {
							E('loginRestore:', err)
							if (fs.existsSync(this.authFile)) {
								L('Deleting expired config');
								fs.unlinkSync(this.authFile)
							}
							return this.connectionChecker()
						}) 
					 } else {
						 // Generate qr
						const qrContent = [
							response.ref, this.config.keys.publicKey.toString('base64'), this.config.clientId
						].join(',')
						this.wa.emit('qrcode', qrContent);
						
						this.timer = setTimeout(this.connectionChecker, response.ttl || 20000)
					 }
					
				}
			}).catch(reject)
		}

		// Fail on early error
		this.wa.once("error", reject)
		this.wa.once("open", onOpen)
		this.wa.on("server-message", this.handleServerMessage.bind(this))
	})
	

    private handleWhatsAppConn(info: WhatsAppServerMsgConn) {
        // Got Conn but no handler, ignore it
        if (!this.onReady) {
            store.storeConn(info)
            return
        }
        // On restored session is not contain secret
        if (info.secret) {
            this.config.serverSecret = Buffer.from(info.secret, 'base64');
            const result = decryptEncryptionKeys(this.config.serverSecret, this.config.keys.privateKey)
            this.config.aesKey = result.aesKey
            this.config.macKey = result.macKey
        }

        if (!this.config.aesKey) {
            return this.onReady(null, 'No Encryptions Keys!')
        }
        this.config.tokens = {
            client: info.clientToken,
            server: info.serverToken,
            browser: info.browserToken
        }

        // Save creds
        configStore(this.authFile, this.config)
        store.storeConn(info)
        // call on ready
        this.onReady(info)
    }

    /** Just call it to make looks like normal web whatsapp behaviour */
    async sendInitialQueries() {
        const does = [
            ['queryContacts'],
            ['queryChat'],
            ['queryStatus'],
            ['presence', 'available']
        ]
        for (let doo of does) {
            let func = doo.shift()
            await this.wa[func].apply(this.wa, doo).then(
                res => {
                    L(Color.m('>INITQUERY' + func), res)
                }
            )
        }
    }
    private async handleServerMessage(cmd: WhatsAppServerMsg, params: any[]) {
        switch (cmd) {
            case 'Stream':
            case 'Props':
            case 'Blocklist':
            case 'Presence':
            case 'Msg':
                return this.wa.emit(cmd, params[0])
            case 'Cmd':
                const args = params[0] as WhatsAppServerMsgCmd
                if (this.serverCmdHandlers[args.type]) {
                    this.serverCmdHandlers[args.type](args)
                } else {
                    L('handleServerMessage: UNHANDLED CMD.', cmd, args)
                }
                break;
            case 'Conn':
                this.serverData[cmd] = params[0]
                this.handleWhatsAppConn(params[0])
                break;
            default:
                this.serverData[cmd] = params[0]
                L(Color.r('unhandleServerMessage:'), cmd, params)
                break;
        }
    }

    close() {
        this.ws.close()
    }
}
