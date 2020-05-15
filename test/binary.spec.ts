
import * as fs from "fs"
import BinaryBuffer from "../src/whatsapp/binary/buffer";
import BinaryReader from "../src/whatsapp/binary/reader";
import BufferReader from "../src/whatsapp/binary/buffer-reader";

const dir = `${__dirname}/binary-sample`
function nodeDataDumper(data) {
    const type = typeof data
    switch (type) {
        case 'object':
            if (Array.isArray(data)) {
                return `Array[${data.length}]`
            } else {
                return `Object[${data.constructor.name}]`
            }
        default:
            if (data && data.constructor) {
                return data.constructor
            }
            return type
    }
}
describe("Binary", () => {
    it("Read Binary", () => {
        const files = fs.readdirSync(dir).filter(v => !v.match(/^preempt/))
        for (let file of files) {
            const nodeBuffer = fs.readFileSync(`${dir}/${file}`)
            const buf = new BinaryBuffer(nodeBuffer)
            console.log('TEST', file, nodeBuffer.length, buf.size());
            const bufferReader = new BufferReader(buf)
            const reader = new BinaryReader();
            expect(() => {
                let res = reader.readNode(bufferReader)
                console.log('OK', file, res.tag, res.attr, nodeDataDumper(res.data));
                console.log('------------')
            }).not.toThrow()
        }
    })

    it("Read preempt", () => {
        const files = fs.readdirSync(dir).filter(v => v.match(/^preempt/))
        for (let file of files) {
            const nodeBuffer = fs.readFileSync(`${dir}/${file}`)
            const buf = new BinaryBuffer(nodeBuffer)
            console.log('TEST', file, nodeBuffer.length, buf.size());
            const bufferReader = new BufferReader(buf)
            const reader = new BinaryReader();
            expect(() => {
                let res = reader.readNode(bufferReader)
                console.log('OK', file, res.tag, res.attr, nodeDataDumper(res.data));
                console.log('------------')
            }).not.toThrow()
        }
    })
})