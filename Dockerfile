# Use lightweight Nginx image as base
FROM nginx:alpine

# Copy all static files to Nginx's default serving directory
COPY *.html /usr/share/nginx/html/
COPY css/ /usr/share/nginx/html/css/
COPY js/ /usr/share/nginx/html/js/

# Expose port 80
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]

