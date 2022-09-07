#!/bin/sh

set -e

./_gitSubmoduleBranch "$1" "$2"

./_gitSubmoduleStatus.sh

