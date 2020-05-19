import * as fs from "fs"
import { readNode } from "../whatsapp/binary/reader";
import assert from "assert";
import { WANode } from "../whatsapp/interfaces";
import BinaryInputStream from "../whatsapp/binary/input-stream";


const dir = `etc/binary-sample`
const preempts = fs.readdirSync(dir).filter(v => v.match(/^preempt/));
let result: WANode;

/**
 * First preempt
 */
let buf = fs.readFileSync(`${dir}/${preempts[0]}`)
let bufferReader = new BinaryInputStream(buf)

assert.doesNotThrow(() => result = readNode(bufferReader))
assert.equal(result[0], 'response')
assert.ok(result[1])
assert.equal(result[1].checksum, "1BE33034-E32C-40EA-BB66-554B81AF0AE7")
assert.equal(result[1].type, "contacts")
assert.equal(Array.isArray(result[2]), true)
assert.equal(result[2].length, 901)
for (let contact of result[2]) {
    assert.ok(contact[1])
    assert.equal(contact[0], 'user')
}
//CHILD STRUCTURE
assert.deepEqual(result[2][14], [
    'user',
    {
        notify: 'defri reza',
        verify: '0',
        vname: 'defri reza',
        jid: { // class Wid
            user: '62816655404',
            server: 'c.us',
            _serialized: '62816655404@c.us'
        }
    },
    undefined
])
/**
 * Second preempt
 */
buf = fs.readFileSync(`${dir}/${preempts[1]}`)
bufferReader = new BinaryInputStream(buf)
assert.doesNotThrow(() => result = readNode(bufferReader))
assert.equal(result[0], 'response')
assert.ok(result[1])
assert.equal(result[1].status, "992971")
assert.equal(result[1].type, "chat")
assert.equal(Array.isArray(result[2]), true)
assert.equal(result[2].length, 292)
for (let chat of result[2]) {
    assert.ok(chat[1])
    assert.equal(chat[0], 'chat')
}

// CHILD STRUCTURE
assert.deepEqual(result[2][2], [
    'chat',
    {
        t: '1588824994',
        count: '0',
        spam: 'false',
        jid: { // class Wid
            user: '6281230008708',
            server: 'c.us',
            _serialized: '6281230008708@c.us'
        },
        modify_tag: '406232',
        name: 'Ade'
    },
    undefined
])
