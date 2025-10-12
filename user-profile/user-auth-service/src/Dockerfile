FROM node:18 AS builder
WORKDIR /user-auth-service/src/app
COPY package.json .
RUN npm ci
COPY . .
FROM node:18-alpine
WORKDIR /user-auth-service/src/app
COPY --from=builder /user-auth-service/src/app ./
EXPOSE 4000
CMD ["node", "src/app.js"]