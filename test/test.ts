import moduleAlias from "module-alias"

const project_dir = process.cwd();

moduleAlias.addAliases({
    "@": `${project_dir}/build-test/src`,
    "whatsapp_pb": `${project_dir}/etc/whatsapp_pb.js`,
    "../whatsapp_pb": `${project_dir}/etc/whatsapp_pb.js`
})

import { testHelperSequential, testHelperDisconnectWa } from "./test/helper"

let filter = process.argv.find((v, i, a) => i > 0 && a[i - 1] == '--filter');
// const tests = {
//     "protobuf": {  },
//     "readbin-preempt": {  },
//     "readbin-message": {  },
//     "readbin-writenode": {  },
// };

console.log('Filter', filter);
import "./test/protobuf"
import "./test/readbin-preempt"
import "./test/readbin-message"
import "./test/readbin-writenode"
// testHelperSequential([
//     //require("./test/whatsapp-sendbin").default,
//     //require("./test/whatsapp-presence").default,
//     //require("./test/whatsapp-chats").default,
//     require("./test/whatsapp-sendmessage").default,
//     //require("./test/whatsapp-autoreply").default,
// ]).then(
//     (stats) => {
//         if (stats.fail) {
//             console.log('WhatsApp Test', stats)
//         }
//         setTimeout(() => testHelperDisconnectWa(), 2000)
//     }
// )
