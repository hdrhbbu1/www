FROM nginx:1.13-alpine@sha256:f1ca87d9adb678b180c31bf21eb9798b043c22571f419ed844bca1d103f2a2f7
MAINTAINER Nicholas Young <nicholas@nicholaswyoung.com>
COPY public/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
