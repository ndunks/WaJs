import * as fs from "fs"
import { readNode } from "@/whatsapp/binary/reader";
import assert from "assert";
import { WANode } from "@/whatsapp/interfaces";
import BinaryInputStream from "@/whatsapp/binary/input-stream";
import WhatsApp from "@/whatsapp";
import store from "@/store";

export default function () {
    const wa = new WhatsApp()
    const dir = `etc/binary-sample`
    /** Message sent after preempt is contain chats */
    let addlastLength = 0;
    const files = fs.readdirSync(dir).filter(v => v.match(/^\d{10}-\d{2}$/))
    for (const file of files) {
        const buf = fs.readFileSync(`${dir}/${file}`)
        const bufferReader = new BinaryInputStream(buf)
        let result: WANode;

        assert.doesNotThrow(() => {
            result = readNode(bufferReader)
        })

        assert.equal(result[0], 'action')
        assert.ok(result[1])
        assert.strictEqual(Array.isArray(result[2]), true)
        let res;
        assert.doesNotThrow(() => {
            res = wa.binaryHandle_action(result[1], result[2])
        })
        console.log('add', result[1].add, res)
        if (result[1].add == 'last') {
            addlastLength = result[2].length
            console.log('last len', result[2].length)
        }
        //break;
    }
    console.log('unread', store.getUnreadChats().length)
}