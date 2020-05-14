import * as crypto from "crypto";
import * as curve from "curve25519-n";

export function generateKeyPair() {
    const secretKey = crypto.randomBytes(32)
    const privateKey = curve.makeSecretKey(Buffer.from(secretKey))
    const publicKey = curve.derivePublicKey(Buffer.from(privateKey))
    return { secretKey, privateKey, publicKey }
}

export function AESDecrypt(key: Buffer, iv: Buffer, encrypted: Buffer) {
    const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv)
    let bufs = [decipher.update(encrypted), decipher.final()]
    return Buffer.concat(bufs)
}

export function decryptEncryptionKeys(secret: Buffer, privateKey: Buffer) {
    /*
    * 0-32   PublicKey
    * 32-64  Hmac
    * 64-*   keys
    */
    if (secret.length != 144) {
        console.log('Invalid server secret length', secret.length);
    }
    const publicKey = Buffer.from(secret.slice(0, 32))
    const sharedSecret = curve.deriveSharedSecret(privateKey, publicKey);
    // HKDF implements RFC 5869
    const key = crypto.createHmac('sha256', Buffer.alloc(32)).update(sharedSecret).digest()
    let keyStream: Buffer[] = []
    let blockIndex = 1
    let streamLength = 0
    let tmp: Buffer
    let keyBlock: Buffer
    let keyBlockLen = 0
    while (streamLength < 80) {
        tmp = Buffer.alloc(keyBlockLen + 1, keyBlock, 'binary')
        tmp[tmp.byteLength - 1] = blockIndex++
        keyBlock = crypto.createHmac('sha256', key).update(tmp).digest()
        keyBlockLen = keyBlock.length
        keyStream.push(keyBlock);
        streamLength += keyBlockLen
    }
    const sharedSecretExpanded = Buffer.concat(keyStream).slice(0, 80)

    // Validate secret
    tmp = Buffer.alloc(secret.byteLength - 32)
    tmp.fill(secret.slice(0, 32))
    tmp.fill(secret.slice(64), 32)
    const hmacValidation = crypto.createHmac('sha256', sharedSecretExpanded.slice(32, 64)
    ).update(tmp).digest()

    if (hmacValidation.compare(secret.slice(32, 64)) !== 0) {
        throw new Error('Encryption keys invalid');
    }
    //sharedSecretExpanded.length - 64  + serverSecret.length - 64
    const keysEncrypted = Buffer.concat([
        sharedSecretExpanded.slice(64),
        secret.slice(64)
    ])

    let keysDecrypted = AESDecrypt(
        sharedSecretExpanded.slice(0, 32),
        keysEncrypted.slice(0, 16),
        keysEncrypted.slice(16)
    )

    return {
        aesKey: keysDecrypted.slice(0, 32),
        macKey: keysDecrypted.slice(32, 64)
    }
}