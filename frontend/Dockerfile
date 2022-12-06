FROM node:18.12-alpine

RUN addgroup app && adduser -S -G app app
USER app

WORKDIR /app
COPY *.json .
RUN npm install
COPY . .
EXPOSE 3000