import WhatsAppClient from "./whatsapp/client";

declare global {
    var L: typeof console.log;
    var E: typeof console.error;
}

///@ts-ignore
global.L = console.log
///@ts-ignore
global.E = console.error

const client = new WhatsAppClient();
client.connect().then(
    ws => {
        console.log('Connected to whatsapp');

    }
).catch(err => console.error(err))
