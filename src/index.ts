import WhatsApp from "./whatsapp";
import { Color, L } from "./utils";
import store from "./store";

///@ts-ignore
global.L = console.log
///@ts-ignore
global.E = console.error

const wa = new WhatsApp();
wa.connect().then(
    info => {
        L('Connected to whatsapp:', Color.y(`${store.name} ${store.device}`));
    }
).catch(err => console.error(err))

wa.on('chats-loaded', () => {
    L('::chats-loaded:', store.getUnreadChats().length)
    store.getUnreadChats().forEach(
        v => {
            const lastMessage = v.getLastInMessage().message.conversation
            L(v.jid, lastMessage);
            // wa.markAllRead(v).then(
            //     () => {
            //         // Auto reply
            //         wa.sendTextMessage(v.jid, `Thanks for sending me *${lastMessage}*`)
            //     }
            // )
        }
    )
})

wa.on('new-user-message', (msg) => {
    L(Color.y('::new-user-message'), msg.key.remotejid, msg.message.conversation)
    // wa.markRead(msg.key.remotejid, msg.key.id, 1).then(
    //     () => {
    //         // Auto reply
    //         wa.sendTextMessage(msg.key.remotejid, `Thanks for sending me *${msg.message && msg.message.conversation}*`)
    //     }
    // )
})
wa.on('status-broadcast', (msg) => {
    L(Color.y('::status-broadcast'), msg.key.remotejid, msg.message.conversation)
})
wa.on('new-group-message', (msg) => {
    L(Color.y('::new-group-message'), msg.key.remotejid, msg.message.conversation)
})

wa.on('server-message', (data) => {
    L(Color.m('::'), 'server-message', data)
})

wa.on('Msg', (data) => {
    L(Color.m('::'), 'Msg', data)
})

wa.on('Presence', (data) => {
    L(Color.m('::'), 'Presence', data)
})

wa.on('disconnect', (kind) => {
    L(Color.m('::'), 'disconnect', kind)
})

wa.on('replaced', () => {
    L(Color.m('::'), 'replaced Login in another web whatsapp')
})

wa.on('timeskew', (ts) => {
    L(Color.m('::'), 'timeskew', ts)
})

wa.on('close', (code, reason) => {
    L(Color.m('::'), 'close', code, reason)
})

wa.on('action', (attr, childs) => {
    console.log('::action', childs[0]);
})