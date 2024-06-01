FROM nginx
WORKDIR /usr/share/nginx/html

COPY . .

# docker build . -t img-flynext-fe

# docker run -d -p 3000:80 --name cons-flynext img-flynext-fe