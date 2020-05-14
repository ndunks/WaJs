const protobuf = require("protobufjs")
const fs = require("fs")

protobuf.load(__dirname + "/whatsapp.proto").then(
    root => {
        fs.writeFileSync(__dirname + '/whatsapp.proto.json',
            JSON.stringify(root.toJSON(), null, 2))

    }
)
