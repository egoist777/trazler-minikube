FROM nginx:1.21-alpine 

COPY ./trazler-webapp /var/www/html/
COPY ./default.conf /etc/nginx/conf.d/default.conf

CMD ["nginx","-g","daemon off;"]