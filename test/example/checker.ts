import { WhatsApp, store } from "whatsapp-web-node";
import * as qrcode from 'qrcode-terminal'
import { existsSync, readFileSync, writeFileSync } from "fs";

let authFile = '.auth.json'
let conf = existsSync(authFile) ? JSON.parse(readFileSync(authFile, 'utf8')) : null;

let wid = process.argv.find((v, i, a) => i > 0 && a[i - 1] == '--wid');

// Default params if not provided
wid = wid || '6285726501017@c.us'

const wa = new WhatsApp(conf);

wa.connect().then(
    (cfg) => {
        console.log(`Whatsapp: ${store.name} ${store.device}`);
        writeFileSync(authFile, JSON.stringify(cfg, null, 2));
    }
).catch(err => console.error(err))

wa.on("chats-loaded", async () => {
    const exist = await wa.queryExist(wid);
    if (!exist) {
        console.log("The number IS NOT using WhatsApp");
    } else {
        console.log("The number is using WhatsApp");
        let pic_url = await wa.queryProfilePicThumb(wid)
        console.log("pic_url:", pic_url);
        // todo: Not work for new number.
        wa.presenceSubscribe(wid);
    }

})

wa.on("Presence", (data) => {
    console.log("GOT PRESENCE", data);
    wa.close();
})

wa.on('qrcode', (qrContent) => {
    console.log('::qrcode please log in');
    qrcode.generate(qrContent, { small: true })
});
