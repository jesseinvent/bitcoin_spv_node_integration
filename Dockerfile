FROM node:16

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "start:prod"]

EXPOSE 3000