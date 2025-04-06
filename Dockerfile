FROM node:18-alpine 

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --force

COPY . .

# Build the Next.js application for production
RUN npm run build

EXPOSE 3000

# Use npm start which runs next start in production mode
CMD npm start