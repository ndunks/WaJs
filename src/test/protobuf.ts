import "../whatsapp_pb"
import * as assert from "assert";
import { Message } from "google-protobuf";
const plainObj = {
    id: 'AEDF49F7E5FD1F',
    displayname: 'Sample Display Name'
}
const chat = new proto.proto.Chat();
///@ts-ignore
chat.setDisplayname(plainObj.displayname)
///@ts-ignore
chat.setId(plainObj.id)

const bin = chat.serializeBinary()
const chatRead = proto.proto.Chat.deserializeBinary(bin)
const obj = chatRead.toObject() as any

assert.equal(obj.displayname, plainObj.displayname)
assert.equal(obj.id, plainObj.id)
