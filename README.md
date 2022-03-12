Instrucciones.
--------------

 1.- Se debe instalar los siguientes paquetes en Node:
     npm i -D nodemon
     npm i express
     npm i express-handlebars
     npm i dotenv
     npm i pg
     npm i body-parser

 2.- Ingresar a postgress con SQL Shell (psql) con su cuenta:
      - Revisar que exista la Base de datos sino revisar archivo data.sql si esta correcta las instrucciones debes ir al terminal y ejecutar la siguiente instrucción: node migrate.js.

 3.- En el archivo api.js existen las rutas para las API.-

 4.- En el archivo front.js existen las rutas para el Front.

 5.- En el archivo creaCliente.handlebard esta la pantalla donde muestra todos los clientes y permite crear nuevos clientes.

 6.- En el archivo eliminaCliente.handlebard esta la pantalla donde nos permite decidir si se elimina un cliente.

 7.- En el archivo home.handlebard esta la pantalla donde nos muestra todos los clientes.

 8.- En el archivo main.handlebard esta la pantalla principal con su respectivo body.

 9.- En el archivo server.js tenemos el programa principal donde incorporamos los paquetes necesarios para la ejecución del proyecto.

10.- La ejecución la hacemos con el paquete nodemon de la siguiente manera:
     nodemon server.js.-
