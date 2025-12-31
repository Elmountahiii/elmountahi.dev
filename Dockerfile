# Stage 1: Build
FROM node:20-bookworm AS builder

WORKDIR /app

# Copy lock files first to leverage Docker cache
COPY package.json  ./

RUN npm install

COPY . .
RUN npm run build

# Stage 2: Production
FROM nginx:stable-alpine

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy custom nginx config (Make sure this file exists in your repo!)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
