### STAGE 1: Build ###
FROM node:16-alpine AS build
WORKDIR /usr/src/app
ARG FONTAWESOME_NPM_AUTH_TOKEN
ENV FONTAWESOME_NPM_AUTH_TOKEN=$FONTAWESOME_NPM_AUTH_TOKEN
COPY package.json package-lock.json .npmrc ./
RUN npm install --force
COPY . .
RUN npm run build

### STAGE 2: Run ###
FROM nginx:1.23.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/build /usr/share/nginx/html