import { testHelperLoadWa } from "./helper";
import { chatList } from "../store";
import { widHelper } from "../whatsapp/helper";

export default function () {
    return testHelperLoadWa().then(
        wa => {
            console.log('CHATS TEST');
            console.log(chatList.filter(c => widHelper.isGroup(c.jid)));

        }
    )
}