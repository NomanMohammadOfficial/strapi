#!/bin/bash

# Set Node options for memory management
export NODE_OPTIONS="--max-old-space-size=384"

# Install production dependencies only
npm ci --only=production

# Build the application with reduced memory
NODE_ENV=production npm run build

# Start the application
PORT=10000 NODE_ENV=production npm run start
