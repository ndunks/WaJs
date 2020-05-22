import * as assert from "assert";
import { testHelperLoadWa } from "./helper"

export default function () {
    return testHelperLoadWa().then(
        wa => wa.queryChat().then(
            r => {
                assert.ok(!r, 'Should empty response')
                console.log('QueryChat', r);
            }
        )
    )
}