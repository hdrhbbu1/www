FROM nginx:1.13-alpine@sha256:4a97b863a4386ba588cd4f264582d1f306bc9da46fe3e02540bd171709ce09d7
MAINTAINER Nicholas Young <nicholas@nicholaswyoung.com>
COPY public/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
