FROM node:12 as training-frontend
WORKDIR /app
COPY . ./
RUN npm i --silent
