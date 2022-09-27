# Project-LitElement

Proyecto desarrollado con LitElement cuyo objetivo es conocer sobre esta tecnología.

### 📍1. ¿Cómo instalar LitElement para empezar a desarrollar?

- Instalar Polymer CLI en el ordenador `npm intall polymer-cli`.
- Inicializar npm con `npm init`.
- Instalar LitElement con el comando `npm install lit-element`.
- 4. Una vez que se haya terminado de instalar, inicializar LitElement con el mismo comando.

### 📍2. Para hacer el build del proyecto

Podemos hacerlo con Polymer pero en este caso, usaré webpack de la siguiente forma:

- En la terminal, ejecutar el comando `npm install -D webpack webpack-cli`.
- Ir al package.json y crear dentro del script lo siguiente `"build": "webpack --mode production"`.
- Luego ir a la terminal y ejecutar el comando `npm run build`. Para producir los archivos que usaré en producción.
- Una vez que se termine de ejecutar, en el listado de nuestros archivos se creará na carpeta llamada **dist** y dentro un archivo *main.js* (el archivo empaquetado con todos mis componentes y dependencias de LitElement).

*Para actualizar el archivo main.js se debe de ejecutar nuevamente el comando*  `npm run build`

