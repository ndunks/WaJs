import { testHelperLoadWa, testHelperSequential } from "./helper";


export default function () {
    return testHelperLoadWa().then(
        wa => {
            return wa.sendTextMessage(
                '6285640992980@c.us',
                `Now is ${new Date().toLocaleString()}`
            )
        }
    )

}
