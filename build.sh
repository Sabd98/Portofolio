#!/bin/bash
set -e

MODE="${1:-local}"  # default: local

case "$MODE" in
    vps)
        echo "🚀 Deploying to VPS ($DOMAIN)..."
        docker build -t portofolio .

        docker stop portofolio 2>/dev/null || true
        docker rm portofolio 2>/dev/null || true

        docker run -d \
          --name portofolio \
          --restart unless-stopped \
          -p 3000:3000 \
          portofolio:latest

        echo ""
        echo "✅ Deployed! https://${DOMAIN}"
        ;;
    local)
        echo "🔧 Running locally (dev)..."
        docker build -t portofolio .
        docker run --rm -p 3000:3000 portofolio
        ;;
    *)
        echo "Usage: ./build.sh [vps|local]"
        exit 1
        ;;
esac
