import path from "path";
import fs from "fs";

import { build_dir } from "./helper/path-helper";
import { testHelperDisconnectWa } from "./helper/wa-helper"

/** Pass filter to a single test file by basename. */
let filter = process.argv.find((v, i, a) => i > 0 && a[i - 1] == '--filter');
let tests = fs.readdirSync(path.join(build_dir, 'test/test'), 'ascii')
    .map(
        f => path.basename(f, '.js')
    ).filter(
        f => !filter || f == filter
    )

if (!tests.length) {
    console.log("No test to run");
    process.exit(1);
}

(async function () {
    for (let f of tests) {
        console.log(`--- ${f} ---`)
        let ret = require(`./test/${f}`).default();
        if (ret instanceof Promise) {
            await ret;
        }
    }
    return testHelperDisconnectWa();
})()
