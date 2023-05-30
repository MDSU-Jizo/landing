FROM node:19

WORKDIR /app

COPY ./package*.json ./

COPY . .

# RUN npm set progress=false
RUN npm install -g npm@9.6.4
RUN npm install --legacy-peer-deps

EXPOSE 6006

CMD ["npm", "run", "storybook"]