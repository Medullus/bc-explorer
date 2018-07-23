FROM node:9.11.1
WORKDIR /usr/src/app
COPY . .
RUN cd app/test && npm install
RUN npm install
RUN cd client/ && npm install && npm run build
RUN apt-get update
RUN apt-get install -y postgresql-client
RUN chmod +x wait-for-postgres.sh
EXPOSE 8080
CMD ["npm", "start", ">>logs/console/console.log-'$(date +%Y-%m-%d)'", "2>&1", "&"]

#docker build -t fabricbros/bc-explorer .