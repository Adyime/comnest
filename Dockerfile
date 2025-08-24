FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies first (for better caching)
COPY package.json package-lock.json ./
RUN npm install --force

# Copy the entire project
COPY . .

# Build the Next.js application
RUN npm run build

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start"]
