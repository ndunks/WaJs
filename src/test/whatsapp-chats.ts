import { testHelperLoadWa } from "./helper";
import { chatList } from "../store";

export default function () {
    return testHelperLoadWa().then(
        wa => {
            console.log('CHATS TEST');
            console.log(chatList.filter(c => c.jid.isGroup()));

        }
    )
}