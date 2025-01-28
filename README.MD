# Final Utn Diplomatura Web Full Stack

## Descripción

Este proyecto es una API REST que administra las operaciones CRUD de tres modelos: **Users**, **Cars** y **Brands**. Está diseñado como parte del trabajo final de la Diplomatura en Desarrollo Web Full Stack de la UTN. La API permite gestionar usuarios, automóviles y marcas de manera eficiente y segura.

## Tecnologías

- **Node.js**
- **Express.js**
- **MongoDB** (con Mongoose)
- **jsonwebtoken**
- **bcrypt**
- **dotenv**

## Cómo Correr el Proyecto

### 1. Clonar el Repositorio

Primero, clona el repositorio en tu máquina local:

```bash
git clone https://github.com/RodrigoSola/FinalWebFullStackUtn.git
```

### 2. Instalar Dependencias

Accede a la carpeta raíz del proyecto e instala las dependencias necesarias:

```bash
cd FinalUtnWebFullStackDev
npm install
```

### 3. Levantar la Base de Datos

Asegúrate de tener MongoDB Compass instalado y conectado. Verifica que el archivo `.env` del proyecto coincide con la conexión a tu base de datos MongoDB.

### 4. Correr el Proyecto

Inicia el servidor de la API:

```bash
npm run dev
```

## Endpoints

### Users
- **GET** `/api/users/get`: Obtiene la lista de usuarios.
- **POST** `/api/users/create`: Crea un nuevo usuario.
- **PUT** `/api/users/update/:id`: Actualiza un usuario existente.
- **DELETE** `/api/users/delete/:id`: Elimina un usuario.
- **POST** `/api/users/login`: Inicia sesión con un usuario.

### Cars
- **GET** `/api/cars/get`: Obtiene la lista de coches.
- **POST** `/api/cars/create`: Crea un nuevo coche.
- **PUT** `/api/cars/update/:id`: Actualiza un coche existente.
- **DELETE** `/api/cars/delete/:id`: Elimina un coche.
- **GET** `/api/cars/get-by-id/:id`: Obtiene un coche por su ID.
- **POST** `/api/cars/get-by-name`: Busca coches por nombre.

### Brands
- **GET** `/api/brands/get`: Obtiene la lista de marcas.
- **POST** `/api/brands/create`: Crea una nueva marca.
- **PUT** `/api/brands/update/:id`: Actualiza una marca existente.
- **DELETE** `/api/brands/delete/:id`: Elimina una marca.

## Ejemplos de Datos Mock

### User
```json
{
  "name": "Rodrigo Noel",
  "lastName": "Sola",
  "email": "rsolas@hotmail.com",
  "password": "Qwerty123",
  "age": 30,
  "role": "admin"
}
```

### Brand
```json
{
  "name": "Peugeot"
}
```

### Car
```json
{
  "name": "Focus",
  "price": 50000000,
  "profit": 1.21,
  "stock": 10,
  "description": "Lo mejor de vivir",
  "status": "available",
  "brand": null,
  "highlighted": false
}
```

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama: `git checkout -b feature/nueva-funcionalidad`.
3. Realiza tus cambios y haz commit: `git commit -m 'Añadir nueva funcionalidad'`.
4. Envía un push a la rama: `git push origin feature/nueva-funcionalidad`.
5. Abre un Pull Request.

---

¡Gracias por tu interés en el proyecto! Si tienes preguntas, no dudes en abrir un issue en el repositorio.
