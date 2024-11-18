#!/bin/bash

# Install dependencies
npm install

# Build the application
NODE_ENV=production npm run build

# Start with explicit port
PORT=10000 NODE_ENV=production NODE_OPTIONS="--max_old_space_size=460" npm run start
