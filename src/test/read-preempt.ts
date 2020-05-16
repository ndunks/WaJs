/*
Try and error

node_modules/.bin/tsc-watch --onFirstSuccess \
'nodemon --delay 0.5 -w dist -e js -x node dist/test/read-preempt.js'

 */
import "./utils"
import * as fs from "fs"
import BinaryBuffer from "@/whatsapp/binary/buffer";
import { readNode } from "@/whatsapp/binary/reader";
import BufferReader from "@/whatsapp/binary/buffer-reader";
import assert from "assert";


const dir = `test/binary-sample`
/** First preempt */
const file = fs.readdirSync(dir).filter(v => v.match(/^preempt/))[0]
const nodeBuffer = fs.readFileSync(`${dir}/${file}`)
const buf = new BinaryBuffer(nodeBuffer)
const bufferReader = new BufferReader(buf)
let result;

assert.doesNotThrow(() => {
    result = readNode(bufferReader)
})

assert.equal(result.tag, 'response')
assert.ok(result.attr)
assert.equal(result.attr.checksum, 'group')
assert.equal(result.attr.live, 'preview')
// raw data single byte code: 69 (0x45)
assert.equal(result.data, 'raw')

console.log('OK', result.data);

