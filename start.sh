#!/bin/bash

# Exit on error
set -e

# Set Node options for memory management
export NODE_OPTIONS="--max-old-space-size=384"

# Set environment variables
export HOST="0.0.0.0"
export PORT="${PORT:-10000}"
export NODE_ENV=production

echo "Installing dependencies..."
npm ci --only=production --no-audit --prefer-offline

echo "Building application..."
NODE_ENV=production npm run build

echo "Starting server on ${HOST}:${PORT}..."
exec npm run start
