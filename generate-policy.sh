#!/bin/bash

# .env ファイルを読み込む（dotenv コマンドを使用する場合）
export $(grep -v '^#' .env | xargs)

# 環境変数を使ってテンプレートを置換
sed "s/\${ALLOWED_IP}/$ALLOWED_IP/g" s3-policy-template.json > s3-policy.json

echo "Generated s3-policy.json with ALLOWED_IP=$ALLOWED_IP"