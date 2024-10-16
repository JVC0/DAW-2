# Proyecto Blog Galpón

## Pasos para crear la estructura del proyecto y gestionar commits

1. **Crear directorio de trabajo**  
   ```bash
   mkdir ./bloggalpon
   cd ./bloggalpon
   ```

2. **Inicializar repositorio vacío**  
   ```bash
   git init
   ```

3. **Crear archivo `index.htm`**  
   ```bash
   touch index.htm
   ```

4. **Añadir estructura básica de una web en `index.htm`**  
   ```html
   <!DOCTYPE html>
   <html lang="es">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Blog Galpón</title>
   </head>
   <body>
   </body>
   </html>
   ```
   

5. **Crear commit para el esqueleto básico de `index.html`**  
   ```bash
   git add index.html
   git commit -m "Se crea el esqueleto básico del index.html"
   ```

6. **Añadir contenido al head**  
   ```html
   <link rel="stylesheet" href="style.css">
   ```

7. **Crear commit para añadir cabecera en `index.htm`**  
   ```bash
   git add index.htm
   git commit -m "Se añade la cabecera del index.htm"
   ```

8. **Añadir contenido al body**  
   ```html
   <header>
       <h1>Bienvenido a Blog Galpón</h1>
   </header>
   <section>
   </section>
   <footer>
   </footer>
   ```

9. **Crear commit para estructura básica del body**  
   ```bash
   git add index.htm
   git commit -m "Se añade la estructura básica del body"
   ```

10. **Añadir contenido a la sección**  
   ```html
   <section>
       <article>
           <h2>Primer Post</h2>
           <p>Este es el primer post en el blog Galpón.</p>
       </article>
   </section>
   ```

11. **Crear commit para la estructura de la zona de posts**  
   ```bash
   git add index.htm
   git commit -m "Se añade toda la estructura de la zona de posts"
   ```

12. **Crear archivo `style.css`**  
   ```bash
   touch style.css
   ```

13. **Añadir estilos para `html` y `body` en `style.css`**  
   ```css
   html, body {
       margin: 0;
       padding: 0;
       font-family: Arial, sans-serif;
   }
   ```

14. **Crear commit para añadir CSS de `html` y `body`**  
   ```bash
   git add style.css
   git commit -m "Se añaden las CSS de html y body"
   ```

15. **Añadir estilos para elementos HTML5 en `style.css`**  
   ```css
   header, section, article, aside, footer {
       display: block;
       margin: 0;
       padding: 20px;
   }
   ```

16. **Crear commit para los estilos de elementos HTML5**  
   ```bash
   git add style.css
   git commit -m "Se añaden las CSS de varios elementos HTML5: header, section, article, aside, y footer"
   ```

17. **Añadir logotipo en el directorio raíz**  
   ```bash
   mv logo.png ~/bloggalpon/
   ```

18. **Crear commit para añadir logotipo**  
   ```bash
   git add logo.png
   git commit -m "Se añade el logotipo de Galpón"
   ```

19. **Añadir estilos para `section` en `style.css`**  
   ```css
   section {
       background-color: #f4f4f4;
       padding: 20px;
   }
   ```

20. **Crear commit para los estilos de `section`**  
   ```bash
   git add style.css
   git commit -m "Se añaden las CSS de section"
   ```

21. **Añadir estilos para el `footer` en `style.css`**  
   ```css
   footer {
       background-color: #333;
       color: #fff;
       text-align: center;
       padding: 10px 0;
   }
   ```

22. **Crear commit para los estilos de `footer`**  
   ```bash
   git add style.css
   git commit -m "Se añaden las CSS del footer"
   ```

23. **Añadir estilos para `h1` y enlaces en `style.css`**  
   ```css
   h1 {
       color: #333;
       font-size: 24px;
   }

   a {
       color: #3498db;
       text-decoration: none;
   }

   a:hover {
       text-decoration: underline;
   }
   ```

24. **Crear commit para los estilos de `h1` y enlaces**  
   ```bash
   git add style.css
   git commit -m "Se añaden las CSS del h1 y de los enlaces"
   ```

25. **Crear una etiqueta `v1.0`**  
   ```bash
   git tag v1.0
   ```

## Fin del proceso

# Let's extend the previous markdown content by adding the new steps related to the "desarrollo" and "bugfix" branches.
new_markdown_content = """
## Continuación: Gestión de ramas y tareas adicionales

### Rama "desarrollo"
1. **Crear una nueva rama de desarrollo**  

```bash
git checkout -b desarrollo
```
### Crear directorio de imágenes y mover el logotipo logo.png


```
mkdir images
mv logo.png images/

```

#### Crear commit para mover el logotipo a la carpeta images

```
git add images/logo.png
git commit -m "Se mueve el logotipo a la carpeta images"

```
#### Crear directorio de CSS y mover style.css

```bash
Copy code
mkdir css
mv style.css css/
```
#### Crear commit para mover el CSS a la carpeta css

```bash
git add css/style.css
git commit -m "Se mueve la CSS a la carpeta css"

```
#### Actualizar las referencias a CSS y logotipo en index.htm y style.css
#### Cambiar la referencia de CSS en el archivo index.htm:



```htmlñ
<link rel="stylesheet" href="css/style.css">
```
#### Cambiar la referencia al logotipo en style.css:

```css
background-image: url('../images/logo.png');
```
#### Crear commit para actualizar referencias a CSS e imágenes

```bash
git add index.htm css/style.css
git commit -m "Se actualizan las referencias a las CSS y al logotipo al reorganizar los directorios"
Rama "bugfix"
Crear rama bugfix a partir de master
```

```bash
git checkout master
git checkout -b bugfix

```
#### Eliminar comentarios en CSS para habilitar los bordes punteados
#### Buscar los comentarios //border en style.css y eliminarlos.

#### Crear commit para habilitar los punteados en barra derecha y footer

```bash
git add css/style.css
git commit -m "Se habilitan los bordes punteados en la barra derecha y el footer"
```

#### Introducir como título "Galpón"
#### Modificar el archivo index.htm para que el título sea:



```html
<title>Galpón</title>
```

#### Crear commit para añadir el título "Galpón"

```bash
git add index.htm
git commit -m "Se introduce el título 'Galpón' en la página"
```

#### Cambiar "2012" por "2014" en el footer y eliminar (c)
#### Modificar el footer en index.htm de la siguiente manera:

```html
<footer>
    &copy; 2014 Blog Galpón
</footer>
```

#### Crear commit para ajustes en el footer

```bash
git add index.htm
git commit -m "Se realizan pequeños ajustes en el footer"
```

#### Crear una etiqueta v1.1

```bash
git tag v1.1
```

#### Llevar los cambios a la rama master

```bash
git checkout master
git merge bugfix
```
#### Borrar la rama bugfix

```bash
git branch -d bugfix
```
