#!/usr/bin/env sh

set -x

cd frontend
pwd

npm run build

npm start &
sleep 1

echo $! > .pidfile
set +x