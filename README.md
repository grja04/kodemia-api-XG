
# API express + mongoose

## index.json
Este archivo tiene la tarea de levantar nuestra aplicación

## server.js
Este archivo guarda la definición del servidor 
- Que rutas van a existiring
- Que middlewares se van a usar 
- Aqui se montan los reouters al servidor

## models
Alberga nuestros modelos de bases de datos
> Un modelo es la representación de una colección y consta de un nombre de colección y un schema 

## usecases
ALberga funciones que pueden ejectuar el usuario en el sistema 
> Agrupada por entidades 

## routes
Alberga las rutas de nuestro servidores
> Agrupadas por entidades

## lib
Alberga codigo reutilizable a traves de todas las capas de la arquitectura 

## Proceso de desarrollo

Este es el proceso que debemos seguir cuando necesitamos agregrar un nuevo endpoint (feature) a nuestra API

1. Modelos: Asegurarnos de tener el acceso a datos que necesitamos para la tarea o crear el modelo 
2. UseCases: Asegurarnos de tener las funciones necesarias para la tareao crear el caso de uso necesario
3. Router: Asegurarnos de tener la ruta(s) necesarias o crear la ruta?router necesaria(o)
4. Asegurarnos de que nuestros router esta montado en el server, sino proceder a montarlo 