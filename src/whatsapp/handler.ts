interface TagHandler {
    message: String | Buffer,
    resolve: Function,
    reject: Function
}

const commandTagHandlers = new Map<String, TagHandler>()

export { commandTagHandlers }