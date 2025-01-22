# Configuración de Bind9

=====================================

### 1. Comprobar actualizaciones

```bash
sudo apt update
sudo apt upgrade
```

### 2. Instalar paquetes de Bind9 y Nano

```bash
sudo apt install bind9 bind9-utils nano
```

### 3. Comprobar estado de Bind9

```bash
systemctl status bind9
```

### 4. Permitir acceso al puerto y protocolo de Bind9

```bash
sudo ufw allow bind9
```

### 5. Configuración mínima de Bind9

```bash
sudo nano /etc/bind/named.conf.options
```

# Líneas a modificar, agregar o eliminar

```bash
listen-on { any; };
allow-query { localhost; 10.109.*.*/24; };
forwarders {
        8.8.8.8;
        8.8.4.4;
};
dnssec-validation no;
```

### 6. Obligar el uso único de IPv4

```bash
sudo nano /etc/default/named
```

# Modificar la línea dejándola así:

```bash
OPTIONS="-u bind -4"
```

### 7. Comprobar configuración de Bind9 y reiniciar servicio

```bash
sudo named-checkconf
sudo systemctl restart bind9
systemctl status bind9
```

### 8. Agregar zonas

```bash
sudo nano /etc/bind/named.conf.local
```

### Zonas a agregar

```bash
zone "elo.com" IN {
        type master;
        file "/etc/bind/zonas/db.networld.cu";
};

zone "20.10.10.in-addr.arpa" {
        type master;
        file "/etc/bind/zonas/db.10.10.20";
};
```

### 9. Crear directorio y archivos de zonas

```bash
sudo mkdir /etc/bind/zonas
sudo nano /etc/bind/zonas/db.elo.com
```

```bash
$TTL    1D
@       IN      SOA     ns1.elo.com. admin.elo.com. (
        1               ; Serial
        12h             ; Refresh
        15m             ; Retry
        3w              ; Expire
        2h  )           ; Negative Cache TTL

;       Registros NS

        IN      NS      ns1.elo.com.
ns1     IN      A       10.10.20.13
www     IN      A       10.10.20.13
```

### La línea etiquetada como ‘serial‘ recoge un número que deberá incrementarse manualmente cada vez que editemos este archivo, ya sea para modificar nombres o añadir nuevos.

## La línea admin.networld.cu. se trata de la dirección de correo del administrador del servidor DNS sin el @, estos datos al igual que los tiempos de Refrech y demás no se tratan a la ligera, pues son los que dan reputación y confiabilidad a nuestro servidor en el mundo cuando estamos trabajando sobre un servidor DNS autoritativo o real.

```bash
$TTL    1d ;
@       IN      SOA     ns1.elo.com admin.elo.com. (
                        20210222        ; Serial
                        12h             ; Refresh
                        15m             ; Retry
                        3w              ; Expire
                        2h      )       ; Negative Cache TTL
;
@      IN      NS      ns1.elo.com.
1       IN      PTR     www.elo.com.
```

//Es importante en estos dos archivos que acabamos de crear respetar los signos, cualquier error conlleva que el servidor no arranque.

10- Comprobar los archivos de zona que acabamos de crear para ver si todo esta bien.

```bash
sudo named-checkzone elo.com /etc/bind/zonas/db.elo.com
sudo named-checkzone db.20.10.10.in-addr.arpa /etc/bind/zonas/db.10.10.20
```

//Debemos obtener un OK en cada comprobación

11- Reiniciamos nuevamente

```bash
sudo systemctl restart bind9
```

12- Comprobar funcionamiento desde otra PC.

```bash
ping www.networld.cu
```
