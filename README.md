# venta_zapatillas
Api_backend para traer productos y consultar precios

# API para tienda de zapatillas

Esta es una API desarrollada en Node.js utilizando Express.js y MongoDB para una tienda de zapatillas. La API proporciona dos rutas públicas: `/products` y `/price/:user_id/:nombre_producto`.

## Requisitos previos

- Node.js instalado en tu sistema (preferiblemente la versión LTS).
- MongoDB instalado y en ejecución.

## Instalación

1. Clona este repositorio en tu máquina local:
2. Navega al directorio de la aplicación:
3. Instala las dependencias necesarias:
4. Configura la conexión a MongoDB:

- Abre el archivo `app.js`.
- Busca la línea donde se conecta a la base de datos MongoDB.
- Reemplaza `<password>` con tu contraseña de MongoDB.

## Uso

1. Inicia el servidor:
   El servidor estará disponible en `http://localhost:3000`.

3. Accede a las rutas de la API:

- `/products`: Retorna un array con los productos disponibles en stock.
- `/price/:user_id/:nombre_producto`: Retorna el precio especial para el cliente con el ID especificado y el producto con el nombre especificado, si está disponible. De lo contrario, retorna el precio base del producto.

Ejemplo de solicitud con curl:

```bash
curl http://localhost:3000/price/123/producto1


Este archivo `README.md` proporciona instrucciones claras sobre cómo instalar, ejecutar y usar tu aplicación, así como detalles sobre cómo contribuir, desplegar y contactar al equipo de desarrollo. Recuerda personalizar la información según las necesidades específicas de tu proyecto.

