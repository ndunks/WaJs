import { testHelperLoadWa } from "./helper";

export default function () {
    return testHelperLoadWa().then(
        wa => {
            console.log('CHATS TEST');
            //console.log(chatList.filter(c => widHelper.isGroup(c.jid)));

        }
    )
}