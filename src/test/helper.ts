import WhatsApp from "../whatsapp";
import { Color } from "../utils";

let wa_instance: WhatsApp

/** Get WA after initialized */
export function testHelperLoadWa(): Promise<WhatsApp> {
    if (wa_instance) return Promise.resolve(wa_instance)
    const wa = new WhatsApp();
    return new Promise((res, rej) => {
        wa.connect().then(
            info => {
                console.log(Color.g('Test whatsapp:'),
                    info.pushname,
                    info.phone.device_manufacturer,
                    info.phone.device_model
                );
            }
        ).catch(rej)
        wa.on('initialized', () => res(wa_instance = wa))
    })
}