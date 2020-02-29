FROM node:12 as training-frontend
WORKDIR /apps
COPY . ./
EXPOSE 3000
RUN npm i --silent
CMD ["npm", "start"]
