import { testHelperLoadWa } from "../helper/wa-helper";
import store from "@/store";
import { Color, L } from "@/utils";
import { widHelper } from "@/whatsapp/helper";

export default function () {
    return testHelperLoadWa().then(
        async wa => {

            wa.on('new-user-message', (msg) => {
                L(Color.y('::new-user-message'), msg.key.remotejid, msg.message.conversation)
                // if (msg.message && msg.message.conversation) {
                //     //Auto reply
                //     wa.sendTextMessage(msg.key.remotejid, `You send ${msg.message.conversation}`)
                // }
            })
            const unreads = store.getUnreadChats()
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
            store.dump()
            // send message
            // return wa.sendTextMessage('628997026464@s.whatsapp.net', 'TEST').then(
            //     r => console.log('sendTextMessage', r)
            // )
        }
    )
}