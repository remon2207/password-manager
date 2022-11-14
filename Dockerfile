FROM node:18.12.1-bullseye-slim

ARG TIMEZONE="Asia/Tokyo"
ENV TZ=${TIMEZONE}
RUN ln -sf /usr/share/zoneinfo/${TIMEZONE} /etc/localtime
USER node
WORKDIR /usr/src/app
