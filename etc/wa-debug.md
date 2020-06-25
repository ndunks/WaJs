# Web WhatsApp Debuging tips

Use chrome override, save to override and pretty print file `app.{hash}.js` also with `index` files
- search binSend to get data before ecnrypted
- search Query to get request command sample
- search 'Unexpected message event type' to find parser function
- Search '_onMessage' to find on WS Message, can be string or encrypted buffer
- `this.msgParser` is responsible for spliting tag and data

Binary protocol handler and WS response handler is on `app2.{hash}.js`

- search `BinaryProtocol.read` or `invalid node.`

## Sending Message

Send message handled in app2.js, search for: `msgCreateRecord:`, place some export to make it visible from console.

## Some Debuging info
String data with ! as begining is special meaning

``` js
                    if ("string" == typeof t && "!" === t.charAt(0)) {
                        var n = parseInt(t.slice(1), 10);
                        return n == n && (this.timeSkew = Date.now() - n),
                        void (this.onactivity && this.onactivity())
                    }
```
## Binary Protocol handler app2.{hash}.js

- Split message into tag, and data
- BinaryProtocol.read will Decrypt data
- readNode

You can add Log function when BinaryProtocol Read/Write (before encrypt)

``` js
this.read = function(e) {
    return f.decrypt(e).then((function(e) {
        let read = l.readNode(new d(e))
        console.log('READ', read)
        return read
    }
    ))
}
this.write = function(e) {
    return Promise.callSynchronously((function() {
        var t = new r;
        console.log('WRITE', e)
        return s.writeNode(t, e),
        f.encrypt(t.toBuffer())
    }
    ))
}
```

## KNOWN ACTION 

note `epoch` just incremented every time, I think is like message counter.

Send Text Message
``` json
[
  "action",
  {
    "type": "relay",
    "epoch": "5"
  },
  [
    [
    "message",
    null,
    ArrayBuffer of WebMessageInfo proto,
    ]
  ]
]
```

Presence Available
``` json
[
  "action",
  {
    "type": "set",
    "epoch": "1"
  },
  [
    [
      "presence",
      {
        "type": "available"
      },
      null
    ]
  ]
]

```

Mark Read
``` json
[
  "action",
  {
    "type": "set",
    "epoch": "4"
  },
  [
    [
      "read",
      {
        "jid": "628997026464@c.us", // Wid Instance
        "index": "3EB0FAA4F393C9057003",
        "owner": "false",
        "count": "1"
      },
      null
    ]
  ]
]
```

ACK
``` json
[
  "Msg",
  {
    "cmd": "ack",
    "id": "3EB015E408EDA1B1D236",
    "ack": 2,
    "from": "6285726501017@c.us",
    "to": "6285726501018@c.us",
    "t": 1590064789
  }
]
```

