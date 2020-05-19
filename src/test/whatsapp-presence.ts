import { testHelperLoadWa } from "./helper";

testHelperLoadWa().then(
    wa => {
        wa.presence('available').then(
            r => console.log('R', r)
        )
    }
)