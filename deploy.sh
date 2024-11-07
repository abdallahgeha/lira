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

# Wait for the database container to be ready
echo "Waiting for the database to be ready..."
until docker exec lira_db pg_isready -U lira_admin; do
  echo "Database is not ready, waiting..."
  sleep 2
done

# Run migrations in the app container
echo "Running Prisma migrations..."
docker exec lira_app npx prisma migrate deploy

echo "Containers are up and migrations are applied."