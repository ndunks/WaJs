import WASocket from "./wa-socket";

export interface AsyncTagHandler {
    message: String | Buffer
    callback: (this: WASocket, message: string | Buffer | any) => void
    /** Logging purpose */
    hint?: string
}

export const commandTagHandlers = new Map<String, AsyncTagHandler>()