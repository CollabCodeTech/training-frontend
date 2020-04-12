#FROM node:12 as training-frontend
FROM cypress/included:4.3.0 as training-frontend
WORKDIR /app
COPY . ./
RUN npm i --silent
