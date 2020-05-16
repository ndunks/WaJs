import * as qrcode from 'qrcode-terminal'
import Client from '../client';
import { WhatsAppServerMsgConn, CmdInitResponse } from '../interfaces';

function generateQRCode(serverId: string, publicKey: Buffer, clientId: string) {
    const qrContent = [
        serverId, publicKey.toString('base64'), clientId
    ].join(',')
    qrcode.generate(qrContent, { small: true })
}

export default function authLoginQRCode(this: Client, ref: string, ttl: number) {
    let timer;
    return new Promise<WhatsAppServerMsgConn>((resolve, reject) => {
        // Wait Conn message from server
        this.onReady = (info, err) => {
            clearTimeout(timer);
            this.onReady = null;
            (err ? reject(err) : resolve(info))
        }
        const checker = () => {
            console.log('Refreshing QR Code..')
            this.ws.sendCmd<CmdInitResponse>('admin', 'Conn', 'reref').then(
                response => {
                    switch (response.status) {
                        case 429:
                            reject('QRCode timeout')
                            break
                        case 200:
                            generateQRCode(response.ref,
                                this.config.keys.publicKey,
                                this.config.clientId)
                            timer = setTimeout(checker, ttl)
                            break;
                        case 304:
                            L('Not yet..')
                            timer = setTimeout(checker, 3000)
                            break;
                        default:
                            L('QRCode ref Unknown', response)
                            reject('QRCode ref Unknown')
                            break
                    }
                }
            ).catch(reject)
        }

        console.log('Please Login..')
        generateQRCode(ref,
            this.config.keys.publicKey,
            this.config.clientId)
        timer = setTimeout(checker, ttl)
    })
}

