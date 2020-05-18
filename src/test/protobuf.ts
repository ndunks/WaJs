import * as assert from "assert";
import { Chat } from "../whatsapp_pb";

const plainObj = {
    id: 'AEDF49F7E5FD1F',
    displayname: 'Sample Display Name'
}

const chat = new Chat();
chat.setDisplayname(plainObj.displayname)
chat.setId(plainObj.id)
const bin = chat.serializeBinary()
const chatRead = Chat.deserializeBinary(bin)
const obj = chatRead.toObject()
assert.equal(obj.displayname, plainObj.displayname)
assert.equal(obj.id, plainObj.id)
