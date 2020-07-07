import { WhatsApp, store } from "whatsapp-web-node";
import * as qrcode from 'qrcode-terminal'


let wid = process.argv.find((v, i, a) => i > 0 && a[i - 1] == '--wid');
let msg = process.argv.find((v, i, a) => i > 0 && a[i - 1] == '--msg');

// Default params if not provided
msg = msg || `WaJs Test ${new Date().toLocaleString()}`
wid = wid || '6285726501017@c.us'

const wa = new WhatsApp();

wa.connect().then(
    () => {
        console.log(`Whatsapp: ${store.name} ${store.device}`);
        // last offline 
        wa.presence('unavailable').then(
            r => console.log('Response', r)
        )
    }
).catch(err => console.error(err))

wa.on('qrcode', (qrContent) => {
    console.log('::qrcode please log in');
    qrcode.generate(qrContent, { small: true })
});
