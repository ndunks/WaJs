
export interface AsyncTagHandler {
    /** Auto assign if sent */
    tag?: string
    sentMessage: String | Buffer
    callback: (this: AsyncTagHandler, message: string | Buffer | any) => void
    /** Logging purpose */
    hint?: string
}

export const commandTagHandlers = new Map<String, AsyncTagHandler>()