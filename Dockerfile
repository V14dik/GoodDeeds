## Base image
#FROM node:16-alpine
#
## Create app directory
#WORKDIR /app
#
## A wildcard is used to ensure both package.json AND package-lock.json are copied
#COPY ./server/tsconfig.json ./
#COPY ./server/package*.json ./
#
## Install app dependencies
#RUN yarn install
#
## Bundle app source
#COPY . .
#
## Creates a "dist" folder with the production build
#RUN yarn build

FROM mongo:5.0