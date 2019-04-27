FROM node:10-alpine

COPY ./app /enjoei-app/app
WORKDIR /enjoei-app/app

RUN npm install && \
    npm install -g yarn && \
    yarn build

FROM nginx:1-alpine
COPY --from=0 /enjoei-app/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]