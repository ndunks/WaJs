import { testHelperLoadWa, testHelperSequential, testHelperDisconnectWa } from "./helper";

testHelperLoadWa().then(
    wa => {
        testHelperSequential([
            wa.presence('available').then(
                r => console.log('R', r)
            ),
            //testHelperDisconnectWa()
        ])
    }
)