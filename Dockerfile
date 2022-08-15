FROM node:16
ENV NODE_ENV=production

WORKDIR /app

RUN npm i @nestjs/cli

RUN nest new test

WORKDIR /app/test

CMD nest start