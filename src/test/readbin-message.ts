import * as fs from "fs"
import BinaryBuffer from "../whatsapp/binary/buffer";
import { readNode } from "../whatsapp/binary/reader";
import BufferReader from "../whatsapp/binary/buffer-reader";
import assert from "assert";
import "../whatsapp_pb"
import * as jspb from "google-protobuf";
// jspb.Message.deserializeBinaryFromReader()

// console.log(new proto.proto.Message())
process.exit(0)
const dir = `etc/binary-sample`
/** First preempt */
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
    console.log(result.attr)
    // assert.equal(result.attr.checksum, 'group')
    // assert.equal(result.attr.live, 'preview')
    // // raw data single byte code: 69 (0x45)
    // assert.equal(result.data, 'raw')
    assert.strictEqual(Array.isArray(result.data), true)
    for (const msg of result.data) {
        console.log(msg)
        break
    }
    break
}
