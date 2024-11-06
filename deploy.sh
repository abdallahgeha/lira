#!/bin/bash

# Define your container and image names
CONTAINER_NAME="lira"
IMAGE_NAME="lira:latest"

# Stop and remove the old container if it exists
if [ "$(docker ps -aq -f name=$CONTAINER_NAME)" ]; then
    echo "Stopping and removing old container..."
    docker compose down
fi

# Build and run new containers using Docker Compose
echo "Building and running containers using Docker Compose..."
docker compose up --build -d
