import { WhatsAppClientConfig } from "./whatsapp/interfaces"

const L = console.log
const E = console.error

const Color = {
    c(s: string) { return `\x1b[36m${s}\x1b[0m` },
    m(s: string) { return `\x1b[35m${s}\x1b[0m` },
    y(s: string) { return `\x1b[33m${s}\x1b[0m` },
    r(s: string) { return `\x1b[31m${s}\x1b[0m` },
    g(s: string) { return `\x1b[32m${s}\x1b[0m` },
    b(s: string) { return `\x1b[34m${s}\x1b[0m` },
    w(s: string) { return `\x1b[37m${s}\x1b[0m` },
}
export { Color, L, E }