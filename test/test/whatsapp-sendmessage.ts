import { testHelperLoadWa, testHelperSequential } from "./helper";


export default function () {
    return testHelperLoadWa().then(
        wa => {
            console.log('WA READY. Sending message\n');
            return wa.sendTextMessage(
                '6282313439393@c.us',
                `TEST COBA _KIRIM WA_\nNow is ${new Date().toLocaleString()}`
            )
        }
    )

}
