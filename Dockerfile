FROM node:14-alpine

WORKDIR /app

COPY ./package.json  /app
ARG env=grey
RUN npm install --legacy-peer-deps
#yarn --ignore-engines
COPY ./ /app
RUN npm run build

CMD ["node", "server.js"]
