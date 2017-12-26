FROM nginx:1.13-alpine@sha256:40e95eef5082a5b26c5fd9441bd7ee6bcda1bb5f9fbf7a4a1ef9b2b0f88d5c43
MAINTAINER Nicholas Young <nicholas@nicholaswyoung.com>
COPY public/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
