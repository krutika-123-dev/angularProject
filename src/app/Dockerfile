# Use Node base image
FROM node:alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first (to leverage Docker cache)
COPY package*.json ./

# Install Angular CLI and dependencies
RUN npm install -g @angular/cli && npm install

# Copy rest of the application code
COPY . .


# Run Angular app
CMD ["ng", "serve", "--host", "0.0.0.0"]
