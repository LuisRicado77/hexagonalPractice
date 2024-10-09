# hexagonalPractice

Gestión de Eventos

Objetivo:
Desarrollar una aplicación backend que permita gestionar una lista de eventos. La aplicación deberá seguir la arquitectura hexagonal, permitir realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre una base de datos MongoDB, y contar con un catálogo de errores en la capa de dominio. Se utilizarán Express y TypeScript en un entorno Node.js, gestionando las variables de entorno con `dotenv`. Además, se empleará Joi para la validación de datos y Jest para realizar pruebas unitarias.

 Requisitos del Sistema:

1. Configuración Inicial:
   - Configura un proyecto de Node.js con TypeScript.
   - Instala y configura Express para gestionar las rutas.
   - Configura Mongoose para interactuar con la base de datos MongoDB.
   - Utiliza `dotenv` para gestionar las variables de entorno (por ejemplo, la URL de la base de datos MongoDB). Crea un archivo `.env` para almacenar estas variables y asegúrate de que el archivo esté en el `.gitignore`.
   - Instala y configura Joi para la validación de esquemas de entrada.
   - Instala y configura Jest para pruebas unitarias.

2. Modelo de Datos:
   - Crea un esquema para el modelo de Evento en Mongoose, que contenga los siguientes campos:
     - `title` (string): Título del evento.
     - `description` (string): Descripción del evento.
     - `date` (Date): Fecha y hora del evento.
     - `location` (string): Ubicación del evento.
     - `organizer` (string): Nombre del organizador del evento.

3. Arquitectura Hexagonal:
   - Capa de Dominio:
     - Define las entidades y la lógica de negocio relacionada con los eventos, incluyendo las reglas de negocio y las operaciones que se pueden realizar sobre las entidades.
     - Implementa un catálogo de errores para manejar excepciones específicas en la lógica de negocio.
   - Capa de Aplicación: Implementa los servicios de aplicación que interactúan con la capa de dominio para llevar a cabo operaciones CRUD. Los servicios actuarán como intermediarios entre la lógica de negocio y la infraestructura.
   - Capa de Infraestructura: Implementa los repositorios que interactúan con la base de datos (MongoDB) a través de Mongoose. Esta capa se encargará de la persistencia de datos.
   - Capa de Presentación: Define los manejadores de rutas que gestionan las solicitudes HTTP. Estos manejadores utilizarán los servicios de la capa de aplicación para realizar las operaciones solicitadas.

4. Validación de Datos:
   - Utiliza Joi para definir los esquemas de validación para las operaciones CRUD. Los datos del evento deben ser validados usando Joi antes de ser procesados por las rutas.
   - Crea un middleware de validación que use Joi para validar el cuerpo de las solicitudes para las siguientes rutas:
     - Crear Evento (POST `/events`).

5. Operaciones CRUD:
   - Crear Evento: Implementa una ruta POST `/events` que permita agregar un nuevo evento a la base de datos, utilizando el middleware de validación.
   - Leer Eventos:
     - Implementa una ruta GET `/events` que devuelva una lista de todos los eventos.
     - Implementa una ruta GET `/events/:id` que devuelva los detalles de un evento específico, identificado por su ID.
   - Actualizar Evento: Implementa una ruta PATCH `/events/:id` que permita actualizar la información de un evento existente, utilizando el middleware de validación.
   - Eliminar Evento: Implementa una ruta DELETE `/events/:id` que permita eliminar un evento específico de la base de datos.

6. Pruebas Unitarias:
   - Escribe pruebas unitarias para las funciones de negocio utilizando Jest. Asegúrate de cubrir tanto los casos de éxito como los errores esperados.

 Estructura de Proyecto (Scaffolding)











A continuación, un posible scaffolding del proyecto:


 Entregables:
- Código fuente completo del proyecto en GitHub.
- Parejas de 2 personas
- En el readme.md se debe detallar los integrantes del grupo

 Criterios de Evaluación:
- Cumplimiento de los requisitos funcionales especificados.
- Calidad y claridad del código.
- Implementación y uso adecuado del middleware de validación con Joi.
- Manejo adecuado de errores y validaciones a través del catálogo de errores.
- Uso correcto de `dotenv` para la gestión de variables de entorno.
- Estructura y organización del proyecto.
- Arquitectura hexagonal
- pruebas unitarias
