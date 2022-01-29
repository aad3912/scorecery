FROM node:lts-alpine
WORKDIR /server
COPY --chown=node:node . .
RUN yarn
EXPOSE 5000
CMD yarn run server