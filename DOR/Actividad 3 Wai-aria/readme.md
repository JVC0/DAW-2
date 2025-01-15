### Alert
```html
<div id="liveAlertPlaceholder"></div>
<button type="button" class="btn btn-primary" id="liveAlertBtn">Show live alert</button>
```
```html
<div id="liveAlertPlaceholder" role="alert" aria-live="assertive" aria-atomic="true"></div>
<button type="button" class="btn btn-primary" id="liveAlertBtn" aria-label="Show live alert">Show live alert</button>
```
### Se agregó el atributo role con el valor "alert" para indicar que el elemento es un mensaje de alerta.
### Se agregó el atributo aria-live con el valor "assertive" para indicar que el contenido del elemento es importante y debe ser leído por los lectores de pantalla.
### Se agregó el atributo aria-atomic con el valor "true" para indicar que el contenido del elemento debe ser leído completamente antes de que se produzca cualquier cambio en el contenido.
### Se agregó el atributo aria-label al botón para proporcionar una descripción más clara de su función.


### BreadCrumb

```html
<nav style="--bs-breadcrumb-divider: '>';">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item active">Library</li>
  </ol>
</nav>

```html
<nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb" role="navigation">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#" aria-label="Home">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page" aria-label="Library">Library</li>
  </ol>
</nav>
```
### Se agregó el atributo role con el valor "navigation" para indicar que el elemento es de navegación.
### Se agregó el atributo aria-label  para proporcionar una descripción más clara de su función.
### Se agregó el atributo aria-current con el valor "page" para indicar que el elemento es la página actual.


### Dropdown 

```html
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
    Dropdown button
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
```

```html
<div class="dropdown" role="menu" aria-label="Dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" aria-label="Dropdown button">
    Dropdown button
  </button>
  <ul class="dropdown-menu" role="menu" aria-label="Dropdown menu">
    <li><a class="dropdown-item" href="#" role="menuitem" aria-label="Action">Action</a></li>
    <li><a class="dropdown-item" href="#" role="menuitem" aria-label="Another action">Another action</a></li>
    <li><a class="dropdown-item" href="#" role="menuitem" aria-label="Something else here">Something else here</a></li>
  </ul>
</div>
```
### Se agregó el atributo aria-label al botón para proporcionar una descripción más clara de su función, ya que los lectores de pantalla pueden tener dificultades para entender el propósito del botón sin una etiqueta clara.
### Se agregó el atributo role con el valor "menu" para indicar que el elemento es un menu, lo que ayuda a los lectores de pantalla a entender la estructura de la página y navegar de manera más efectiva.
### Se agregó el atributo aria-expanded para indicar el estado actual del menú, lo que permite a los lectores de pantalla saber si el menú está abierto o cerrado y tomar decisiones informadas sobre cómo interactuar con él.

### Card

```html
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary" aria-label="Go somewhere">Go somewhere</a>
  </div>
</div>
```

```html
<div class="card" style="width: 18rem;" role="region" aria-label="Card">
  <img src="..." class="card-img-top" alt="..." role="img" aria-label="...">
  <div class="card-body">
    <h5 class="card-title" role="heading" aria-level="2">Card title</h5>
    <p class="card-text" role="definition">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary" aria-label="Go somewhere" role="button">Go somewhere</a>
  </div>
</div>
```
### Se agregó el atributo role con el valor "region" para indicar que el elemento es de region.
### Se agregó el atributo aria-current con el valor "page" para indicar que el elemento es la página actual.
### Se agregó el atributo role con el valor "navigation" para indicar que el elemento es de definition.
### Se agregó el atributo aria-label para proporcionar una descripción más clara de su función.

### Badge
```html
<button type="button" class="btn btn-primary position-relative">
  Inbox
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    99+
    <span class="visually-hidden">unread messages</span>
  </span>
</button>
```

```html
<button type="button" class="btn btn-primary position-relative" aria-label="Inbox" role="button">
  Inbox
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" aria-label="99+ unread messages" role="status">
    99+
    <span class="visually-hidden">unread messages</span>
  </span>
</button>

```
### Se agregó el atributo aria-label al botón para proporcionar una descripción más clara de su función.
### Se agregó el atributo role con el valor "button" para indicar que el elemento es un botón.
### Se agregó el atributo role con el valor "status" para indicar que el elemento es un estado.
