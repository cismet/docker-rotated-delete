# docker-rotated-delete
A tiny Docker image to provide you with the superb rotate-backups script without installation

![docker status](https://img.shields.io/docker/build/cismet/rotated-delete.svg)

## What it is not
* a backup script 
* a backup utility

## What it is
* tool to delete (and keep) stuff
* a wrapper for the cool rotate-backup script (see https://rotate-backups.readthedocs.io/en/latest/#command-line)

## What can i do with it
* delete files in a way that certain files are preserved (matching the parameters) 

## Prerequisites

* Docker

## usage with

```shell
docker run -t --rm -v /var/backups/milquetoast/backups/:/data cismet/rotated-delete --daily=10 --weekly=5 --monthly=13 --yearly=5
```

## playground

```shell
./createTestFiles.js
ls testFiles
docker run -t --rm -v $(pwd)/testFiles:/data cismet/rotated-delete --daily=8 --weekly=5 --monthly=13 --yearly=5
```