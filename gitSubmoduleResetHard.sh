#!/bin/sh

git submodule foreach 'git reset --hard origin/main'

git submodule update

git submodule sync

git submodule status
