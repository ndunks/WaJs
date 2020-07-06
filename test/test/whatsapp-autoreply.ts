import { testHelperLoadWa, testHelperSequential } from "./helper";
import store from "../store";


export default function () {
    return testHelperLoadWa().then(
        wa => {

            wa.on('chats-loaded', () => {
                console.log('::chats-loaded:', store.getUnreadChats().length)
                store.getUnreadChats().forEach(
                    v => {
                        const lastMessage = v.getLastInMessage().message.conversation
                        console.log(v.jid, lastMessage);
                        wa.markAllRead(v).then(
                            () => {
                                // Auto reply
                                wa.sendTextMessage(v.jid, `Thanks for sending me *${lastMessage}*`)
                            }
                        )
                    }
                )
            })

            wa.on('new-user-message', (msg) => {
                console.log('::new-user-message', msg.key.remotejid, msg.message.conversation)
                wa.markRead(msg.key.remotejid, msg.key.id, 1).then(
                    () => {
                        // Auto reply
                        wa.sendTextMessage(msg.key.remotejid, `Thanks for sending me *${msg.message && msg.message.conversation}*`)
                    }
                )
            })
        }
    )

}
