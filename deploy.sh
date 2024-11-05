#!/bin/bash

# Define your container and image names
CONTAINER_NAME="lira"
IMAGE_NAME="lira:latest"

# Stop and remove the old container if it exists
if [ "$(docker ps -aq -f name=$CONTAINER_NAME)" ]; then
    echo "Stopping and removing old container..."
    docker stop $CONTAINER_NAME
    docker rm $CONTAINER_NAME
fi

# Remove the old image if needed
if [ "$(docker images -q $IMAGE_NAME)" ]; then
    echo "Removing old image..."
    docker rmi $IMAGE_NAME
fi

# Build a new image
echo "Building new image..."
docker build -t $IMAGE_NAME .

# Run a new container from the image
echo "Running new container..."
docker run -d --name $CONTAINER_NAME -p 3000:3000 $IMAGE_NAME
