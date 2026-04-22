FROM node:18-alpine
WORKDIR /app
COPY HelloWorld.js .
EXPOSE 3000
CMD ["node","HelloWorld.js"]
