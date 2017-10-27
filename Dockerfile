FROM nginx:1.13-alpine@sha256:18f83c1759551c173dba982e5fe6f43d62412888e6f431c9c20b8164661592e3
MAINTAINER Nicholas Young <nicholas@nicholaswyoung.com>
COPY public/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
