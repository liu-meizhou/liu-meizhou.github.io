#!/usr/bin/env sh

git add .
git commit -m "${1:-update}"
git push
