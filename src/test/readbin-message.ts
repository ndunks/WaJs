import * as fs from "fs"
import BinaryBuffer from "../whatsapp/binary/buffer";
import { readNode } from "../whatsapp/binary/reader";
import BufferReader from "../whatsapp/binary/buffer-reader";
import assert from "assert";
import "../whatsapp_pb"
import { WANode } from "../whatsapp/interfaces";
import { getRecentChats, dumpChats } from "../store";
import { handleActionMsg } from "../whatsapp/parser";



const dir = `etc/binary-sample`
/** Message sent after preempt is contain chats */
let addlastLength = 0;
const files = fs.readdirSync(dir).filter(v => v.match(/^\d{10}-\d{2}$/))
for (const file of files) {
    const nodeBuffer = fs.readFileSync(`${dir}/${file}`)
    const buf = new BinaryBuffer(nodeBuffer)
    const bufferReader = new BufferReader(buf)
    let result: WANode;

    assert.doesNotThrow(() => {
        result = readNode(bufferReader)
    })

    assert.equal(result[0], 'action')
    assert.ok(result[1])
    assert.strictEqual(Array.isArray(result[2]), true)
    let res;
    assert.doesNotThrow(() => {
        res = handleActionMsg(result[1], result[2])
    })
    L('add', result[1].add, res)
    if (result[1].add == 'last') {
        addlastLength += result[2].length
    }
    //break;
}
dumpChats()
//const recents = getRecentChats()
//assert.equal(addlastLength, recents.length)
// recents.slice(0, 10).forEach(
//     m => console.log(m.msg.key, m.msg.message)
// )
//fs.writeFileSync('tmp/chats.json', JSON.stringify(chats, null, 2))