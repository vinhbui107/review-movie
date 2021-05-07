FROM node:15

WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

COPY ./package*.json ./

RUN npm install --legacy-peer-deps --silent

RUN chown -R node.node /app

RUN chmod 777 node_modules

EXPOSE 3000

CMD ["npm", "start"]
