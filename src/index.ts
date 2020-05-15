import WhatsApp from "./whatsapp";

declare global {
    var L: typeof console.log;
    var E: typeof console.error;
}

///@ts-ignore
global.L = console.log
///@ts-ignore
global.E = console.error

const wa = new WhatsApp();
wa.connect().then(
    info => {
        console.log('Connected to whatsapp:', info.pushname, info.phone);
        wa.getContacts().then(
            contacts => {
                console.log('Contacts', contacts)
            }
        )
    }
).catch(err => console.error(err))
wa.on('disconnect', function () {
    L('GOT DISCONNECT', arguments)
})