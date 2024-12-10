

# Configuración de Nginx para Múltiples Empresas


## 1. Creación de Directorios
#### Crea los directorios necesarios para alojar los archivos de cada empresa en el sistema de archivos.
```bash
sudo mkdir -p /var/www/empresa1
sudo mkdir -p /var/www/empresa2
sudo mkdir -p /var/www/empresa3
```




## 2. Cambiar Propietario de los Directorios
#### Cambia el propietario y el grupo de los directorios creados a www-data, que es el usuario bajo el cual se ejecuta el servidor Nginx.
```bash
sudo chown -R www-data:www-data /var/www/empresa1
sudo chown -R www-data:www-data /var/www/empresa2
sudo chown -R www-data:www-data /var/www/empresa3
```

## 3. Configuración de Permisos
#### Establece los permisos de los directorios para que el propietario tenga permisos de lectura, escritura y ejecución, mientras que el grupo y otros usuarios solo tienen permisos de lectura y ejecución.
```bash
sudo chmod -R 755 /var/www/empresa1
sudo chmod -R 755 /var/www/empresa2
sudo chmod -R 755 /var/www/empresa3
```








## 4. Copia de Archivos de Configuración de Nginx
#### Cambia al directorio donde se encuentran las configuraciones de los sitios de Nginx y copia el archivo de configuración por defecto para crear uno nuevo para empresa1.
#### Este paso se repite para empresa2 y empresa3.

```bash
cd /etc/nginx/sites-available
sudo cp default empresa1
```


## 5. Edición de Archivos de Configuración
#### Abre el archivo de configuración de empresa1 en el editor de texto nano para realizar modificaciones.
```bash
sudo nano empresa1


server_name empresa1.com www.empresa1.com;


```


## 6. Creación de Enlaces Simbólicos
#### Crea un enlace simbólico en el directorio sites-enabled para habilitar la configuración del sitio.Este paso se repite para empresa2 y empresa3.
```bash
sudo ln -s /etc/nginx/sites-available/empresa1 /etc/nginx/sites-enabled/
```

## 7. Eliminación del Archivo de Configuración por Defecto
#### Cambia al directorio sites-enabled y elimina el archivo de configuración por defecto para evitar conflictos.
```bash
cd ..
cd /sites-enabled
sudo rm default
```



## 8. Verificación y Recarga de Nginx
#### nginx -t: Verifica la configuración de Nginx para asegurarse de que no haya errores.
#### nginx -s reload: Recarga Nginx para aplicar los cambios realizados en la configuración.
 
```bash
sudo nginx -t
sudo nginx -s reload
```



## 9. Edición de Archivos de Hosts y HTML
### Abre el archivo de hosts para empresa1 y el archivo index.html para editar el contenido de la página de inicio.Este paso se repite para `empresa2
```bash
sudo nano /etc/hosts/empresa1
sudo nano index.html
```

