FROM node:18-alpine AS build

WORKDIR /app

# Install packages
COPY package.json ./
COPY yarn.lock ./
RUN yarn install --silent

# Build app
COPY . /app
RUN yarn build



FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html
COPY config/nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
