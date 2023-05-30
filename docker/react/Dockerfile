FROM node:19

WORKDIR /app

ENV PATH ./node_modules/.bin:$PATH

COPY ./package*.json ./
RUN npm install -g npm@9.6.4
RUN npm install --legacy-peer-deps

COPY . .

#CMD ["npm", "start"]
CMD ["npx", "react-scripts", "start"]