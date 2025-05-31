FROM ubuntu

RUN apt update && \
    apt install apache2 apache2-utils -y && \
    apt clean

COPY index.html /var/www/html/

EXPOSE 80
CMD ["/usr/sbin/apachectl", "-D", "FOREGROUND"]

