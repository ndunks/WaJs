function base64ObjectToBuffer(obj) {
    Object.keys(obj).forEach(
        k => {
            if (typeof obj[k] == 'string') {
                obj[k] = Buffer.from(obj[k], 'base64')
            } else if (typeof obj[k] == 'object') {
                base64ObjectToBuffer(obj[k])
            }
        }
    )
    return obj
}
function bufferObjectToBase64(obj) {
    Object.keys(obj).forEach(
        k => {
            if (obj[k] instanceof Buffer) {
                obj[k] = obj[k].toString('base64')
            } else if (typeof obj[k] == 'object') {
                bufferObjectToBase64(obj[k])
            }
        }
    )
    return obj
}

export { bufferObjectToBase64, base64ObjectToBuffer }