import { WhatsApp, store } from "whatsapp-web-node";
import * as qrcode from 'qrcode-terminal'

const wa = new WhatsApp();

wa.connect().then(
    () => {
        console.log(`Whatsapp: ${store.name} ${store.device}`);
    }
).catch(err => console.error(err))

wa.on('qrcode', (qrContent) => {
    console.log('::qrcode please log in');
    qrcode.generate(qrContent, { small: true })
});

wa.on('chats-loaded', () => {
    console.log('(!) Unread chats: ', store.getUnreadChats().length)
    store.getUnreadChats().forEach(
        v => {
            const lastMessage = v.getLastInMessage().message.conversation
            // Mark All read
            wa.markAllRead(v).then(
                () => handleMessage(v.jid, lastMessage)
            )
        }
    )
})

wa.on('new-user-message', (msg) => {
    console.log('(!) New message', msg.key.remotejid, msg.message.conversation)
    wa.markRead(msg.key.remotejid, msg.key.id, 1).then(
        () => handleMessage(msg.key.remotejid, msg.message && msg.message.conversation)
    )
})
function handleMessage(sender: string, message: string) {
    wa.sendTextMessage(sender, `Thanks for sending me *${message}*`)
}
