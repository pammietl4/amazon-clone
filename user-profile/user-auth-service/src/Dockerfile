FROM node:18 AS builder
WORKDIR /user-profile/user-auth-service/src/app.js
COPY package.json .
RUN npm ci
COPY . .
FROM node:18-alpine
WORKDIR /user-profile/user-auth-service/src/app.js
COPY --from=builder /user-profile/user-auth-service/src/app.js ./
EXPOSE 4000
CMD ["node", "src/app.js"]