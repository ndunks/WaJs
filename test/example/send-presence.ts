import { testHelperLoadWa, testHelperSequential } from "../helper/wa-helper";


export default function () {
    return testHelperLoadWa().then(
        wa => {
            return testHelperSequential([
                () => wa.presence('unavailable').then(
                    r => console.log('R', r)
                ),
                //testHelperDisconnectWa()
            ]).then(() => wa)
        }
    )

}
