import { equal, ok } from "assert";
import { testHelperLoadWa } from "./helper"

export default function () {
    return testHelperLoadWa().then(
        async wa => {
            return wa.client.ws.sendNode(['query', { type: 'chat', epoch: '1' }, null]).then(
                r => {
                    ok(r, 'Empty response')
                    equal(r.status, 200)
                    console.log('TEST sendBin', r
                    )
                }
            )
        }
    )
}