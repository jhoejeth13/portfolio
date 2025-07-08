# Start from the official NGINX image
FROM nginx:alpine

# Remove the default NGINX files
RUN rm -rf /usr/share/nginx/html/*

# Copy your build output into the NGINX directory
COPY dist/ /usr/share/nginx/html

# Expose port 80 to allow access
EXPOSE 80
