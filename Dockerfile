FROM node:12 as training-frontend
WORKDIR /app
COPY package.json ./
RUN npm i --silent
COPY . ./
EXPOSE 3000
CMD start.sh