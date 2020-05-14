import { readNode } from "../src/whatsapp/binary/reader";
import * as fs from "fs"
import BinaryBuffer from "../src/whatsapp/binary/buffer";

describe("Binary", () => {
    it("Read Node", () => {
        const dir = `${__dirname}/binary-sample`
        const files = fs.readdirSync(dir)
        for (let file of files) {
            const buf = new BinaryBuffer(fs.readFileSync(`${dir}/${file}`))
            let res = readNode(buf)
            console.log(res);
            
            break;
        }
    })
})