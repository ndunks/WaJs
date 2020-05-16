import Client from "../client"
import { WhatsAppServerMsgConn } from "../interfaces"

export default function authRestoreTakeOver(this: Client, ref: string, ttl: number) {
    return new Promise<WhatsAppServerMsgConn>((resolve, reject) => {
        this.onReady = (info, err) => {
            this.onReady = null
            err ? reject(err) : resolve(info)
        }
        this.ws.sendCmd('admin', 'login',
            this.config.tokens.client,
            this.config.tokens.server,
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
        })
    })
}