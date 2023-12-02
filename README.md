# Rick and Morty App

![Logo de Rick and Morty](https://1000marcas.net/wp-content/uploads/2022/04/Rick-and-Morty.png)

Esta es una aplicación web basada en Vue.js y Quasar Framework que muestra información sobre personajes de la famosa serie de televisión "Rick and Morty". La aplicación utiliza la [API pública de Rick and Morty](https://rickandmortyapi.com/) para obtener datos en tiempo real sobre los personajes, episodios y ubicaciones.

## Características Principales

- **Exploración de Personajes:** Navega a través de una lista de personajes con detalles como nombre, especie, origen y más.

- **Búsqueda Dinámica:** Utiliza una función de búsqueda para encontrar rápidamente tus personajes favoritos.

## Instrucciones de Uso

```bash
# 1. Clonar el Repositorio
git clone <enlace-del-repositorio>
cd rick-morty-app

# 2. Construir y Ejecutar con Docker
# Primero, asegúrate de tener Docker instalado en tu máquina.
docker buildx build -t rickandmortyapp .
docker run -p 8080:8080 rickandmortyapp

# 3. Acceder a la Aplicación
# Abre tu navegador y visita http://localhost:8080.
```
