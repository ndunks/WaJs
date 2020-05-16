import * as fs from "fs"
import BinaryBuffer from "../whatsapp/binary/buffer";
import { readNode } from "../whatsapp/binary/reader";
import BufferReader from "../whatsapp/binary/buffer-reader";
import assert from "assert";


const dir = `etc/binary-sample`
const preempts = fs.readdirSync(dir).filter(v => v.match(/^preempt/));
let result;

/**
 * First preempt
 */
let nodeBuffer = fs.readFileSync(`${dir}/${preempts[0]}`)
let buf = new BinaryBuffer(nodeBuffer)
let bufferReader = new BufferReader(buf)

assert.doesNotThrow(() => result = readNode(bufferReader))
assert.equal(result.tag, 'response')
assert.ok(result.attr)
assert.equal(result.attr.checksum, "1BE33034-E32C-40EA-BB66-554B81AF0AE7")
assert.equal(result.attr.type, "contacts")
assert.equal(Array.isArray(result.child), true)
assert.equal(result.child.length, 901)
for (let contact of result.child) {
    assert.ok(contact.attr)
    assert.equal(contact.tag, 'user')
}
//CHILD STRUCTURE
assert.deepEqual(result.child[14], {
    tag: 'user',
    attr: {
        notify: 'defri reza',
        verify: '0',
        vname: 'defri reza',
        jid: { // class Wid
            user: '62816655404',
            server: 'c.us',
            _serialized: '62816655404@c.us'
        }
    }
})
/**
 * Second preempt
 */
nodeBuffer = fs.readFileSync(`${dir}/${preempts[1]}`)
buf = new BinaryBuffer(nodeBuffer)
bufferReader = new BufferReader(buf)
assert.doesNotThrow(() => result = readNode(bufferReader))
assert.equal(result.tag, 'response')
assert.ok(result.attr)
assert.equal(result.attr.status, "992971")
assert.equal(result.attr.type, "chat")
assert.equal(Array.isArray(result.child), true)
assert.equal(result.child.length, 292)
for (let chat of result.child) {
    assert.ok(chat.attr)
    assert.equal(chat.tag, 'chat')
}

// CHILD STRUCTURE
assert.deepEqual(result.child[2], {
    tag: 'chat',
    attr: {
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
    }
})
