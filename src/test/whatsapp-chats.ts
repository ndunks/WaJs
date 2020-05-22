import { testHelperLoadWa } from "./helper";
import store from "../store";
import { Color } from "../utils";

export default function () {
    return testHelperLoadWa().then(
        async wa => {

            wa.on('new-user-message', (msg) => {
                L(Color.y('::new-user-message'), msg.key.remotejid, msg.message.conversation)
                if (msg.message && msg.message.conversation) {
                    //Auto reply
                    wa.sendTextMessage(msg.key.remotejid, `You send ${msg.message.conversation}`)
                }
            })

            // console.log(Color.b('>> UNREADS <<'));
            const unreads = store.getUnreadChats().forEach(
                c => {
                    console.log(Color.m(c.jid), Color.y(c.name))
                    const idx = c.messages.length - c.unread
                    if (idx < 0) {
                        console.log(Color.r('No MSG'), idx)
                    } else {
                        console.log(c.messages.slice(idx).map(v => v.message.conversation))
                    }
                    store.dump()
                }
            )
            // send message
            // return wa.sendTextMessage('628997026464@s.whatsapp.net', 'TEST').then(
            //     r => console.log('sendTextMessage', r)
            // )
        }
    )
}