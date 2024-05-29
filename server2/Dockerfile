FROM node:20

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm i -g nodemon
RUN npm i
COPY . .

CMD ["nodemon", "server.js"]