FROM ubuntu:latest
# FROM node:18-bullseye
RUN apt-get -y update
RUN apt-get -y install git

FROM node:18-alpine
RUN yarn install && yarn cache clean
RUN mkdir -p /docker-test-vite
WORKDIR /docker-test-vite
COPY package.json yarn.lock ./
RUN yarn install
# CMD pnpm dev

