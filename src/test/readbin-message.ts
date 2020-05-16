import * as fs from "fs"
import BinaryBuffer from "../whatsapp/binary/buffer";
import { readNode } from "../whatsapp/binary/reader";
import BufferReader from "../whatsapp/binary/buffer-reader";
import assert from "assert";
import "../whatsapp_pb"

// jspb.Message.deserializeBinaryFromReader()

// console.log(new proto.proto.Message())

const dir = `etc/binary-sample`
/** Message sent after preempt is contain chats */
const files = fs.readdirSync(dir).filter(v => !v.match(/^preempt/))
for (const file of files) {
    const nodeBuffer = fs.readFileSync(`${dir}/${file}`)
    const buf = new BinaryBuffer(nodeBuffer)
    const bufferReader = new BufferReader(buf)
    let result;

    assert.doesNotThrow(() => {
        result = readNode(bufferReader)
    })

    assert.equal(result.tag, 'action')
    assert.ok(result.attr)
    assert.strictEqual(Array.isArray(result.child), true)
    for (const msg of result.child) {
        const obj: any = proto.proto.WebMessageInfo.deserializeBinary(msg.child).toObject()
        assert.ok(obj)
        assert.ok(obj.key)
    }
}
