FROM node:latest
COPY front-end/ front-end/
RUN cd front-end && yarn install && yarn run build
RUN yarn install -g serve
RUN serve -s front-end/build
# RUN cd ..
# COPY back-end/src src/
# COPY back-end/package.json package.json
# RUN yarn install
# CMD yarn run start
