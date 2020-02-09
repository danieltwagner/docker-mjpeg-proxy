FROM node:10-alpine
MAINTAINER Rolf Larsen

RUN apk add python3 make g++
RUN npm i mjpeg-proxy express

#
# Define an environment variable
# 
# Use this variable when creating a container to specify the MJPEG host.
ENV MJPEG_URL=""
ENV MJPEG_PORT="8081"

ADD index.js /

CMD nodejs index.js
