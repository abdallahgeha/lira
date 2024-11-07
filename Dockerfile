# Stage 1: Build the React Vite app and TypeScript server
FROM node:lts-alpine AS builder

# Set working directory
WORKDIR /app

# Copy both client and server code
COPY ./client ./client
COPY ./server ./server

# Install client dependencies and build
WORKDIR /app/client
RUN npm install
RUN npm run build

# # Build the server TypeScript code
WORKDIR /app/server

ENV NODE_TLS_REJECT_UNAUTHORIZED=0

RUN npm install
RUN npm run build

CMD ["npm", "start"]