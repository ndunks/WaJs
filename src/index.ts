import WhatsAppClient from "./whatsapp/client";

const client = new WhatsAppClient();
client.connect().then(
    ws => {
        console.log('Connected to whatsapp');

    }
).catch(err => console.error(err))