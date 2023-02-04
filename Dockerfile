### STAGE 1: Build ###
# Import node
FROM node:18 AS build
# Set app's part
WORKDIR /app
# Copy package.json
COPY package.json ./
# Install
RUN npm install
# Install app except .dockerignore files
COPY . .
# Build
RUN npm run build

### STAGE 2: Run ###
# Import nginx
FROM nginx
# Copy already created nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf
# Copy project files fo nginx's html directory
COPY --from=build /app/dist/* /usr/share/nginx/html

# docker build . -t black/covid-19-statictics-angular
# docker run -p 49161:4200 -d black/covid-19-statictics-angular

# DOCKER
#   docker build . -t <user name>/<image name>
#   docker images
#   docker rm image <image id>
#   docker run -p 49161:4200 -d <user name>/<container name>
#   docker ps
#   docker kill <container id>
#   docker start <container id>
#   docker rm <container id>
#
