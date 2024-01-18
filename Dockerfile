### STAGE 1: Build ###
FROM node:18 AS build
WORKDIR /usr/src/app
COPY . .
RUN npm install && \
    npm run build

### STAGE 2: Run ###
FROM nginx:1.16.1
COPY --from=build /usr/src/app/dist/kanban-task-management/browser /usr/share/nginx/html
EXPOSE 80