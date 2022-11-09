FROM node:18-alpine

WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm ci

# Copy all file
COPY . ./

EXPOSE 3000