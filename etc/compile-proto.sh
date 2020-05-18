#!/bin/bash
# Generate protobuf js/ts from proto2 declaration
# Run from root directory

PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"
OUT_DIR="./src"
PROTO_FILE="whatsapp.proto"
# Get protoc: https://github.com/protocolbuffers/protobuf/releases
protoc \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
    --js_out="import_style=commonjs,binary:${OUT_DIR}" \
    --ts_out="${OUT_DIR}" \
    -Ietc \
    $PROTO_FILE

