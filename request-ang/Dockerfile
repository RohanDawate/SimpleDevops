FROM node:12.16.2-alpine as buildstep
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . . 
RUN npm run build

FROM nginx:1.17.1-alpine as prodstage
COPY --from=buildstep /app/dist/request-ang /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]