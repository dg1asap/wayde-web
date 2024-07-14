#!/bin/sh
OPENAPI_JSON_URL="http://localhost:8080/v3/api-docs"
OUTPUT_DIR="./src/api"
rm -rf $OUTPUT_DIR
curl -o openapi.json $OPENAPI_JSON_URL
openapi-generator-cli generate -i openapi.json -g typescript-fetch -o $OUTPUT_DIR
rm openapi.json