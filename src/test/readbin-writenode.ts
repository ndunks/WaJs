import assert from "assert";
import { BinNode } from "../whatsapp/interfaces";
import { writeNode } from "../whatsapp/binary/writer";
import BinaryOutputStream from "../whatsapp/binary/output-stream";
import { readNode } from "../whatsapp/binary/reader";
import BinaryInputStream from "../whatsapp/binary/input-stream";

const node1: BinNode = [
    'user',
    {
        notify: 'Some 😜 Name',
        verify: '0',
        vname: 'Some 😜 Name',
        jid: '6285726501017@c.us'
    },
    undefined
]
const bos = new BinaryOutputStream()
writeNode(bos, node1)
const buf = bos.toBuffer()
assert.ok(buf)
const bis = new BinaryInputStream(buf)
const node2 = readNode(bis)
assert.deepEqual(node1, node2)

