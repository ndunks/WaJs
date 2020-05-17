import * as fs from "fs"
import BinaryBuffer from "../whatsapp/binary/buffer";
import { readNode } from "../whatsapp/binary/reader";
import BufferReader from "../whatsapp/binary/buffer-reader";
import assert from "assert";
import "../whatsapp_pb"
import { WANode } from "../whatsapp/interfaces";

// jspb.Message.deserializeBinaryFromReader()

// console.log(new proto.proto.Message())

const dir = `etc/binary-sample`
/** Message sent after preempt is contain chats */
const files = fs.readdirSync(dir).filter(v => !v.match(/^preempt/))
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
    for (const msg of result[2]) {
        const obj: any = proto.proto.WebMessageInfo.deserializeBinary(msg.child).toObject()
        assert.ok(obj)
        assert.ok(obj.key)
    }
}
