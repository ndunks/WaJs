import { testHelperLoadWa, testHelperSequential, testHelperDisconnectWa } from "./helper";
import { chatList, getUnreadChatList } from "../store";

testHelperLoadWa().then(
    wa => {
        return testHelperSequential([
            wa.presence('available').then(
                r => console.log('R', r)
            ),
            //testHelperDisconnectWa()
        ]).then(() => wa)
    }
).then(
    wa => {
        //
        L('chatList', getUnreadChatList())
    }
)