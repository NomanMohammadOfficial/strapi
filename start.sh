#!/bin/bash

# Exit on error
set -e

# Set Node options for memory management
export NODE_OPTIONS="--max-old-space-size=384"

# Set environment variables
export PORT=10000
export NODE_ENV=production

echo "Installing dependencies..."
npm ci --only=production --no-audit

echo "Building application..."
npm run build

echo "Starting server..."
npm run start
