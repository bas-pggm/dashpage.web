# Base image
FROM node:slim

# Metadata
MAINTAINER Bas Stroosnijer <bas@strootje.com>

# Working directory
WORKDIR /usr/src/app

# Add source code
ADD . /usr/src/app/

# Build app
RUN npm install

# Expose the port
EXPOSE 3000

# Start app
CMD [ "npm", "run", "server" ]
