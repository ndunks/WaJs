import { Message } from "google-protobuf"

export declare class MessageInstance extends Message {
    serializeBinary(): Uint8Array
    toObject(includeInstance?: boolean): {}
}

declare global {
    var proto: {
        proto: { [key: string]: typeof MessageInstance }
    }
}

