interface TagHandler {
    message: String | Buffer
    resolve: Function
    reject: Function
    /** Logging purpose */
    hint?: string
}

const commandTagHandlers = new Map<String, TagHandler>()

export { commandTagHandlers }