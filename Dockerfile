FROM node:16-alpine

RUN npm install -g serve

COPY package.json ./
RUN npm install

COPY package-lock.json ./
RUN npm install --silent

COPY . ./
RUN npm run build 

CMD serve -p $PORT -s dist