FROM nginx:1.13-alpine@sha256:83f10f82722087e6944e0348b2e64a95baf247135de7c237f4dec7729a386d7f
MAINTAINER Nicholas Young <nicholas@nicholaswyoung.com>
COPY public/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
