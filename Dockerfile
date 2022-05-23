FROM node:17-alpine 

WORKDIR /app

COPY package.json .

RUN npm install 

COPY . .

EXPOSE 5000

CMD ["node", "index.js"]