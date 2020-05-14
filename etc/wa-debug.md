# Web WhatsApp Debuging tips

Use chrome override, save to override and pretty print file `app.{hash}.js` also with `index` files

- search 'Unexpected message event type' to find parser function
- Search '_onMessage' to find on WS Message, can be string or encrypted buffer
- `this.msgParser` is responsible for spliting tag and data

Binary protocol handler and WS response handler is on `app2.{hash}.js`

- search `BinaryProtocol.read` or `invalid node.`



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

You can add Log function when BinaryProtocol Read/Write (not encrypted)

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