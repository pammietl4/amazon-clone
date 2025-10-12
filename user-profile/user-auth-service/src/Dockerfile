FROM node:18 AS builder
WORKDIR /user-auth-service/src/app.js
COPY package.json .
RUN npm ci
COPY . .
FROM node:18-alpine
WORKDIR /user-auth-service/src/app.js
COPY --from=builder /user-auth-service/src/app.js ./
EXPOSE 4000
CMD ["node", "src/app.js"]