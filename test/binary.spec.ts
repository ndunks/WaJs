
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
                return `Object[${data.prototype.constructor.name}]`
            }
        default:
            return type
            break;
    }
}
describe("Binary", () => {
    it("Read Small", () => {
        return pending('SKIP')
        const file = '1589356438-38'
        const buf = new BinaryBuffer(fs.readFileSync(`${dir}/${file}`))
        const bufferReader = new BufferReader(buf)
        const reader = new BinaryReader();
        let res = reader.readNode(bufferReader)
        console.log(res);

    })
    it("Read preempt", () => {
        const files = fs.readdirSync(dir).filter(v => v.match(/^preempt.+30$/))
        for (let file of files) {
            const buf = new BinaryBuffer(fs.readFileSync(`${dir}/${file}`))
            const bufferReader = new BufferReader(buf)
            const reader = new BinaryReader();
            let res = reader.readNode(bufferReader)
            console.log(file, res.tag, res.attr, nodeDataDumper(res.data));
        }
    })
})