
import * as fs from "fs"
import BinaryBuffer from "../src/whatsapp/binary/buffer";
import { readNode } from "../src/whatsapp/binary/reader";
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
                if (data.length) {
                    return `${data.constructor.name} (${data.length})`
                } else {
                    return data.constructor.name
                }
            }
            return type
    }
}
describe("Binary", () => {
    it("Read Binary", () => {
        return pending('skip')
        const files = fs.readdirSync(dir).filter(v => !v.match(/^preempt/))
        for (let file of files) {
            const nodeBuffer = fs.readFileSync(`${dir}/${file}`)
            const buf = new BinaryBuffer(nodeBuffer)
            console.log('TEST', file, nodeBuffer.length, buf.size());
            const bufferReader = new BufferReader(buf)
            expect(() => {
                let res = readNode(bufferReader)
                console.log('OK', file, res.tag, res.attr, nodeDataDumper(res.data));
                console.log('------------')
            }).not.toThrow()
        }
    })
    /** First preempt has OK to read */
    it("Read preempt 1", () => {
        //return pending('skip')
        const file = fs.readdirSync(dir).filter(v => v.match(/^preempt/))[0]
        const nodeBuffer = fs.readFileSync(`${dir}/${file}`)
        const buf = new BinaryBuffer(nodeBuffer)
        const bufferReader = new BufferReader(buf)
        let result;
        expect(() => {
            result = readNode(bufferReader)
        }).not.toThrow()
        expect(result.tag).toBe('response')
        expect(result.attr).toBeTruthy()
        expect(result.attr.checksum).toBe('group')
        expect(result.attr.live).toBe('preview')
        // raw data single byte code: 69 (0x45)
        expect(result.data).toBe('raw')

        console.log('OK', nodeDataDumper(result.data));
        console.log(result.data)
        console.log('------------')
    })
    /** second preempt has FAIL to read */
    it("Read preempt 2", () => {
        const file = fs.readdirSync(dir).filter(v => v.match(/^preempt/))[1]
        const nodeBuffer = fs.readFileSync(`${dir}/${file}`)
        const buf = new BinaryBuffer(nodeBuffer)
        const bufferReader = new BufferReader(buf)
        let result;
        expect(() => {
            result = readNode(bufferReader)
        }).not.toThrow()
        expect(result.tag).toBe('response')
        expect(result.attr).toBeTruthy()

    })
})