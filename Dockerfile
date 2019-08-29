FROM node:10

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
RUN npm install webpack webpack-cli -g

# Bundle app source
COPY ./ ./

RUN npm run build

EXPOSE 1337
CMD [ "node", "build/server.js" ]