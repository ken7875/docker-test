FROM node:18-alpine
# FROM node:18-bullseye
RUN yarn install && yarn cache clean
RUN mkdir -p /docker-test-vite
WORKDIR /docker-test-vite
COPY package.json yarn.lock ./
RUN yarn install
# CMD pnpm dev

