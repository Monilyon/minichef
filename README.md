# Minichef - Proyecto de Recetas de Cocina

Minichef es una plataforma web interactiva creada para poner en práctica los conocimientos adquiridos en el curso de **Diseño de Interfaces Web**. Esta página web permite a los usuarios descubrir nuevas recetas, guardarlas como favoritas y explorar una variedad de platos gastronómicos.

## Descripción del Proyecto

Minichef es una página que presenta diferentes recetas de cocina organizadas en un formato fácil de usar. Los usuarios deben iniciar sesión para acceder a las recetas y funcionalidades adicionales. El proyecto tiene tres secciones principales en el **header**:

1. **Home**: Página principal que muestra un eslogan y una receta recomendada del día.
2. **Recetas**: Sección donde se muestran las recetas disponibles, organizadas en "cards". Cada receta tiene una breve descripción y dos botones interactivos: uno para ver los detalles de la receta y otro para marcarla como favorita.
3. **Favoritos**: En esta sección se muestran las recetas que el usuario ha marcado como favoritas.

## Características

- **Inicio de sesión**: Los usuarios deben iniciar sesión para acceder a las recetas y marcar sus favoritas.
- **Home**: Al iniciar sesión, se redirige a la página principal que contiene un eslogan y la receta recomendada del día.
- **Recetas**: Presenta una lista de recetas organizadas en "cards". Cada card incluye:
  - Imágen del plato
  - Nombre del plato
  - Breve descripción del plato.
  - Un botón para desplegar la receta con su imagen, ingredientes y pasos a seguir.
  - Un botón en forma de corazón para marcar la receta como favorita.
- **Favoritos**: Esta sección permite ver todas las recetas que el usuario ha marcado como favoritas, mostrando las mismas "cards" de recetas pero solo las seleccionadas.

## Estructura del Proyecto

El proyecto está construido con **Minify.js** y **Bootstrap** y consta de los siguientes archivos y directorios principales:
```
C:
├───public
│ └───mockdata
└───src
├───img
├───js
│ ├───components
│ │ ├───card.js
│ │ ├───footer.js
│ │ ├───navbar.js
│ └───views
│ ├───detail.js
│ ├───home.js
│ ├───login.js
│ ├───template.js
│ ├───auth.js
│ ├───bootstrap.js
│ ├───main.js
│ ├───navigation.js
│ ├───state.js
│ ├───utils.js
│ ├───views.js
└───scss
└───index.html
```

## Para llevar a cabo este proyecto he utilizado:
* HTML5: Estructura del contenido de la página web.
* CSS3: Estilos para el diseño y la presentación de la interfaz.
* JavaScript: Funcionalidad dinámica, como la gestión de usuarios, la visualización de recetas y la gestión de favoritos.
* Minify.js: Herramienta utilizada para la optimización del código.
* Bootstrap: Framework CSS utilizado para el diseño responsivo y los componentes de la interfaz, como botones, cards, y el layout flexible.
