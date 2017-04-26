FROM nginx:1.13-alpine
MAINTAINER Nicholas Young <nicholas@nicholaswyoung.com>
COPY public/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
