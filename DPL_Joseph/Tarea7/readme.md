## Redireccion entre paginas

###  Paso 1: Crear un archivo PHP
Primero, necesitas un archivo PHP donde se realizará la redirección. Por ejemplo, crea un archivo llamado redireccion.php.

### Paso 2: Usar la función header()
Dentro de ese archivo, debes utilizar la función header(), que es la función en PHP encargada de enviar encabezados HTTP. Para redirigir a otra URL, utilizarás la función header("Location: URL").

```php
<?php
// Redirigir a la página destino
header("Location: https://www.ejemplo.com");
?>
```

### Paso 3: Asegurarse de que no haya salida previa al uso de header()
Es importante que la función header() se ejecute antes de que cualquier contenido (como texto o HTML) sea enviado al navegador. 

```php

<?php
// Incorrecto: Esto causará un error de encabezados ya enviados
echo "Redirigiendo..."; 
header("Location: https://www.ejemplo.com");
?>
```