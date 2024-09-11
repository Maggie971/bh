# Base image
FROM node:18

# Set the working directory
WORKDIR /app

COPY package.json package-lock.json /app/
RUN npm install

# Copy all project files from the current directory to /app
COPY . /app/

# Expose port 3000
EXPOSE 3000

# Start the Next.js application
CMD ["yarn", "dev"]
