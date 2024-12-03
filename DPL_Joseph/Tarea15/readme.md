sudo openssl genrsa -out /etc/ssl/private/my_server.key 2048


sudo openssl req -new -x509 -key /etc/ssl/private/my_server.key -out /etc/ssl/certs/my_server.crt -days 365


sudo nano /etc/apache2/sites-available/ssl-prueba1.conf
