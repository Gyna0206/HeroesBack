# Proyecto TodoList

## Descripción

Este proyecto es una API RESTful desarrollada con Express.js que permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en un modelo de super heroes.

## Funcionalidades

- Obtener todas los heroes. 
- Obtener un heroe por  su ID.
- Modificar un heroe
- Crear un heroe.
- Eliminar un heroe. 


## Tecnologías utilizadas
- JavaScript
- Node
- Expresss
- MongoDB
- Mongoose 

## Instalación
1. Clona este repositorio en tu maquina local
2. Navega al directorio del proyecto
3. Instala las dependencias necesarias:

```
npm init
npm install dotenv
npm install mongoose
```


## Uso 
1. Inicia la aplicación: 

```
node index.js
```


2. Accede al Hola mundo. 

http://localhost:3005/

3. Desde postman puedes probar los siguentes endpoints:
- localhost:3005/api/hero
- localhost:3005/api/hero/create con el siguiente json:

```
{
    "name":"superman",
}
```

- localhost:3005/api/hero/'id'
- localhost:3005/api/hero/delete/'id'
- localhost:3005/api/hero/update/'id':


```
{
    "name":"Hombrearaña"
}
```


## Autors

- [@Gyna Herrera](https://github.com/Gyna0206)