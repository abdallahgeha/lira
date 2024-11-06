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

# Build the server TypeScript code
WORKDIR /app/server

ENV NODE_TLS_REJECT_UNAUTHORIZED=0

RUN npm install
RUN npm run build

# Stage 2: Set up the production environment for the Express server
FROM node:lts-alpine

# Set working directory
WORKDIR /app

# Set environment variable for production
ENV NODE_ENV=production
ENV NODE_TLS_REJECT_UNAUTHORIZED=0

# Expose port 3000
EXPOSE 3000

# Copy only the compiled server code and necessary files from the builder stage
COPY --from=builder /app/server/dist ./server/dist
COPY --from=builder /app/client/dist ./client/dist
COPY --from=builder /app/server/package.json ./server/package.json
COPY --from=builder /app/server/package-lock.json ./server/package-lock.json

# Install only production dependencies for the server
RUN npm install --production --prefix ./server

# Start the Express server
# CMD ["npm", "start", "--prefix", "./server"]
# CMD ["sh", "-c", "npx prisma db push && npx prisma generate && node ./server/dist/index.js"]

WORKDIR /app/server
CMD ["npm", "start"]

