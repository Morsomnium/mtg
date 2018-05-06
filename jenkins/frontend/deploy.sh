#!/usr/bin/env sh

echo 'changing directory to frontend/'
cd frontend

echo 'Building ...'
npm run build

echo 'Starting ...'
npm run start &