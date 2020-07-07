import { WhatsApp, store, Color, widHelper } from "whatsapp-web-node";
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
    store.getUnreadChats()
        .forEach(
            c => {
                console.log(Color.m(c.jid), Color.y(c.name))
                const idx = c.messages.length - c.unread
                console.log(Color.b('UNREADS'), c.jid, c.unread, c.messages.length);
                if (idx < 0) {
                    console.log(Color.r('No MSG'), idx)
                } else {
                    if (widHelper.isUser(c.jid)) {
                        wa.markAllRead(c)
                    }

                    // Mark read single message:
                    // c.getUnreads().forEach(
                    //     m => {
                    //         L('unRead', c.jid, m.message.conversation)
                    //         if (widHelper.isUser(c.jid)) {
                    //             wa.markRead(m.key.remotejid, m.key.id).then(
                    //                 r => L('markRead', c.jid, m.key, r)
                    //             )
                    //         }
                    //     }
                    // )

                }
            }
        )
})

