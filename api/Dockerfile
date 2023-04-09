# syntax=docker/dockerfile:1

FROM node:16-alpine
ENV NODE_ENV=production

WORKDIR /src

COPY ["package.json", "yarn.lock*", "./"]

RUN yarn --production

COPY . .

CMD ["node", "dist/index.js"]
