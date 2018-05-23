FROM php:7.0-apache
COPY ./contact-form.php /var/www/html/
COPY ./index.html /var/www/html/
COPY ./images /var/www/html/images
COPY ./js /var/www/html/js
COPY ./plugins /var/www/html/plugins
COPY ./preloaders /var/www/html/preloaders
COPY ./css /var/www/html/css
RUN chown -R www-data:www-data /var/www/html/*
