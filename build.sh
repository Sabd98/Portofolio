#!/bin/bash
set -e

docker info > /dev/null 2>&1 || { echo "Error: Docker is not running."; exit 1; }

docker build -t portofolio .
docker run --rm -p 3000:3000 portofolio
