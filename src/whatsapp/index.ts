import Client from "./client";
import { EventEmitter } from "events";

export default class WhatsApp extends EventEmitter {
    client: Client

    constructor(authFile = '.auth') {
        super()
        this.client = new Client(authFile)
    }
    connect() {
        return this.client.connect().then(
            info => {
                return info
            }
        )
    }
}