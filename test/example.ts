import path from "path";
import fs from "fs";

import { build_dir } from "./helper/path-helper";

/** Pass filter to a single example file by basename. */
let filter = process.argv.find((v, i, a) => i > 0 && a[i - 1] == '--filter');

let examples = fs.readdirSync(path.join(build_dir, 'test/example'), 'ascii')
    .map(
        f => path.basename(f, '.js')
    ).filter(
        f => !filter || f == filter
    )
if (!filter) {
    console.log('You must pass --filter {example}');
    console.log('  example:\n\t', examples.join("\n\t"));
    process.exit(1);
}

if (!examples.length) {
    console.log("No example match.");
    process.exit(1);
}

require(`./example/${examples[0]}`);

