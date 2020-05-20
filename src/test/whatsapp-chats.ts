import { testHelperLoadWa } from "./helper";
import store from "../store";
import { Color } from "../utils";

export default function () {
    return testHelperLoadWa().then(
        wa => {
            // console.log(Color.b('>> UNREADS <<'));
            // const unreads = store.getUnreadChats().forEach(
            //     c => {
            //         console.log(Color.m(c.jid), Color.y(c.name))
            //         // const idx = c.messages.length - c.unread
            //         // if (idx < 0) {
            //         //     console.log(Color.r('No MSG'), idx)
            //         // } else {
            //         //     console.log(c.messages.slice(idx))
            //         // }
            //     }
            // )
            // send message
            wa.sendTextMessage('6285726501018@s.whatsapp.net', 'Test').then(
                r => console.log('sendTextMessage', r)
            )


            //store.dump()
        }
    )
}