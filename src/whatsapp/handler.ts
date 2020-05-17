import WhatsApp from "."
import { BinNode, BinNodeTags, BinAttr, BinAttrUser, BinAttrResponse, BinAttrChat } from "./interfaces"
import { Color } from "../utils"

export interface AsyncTagHandler {
    /** Auto assign if sent */
    tag?: string
    sentMessage: String | Buffer
    callback: (this: AsyncTagHandler, message: string | Buffer | any) => void
    /** Logging purpose */
    hint?: string
}

/** Dynamic handler form promise */
export const commandTagHandlers = new Map<String, AsyncTagHandler>()

export const binaryDataHandler: { [name in BinNodeTags]?: (this: WhatsApp, attr: BinAttr, childs?: BinNode[]) => void } = {
    response(attr: BinAttrResponse, childs) {
        L('Handle Binary Response:', attr.type || '')
        let handle: string
        childs.forEach(
            child => {
                if ('undefined' == typeof binaryDataHandler[child[0]]) {
                    L(Color.r('Miss binary handler:'), child[0])
                } else {
                    binaryDataHandler[child.shift()].apply(this, child)
                }
            }
        )
    },
    user(attr: BinAttrUser, childs) {
        this.contacts.push(attr)
    },
    chat(attr: BinAttrChat, childs) {
        this.chats.push(attr)
    }
}