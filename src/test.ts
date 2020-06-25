import { testHelperSequential, testHelperDisconnectWa } from "./test/helper"

//import "./test/protobuf"
//import "./test/readbin-preempt"
//import "./test/readbin-message"
//import "./test/readbin-writenode"
testHelperSequential([
    //require("./test/whatsapp-sendbin").default,
    //require("./test/whatsapp-presence").default,
    //require("./test/whatsapp-chats").default,
    require("./test/whatsapp-sendmessage").default,
]).then(
    (stats) => {
        if (stats.fail) {
            console.log('WhatsApp Test', stats)
        }
        setTimeout(() => testHelperDisconnectWa(), 2000)
    }
)
