# Rick and Morty App

![Logo de Rick and Morty](enlace-a-imagen-o-logo.png)

Esta es una aplicación web basada en Vue.js y Quasar Framework que muestra información sobre personajes de la famosa serie de televisión "Rick and Morty". La aplicación utiliza la [API pública de Rick and Morty](https://rickandmortyapi.com/) para obtener datos en tiempo real sobre los personajes, episodios y ubicaciones.

## Características Principales

- **Exploración de Personajes:** Navega a través de una lista de personajes con detalles como nombre, especie, origen y más.

- **Búsqueda Dinámica:** Utiliza una función de búsqueda para encontrar rápidamente tus personajes favoritos.

- **Interfaz Atractiva:** Diseño agradable y responsivo gracias a Quasar Framework.

## Instrucciones de Uso

### 1. Clonar el Repositorio

```bash
git clone <enlace-del-repositorio>
cd rick-morty-app

# Construir la imagen Docker
docker buildx build -t rickandmortyapp .

# Ejecutar el contenedor
docker run -p 8080:8080 rickandmortyapp


