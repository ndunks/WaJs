import { testHelperLoadWa } from "../helper/wa-helper";

let wid = process.argv.find((v, i, a) => i > 0 && a[i - 1] == '--wid');
let msg = process.argv.find((v, i, a) => i > 0 && a[i - 1] == '--msg');

// Default params if not provided
msg = msg || `WaJs Test ${new Date().toLocaleString()}`
wid = wid || '6285726501017@c.us'

export default function () {

    return testHelperLoadWa().then(
        wa => {
            console.log(`WA READY. Sending ${msg} to ${wid}`);
            return wa.sendTextMessage(wid, msg)
        }
    )

}
