FROM node:16
ENV NODE_ENV=production

WORKDIR /app

COPY . .

RUN npm i -g @nestjs/cli

RUN npm ci

RUN nest build

CMD nest start