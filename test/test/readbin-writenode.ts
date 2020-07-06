import assert from "assert";
import crypto from "crypto";
import { BinNode } from "../whatsapp/interfaces";
import { writeNode } from "../whatsapp/binary/writer";
import BinaryOutputStream from "../whatsapp/binary/output-stream";
import { readNode } from "../whatsapp/binary/reader";
import BinaryInputStream from "../whatsapp/binary/input-stream";
import { configLoad } from "../utils";
import { AESEncrypt, AESDecrypt, hmacDecrypt } from "../whatsapp/secure";

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
const authFile = '.auth';
const cfg = configLoad(authFile)

function correction(node: BinNode, correctBin: number[], hint: string, encryptedLength) {
    let bos = new BinaryOutputStream()
    writeNode(bos, node)
    assert.equal(bos.size, correctBin.length, `${hint}: length missmatch`)
    assert.deepEqual(bos.buf, Buffer.from(correctBin), `${hint}: Node buffer differ`)

    // Encrypt decrypt
    let encrypted = AESEncrypt(cfg.aesKey, bos.buf)
    assert.deepEqual(encrypted.length, encryptedLength)
    assert.notDeepEqual(encrypted, bos.buf)
    let decrypted = AESDecrypt(cfg.aesKey, encrypted.slice(0, 16), encrypted.slice(16))
    assert.deepEqual(bos.buf, decrypted)
    const hmac = crypto.createHmac('sha256', cfg.macKey).update(encrypted).digest()
    let hmacEnrypted = Buffer.concat([hmac, encrypted])
    assert.equal(hmacEnrypted.length, encryptedLength + hmac.length)
    let revert = hmacDecrypt(cfg.aesKey,cfg.macKey, hmacEnrypted )
    assert.deepEqual(revert, bos.buf)
}


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
correction(node, correctBin, 'contacts', 32)


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
correction(node, correctBin, 'chat', 32)


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
correction(node, correctBin, 'status', 32)


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
correction(node, correctBin, 'presence', 48)
