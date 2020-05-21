import assert from "assert";
import { BinNode } from "../whatsapp/interfaces";
import { writeNode } from "../whatsapp/binary/writer";
import BinaryOutputStream from "../whatsapp/binary/output-stream";
import { readNode } from "../whatsapp/binary/reader";
import BinaryInputStream from "../whatsapp/binary/input-stream";

let node1: BinNode = [
    'user',
    {
        notify: 'Some 😜 Name',
        verify: '0',
        vname: 'Some 😜 Name',
        jid: '6285726501017@c.us'
    },
    undefined
]
let bos = new BinaryOutputStream()
writeNode(bos, node1)
let buf = bos.toBuffer()
assert.ok(buf)
let bis = new BinaryInputStream(buf)
let node2 = readNode(bis)
assert.deepEqual(node1, node2)

// query contacts
let node: BinNode = [
    "query",
    { type: "contacts", kind: undefined, epoch: "1" },
    undefined
]
let correctBin = [
    248,    // BinaryTag.LIST_8
    5,      // list size (1 byte )
    68, // singleByteToken 68 = query
    91, // singleByteToken 91 = type
    23, // singleByteToken 23 = contacts
    107, // singleByteToken 107 = epoch
    252,
    1,
    49,
]
bos = new BinaryOutputStream()
writeNode(bos, node)
assert.equal(bos.size, correctBin.length)
let resultBin = Uint8Array.from(bos.buf)
assert.deepEqual(resultBin, Uint8Array.from(correctBin))


// qery chat
node = [
    "query",
    { type: "chat", epoch: "1" },
    undefined
]
correctBin = [
    248,    // BinaryTag.LIST_8
    5,      // list size (1 byte )
    68, //singleByteToken 68 query
    91, //singleByteToken 91 type
    19, //singleByteToken 19 chat
    107, //singleByteToken 107 epoch
    252,
    1,
    49,
]
bos = new BinaryOutputStream()
writeNode(bos, node)
assert.equal(bos.size, correctBin.length)
resultBin = Uint8Array.from(bos.buf)
assert.deepEqual(resultBin, Uint8Array.from(correctBin))


// query status
node = [
    "query",
    { type: "status", epoch: "1" },
    undefined
]
correctBin = [
    248,    // BinaryTag.LIST_8
    5,      // list size (1 byte )
    68, // singleByteToken 68 query
    91, // singleByteToken 91 type
    84, // singleByteToken 84 status
    107, // singleByteToken 107 epoch
    252,
    1,
    49,
]
bos = new BinaryOutputStream()
writeNode(bos, node)
assert.equal(bos.size, correctBin.length)
resultBin = Uint8Array.from(bos.buf)
assert.deepEqual(resultBin, Uint8Array.from(correctBin))


// presence
node = [
    "action",
    {
        "type": "set",
        "epoch": "1"
    },
    [
        [
            "presence",
            {
                "type": "available"
            },
            undefined
        ]
    ]
]
correctBin = [
    248,    // BinaryTag.LIST_8
    6,      // list size (1 byte )
    9, // singleByteToken 9 action
    91, // singleByteToken 91 type
    82, // singleByteToken 82 set
    107, // singleByteToken 107 epoch
    252,
    1,
    49,
    248,
    1,
    248,
    3,
    65, // singleByteToken 65 presence
    91, // singleByteToken 91 type
    14, // singleByteToken 14 available
]
bos = new BinaryOutputStream()
writeNode(bos, node)
assert.equal(bos.size, correctBin.length)
resultBin = Uint8Array.from(bos.buf)
assert.deepEqual(resultBin, Uint8Array.from(correctBin))
