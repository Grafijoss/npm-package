# Crear paquete para NPM

- Creamos la funcionalidad y exportamos el modulo
- Dentro de la carpeta bin y dentro creamos el archivo global.js
- #!/usr/bin/env node indicamos que el paquete se va a ejecutar dentro de bash
- Añadimos el apartado bin en el package.json
- En bin registramos el nombre del paquete y el path del archivo que estamos llamando
- preferGlobal Este apartado indica que el apquete se va a ejecutar de forma global 

## Probar el paquete de forma global

- npm link: Dentro de la carpeta del paquete
- npm install -g [path del paquete]
- npm link --force: En el caso que no se deje actualizar

##  Login desde terminal

- npm adduser
- usuario
- contraseña

##  Commitiar package

- npm publish: Lee la configuración del package.json y establece esa configuración en nuestro manejador de paquetes npm -  Genera documentación y recursos

##  Problemas

- You do not have permission to publish "random-messages". Cambiar el name en el package.json por que ya esta registrado en npm

##  Standard

- README
- El README debe estar en ingles
- Conectarlo con un repositorio
- Pruebas unitarias