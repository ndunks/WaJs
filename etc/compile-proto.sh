#!/bin/bash

# Get protoc: https://github.com/protocolbuffers/protobuf/releases
protoc --js_out=../,import_style=commonjs,binary:. whatsapp.proto