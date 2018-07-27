# Build environment
FROM node:9.4.0 as builder
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json /usr/src/app/package.json
RUN npm install -g yarn
RUN yarn install
COPY . /usr/src/app
RUN yarn build

# Production environment
FROM nginx:1.13.8
LABEL maintainer="Anthony GRIFFON <agriffon@oui.sncf>"
LABEL author="Anthony GRIFFON <agriffon@oui.sncf>"
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html
EXPOSE 80
