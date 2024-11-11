#!/bin/bash

function usage() {
    echo "Usage help
    option    default                                 explaination

    -h                                                print this help message
    -p                                                sets the version to patch
    -m                                                sets the version to minor
    -M                                                sets the version to major"
}

function die() {
	if [[ ! -z "$@" ]]; then
		echo "`basename $0`: $@"
	fi
	exit 1
}

while getopts ':hmMp' arg; do
  case $arg in
    'h') usage; exit ;;
    'p') IS_PATCH=true; OP=true ;;
    'm') IS_MINOR=true; OP=true ;;
    'M') IS_MAJOR=true; OP=true ;;
    '?') die "Unknown option '$OPTARG'" ;;
    ':') die "Missing parameter '$OPTARG'" ;;
  esac
done

if [[ $IS_PATCH ]] && [[ $IS_MINOR ]]; then
  die "cannot use '-p' with '-m'"
fi

if [[ $IS_PATCH ]] && [[ $IS_MAJOR ]]; then
  die "cannot use '-p' with '-M'"
fi

if [[ $IS_MINOR ]] && [[ $IS_MAJOR ]]; then
  die "cannot use '-m' with '-M'"
fi

_npmCommand="npm --no-git-tag-version version"

if [[ $IS_PATCH ]]; then
  _npmCommand="${_npmCommand} patch"
fi

if [[ $IS_MINOR ]]; then
  _npmCommand="${_npmCommand} minor"
fi

if [[ $IS_MAJOR ]]; then
  _npmCommand="${_npmCommand} major"
fi

eval ${_npmCommand}
git add package.json
git add package-lock.json
git commit -s
git tag v`node -e "console.log(require('./package.json').version);"`
