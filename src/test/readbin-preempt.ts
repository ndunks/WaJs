import * as fs from "fs"
import BinaryBuffer from "../whatsapp/binary/buffer";
import { readNode } from "../whatsapp/binary/reader";
import BufferReader from "../whatsapp/binary/buffer-reader";
import assert from "assert";


const dir = `etc/binary-sample`
/** First preempt */
const file = `preempt1-no-tag.bin`
const nodeBuffer = fs.readFileSync(`${dir}/${file}`)
const buf = new BinaryBuffer(nodeBuffer)
const bufferReader = new BufferReader(buf)
let result;

assert.doesNotThrow(() => {
    result = readNode(bufferReader)
})

assert.equal(result.tag, 'response')
assert.ok(result.attr)
assert.equal(result.attr.checksum, "E81963B9-B8BA-4711-98DF-4FC1AF912F75")
assert.equal(result.attr.type, "contacts")
// raw data single byte code: 69 (0x45)
assert.equal(Array.isArray(result.child), true)
assert.equal(result.child.length, 902)
