FROM node:14.18.2-slim

ENV APP=/home/node/app
ENV NG_CLI_ANALYTICS=false
ENV PUPPETEER_EXECUTABLE_PATH=/home/node/app/node_modules/puppeteer/.local-chromium/linux-1011831/chrome-linux/chrome
# ARG ENDPOINT_OF_TEST
WORKDIR $APP

COPY . $APP/
RUN apt-get update -y && apt-get install curl -y
RUN apt-get install -y \
    fonts-liberation \
    gconf-service \
    libappindicator1 \
    libasound2 \
    libatk1.0-0 \
    libcairo2 \
    libcups2 \
    libfontconfig1 \
    libgbm-dev \
    libgdk-pixbuf2.0-0 \
    libgtk-3-0 \
    libicu-dev \
    libjpeg-dev \
    libnspr4 \
    libnss3 \
    libpango-1.0-0 \
    libpangocairo-1.0-0 \
    libpng-dev \
    libx11-6 \
    libx11-xcb1 \
    libxcb1 \
    libxcomposite1 \
    libxcursor1 \
    libxdamage1 \
    libxext6 \
    libxfixes3 \
    libxi6 \
    libxrandr2 \
    libxrender1 \
    libxss1 \
    libxtst6 \
    xdg-utils

RUN npm install --loglevel verbose
RUN npm run build
RUN chmod -R o+rwx node_modules/puppeteer/.local-chromium
