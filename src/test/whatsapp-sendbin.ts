import * as assert from "assert";
import { testHelperLoadWa } from "./helper"

export default function () {
    return testHelperLoadWa().then(
        async wa => wa.client.ws.sendNode(
            ['query', { type: 'chat', epoch: '1' }, undefined],
            wa.client.ws.shortTag()
        ).then(
            r => {
                //assert.ok(!r, 'Should empty response')
                console.log('QueryChat', r);

                return wa.sendTextMessage('628997026464@s.whatsapp.net', 'TEST').then(
                    r => console.log('sendTextMessage', r)
                )
            }
        )

    )
}