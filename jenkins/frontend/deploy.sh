#!/usr/bin/env sh

set -x

cd frontend
pwd

npm run build

pwd

npm start &
sleep 1

pwd

echo $! > .pidfile
set +x