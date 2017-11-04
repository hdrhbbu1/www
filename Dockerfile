FROM nginx:1.13-alpine@sha256:dc5f67a48da730d67bf4bfb8824ea8a51be26711de090d6d5a1ffff2723168a3
MAINTAINER Nicholas Young <nicholas@nicholaswyoung.com>
COPY public/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
