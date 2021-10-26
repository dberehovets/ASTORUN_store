# build environment
FROM node:13.12.0-alpine
WORKDIR /app/frontend

COPY package.json package-lock.json ./
RUN npm install
RUN npm install react-scripts@3.4.1 -g
RUN npm build
COPY . ./
EXPOSE 3000

# production environment
#FROM nginx:stable-alpine
#COPY --from=build /usr/src/app/build /usr/share/nginx/html
## new
#COPY nginx/nginx.conf /etc/nginx/nginx.conf
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]
