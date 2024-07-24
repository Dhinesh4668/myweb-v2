# Use node image to build the application
FROM node:16 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and yarn.lock files to the container
COPY package.json package-lock.json yarn.lock ./

# Install Yarn package manager
RUN npm i -g yarn

# Install dependencies
RUN yarn install

# Build the application
RUN yarn run build

# Use nginx image to serve the application
FROM nginx:alpine

# Copy the build output from the previous stage to the nginx html directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
