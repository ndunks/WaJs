import assert from "assert";
import { BinNode } from "../whatsapp/interfaces";
import WidFactory from "../whatsapp/wid/wid-factory";
import { writeNode } from "../whatsapp/binary/writer";
import BinaryOutputStream from "../whatsapp/binary/output-stream";
import { BinaryReader } from "google-protobuf";
import { readNode } from "../whatsapp/binary/reader";
import BufferReader from "../whatsapp/binary/buffer-reader";
import BinaryBuffer from "../whatsapp/binary/buffer";

const node1: BinNode = [
    'user',
    {
        notify: 'Some Name',
        verify: '0',
        vname: 'Some Name',
        jid: WidFactory.createWid('6285726501017@c.us')
    },
    undefined
]
const bos = new BinaryOutputStream()
writeNode(bos, node1)
const buf = bos.toBuffer()
assert.ok(buf)
const bis = new BinaryBuffer(buf)
const node2 = readNode(new BufferReader(bis))
assert.deepEqual(node1, node2)

