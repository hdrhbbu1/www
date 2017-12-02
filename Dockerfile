FROM nginx:1.13-alpine@sha256:34aa80bb22c79235d466ccbbfa3659ff815100ed21eddb1543c6847292010c4d
MAINTAINER Nicholas Young <nicholas@nicholaswyoung.com>
COPY public/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
