FROM node:14.17.4-alpine as build-stage

WORKDIR /app

COPY ./app/package*.json ./

RUN npm install

COPY ./app ./
tesrdgchvg
RUN npm run build

FROM nginx:alpine

COPY --from=build-stage /app/build/ /usr/share/nginx/html

COPY --from=build-stage app/nginx.conf /etc/nginx/conf.d/default.conf