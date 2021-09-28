FROM node:latest
COPY . .
RUN yarn add concurrently
RUN yarn run installs
RUN cd front-end/ && yarn build
CMD yarn run server
