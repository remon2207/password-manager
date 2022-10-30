FROM node:16.18.0-bullseye-slim

ARG TIMEZONE="Asia/Tokyo"
ENV TZ=${TIMEZONE}
RUN ln -sf /usr/share/zoneinfo/${TIMEZONE} /etc/localtime
USER node
WORKDIR /usr/src/app
