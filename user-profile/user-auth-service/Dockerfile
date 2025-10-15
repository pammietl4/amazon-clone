FROM node:24 AS builder
WORKDIR /usr/src/app
COPY package.json .
RUN npm ci
COPY . .

FROM node:24-alpine
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app ./
EXPOSE 4000
CMD ["node", "src/app.js"]