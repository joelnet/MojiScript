#!/bin/bash

echo -e "//registry.npmjs.org/:_authToken=$NPM_AUTH_TOKEN\n" > ~/.npmrc
echo -e "machine github.com\n  login $CI_USER\n  password $CI_USER_PASSWORD\n" > ~/.netrc
npm version patch -m "Version %s [skip ci]"
git push origin HEAD:master
git push --tags
npm run patch-readme --silent > NEW-README.md
mv NEW-README.md README.md
npm publish
