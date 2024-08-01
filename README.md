# Desafio-firebase-autenticacion

![alt](./public/Captura%20de%20pantalla%202024-08-01%20161711.png)

![alt](./public/Captura%20de%20pantalla%202024-08-01%20161740.png)

![alt](./public/Captura%20de%20pantalla%202024-08-01%20161805.png)


### Firebase Authentication with Vue.js
Este proyecto es una aplicación web simple que implementa autenticación de usuarios usando Firebase y Vue.js. Permite a los usuarios registrarse, iniciar sesión y acceder a una vista protegida cuando están autenticados.

### Tecnologías Utilizadas
<ul>
<li>Vue.js: Framework de JavaScript para construir interfaces de usuario.
Firebase: Plataforma de desarrollo de aplicaciones web y móviles, utilizada aquí para la autenticación de usuarios.</li>
<li>Vuex: Gestión del estado centralizado para Vue.js.
Vue Router: Sistema de enrutamiento oficial de Vue.js para crear aplicaciones SPA (Single Page Applications).</li>

</ul>

### Estructura del Proyecto
<ul>
<li>src/config/firebaseConfig.js: Configuración de Firebase y funciones de autenticación.
src/router/index.js: Configuración de rutas y protección de rutas con un guardián de autenticación.</li>
<li>src/store/index.js: Configuración de Vuex para gestionar el estado global del usuario autenticado.</li>
<li>src/views: Vistas de la aplicación (Login, Registro, Home).
Configuración de Firebase</li>
</ul>


Iniciar Firebase: El proyecto está configurado para usar Firebase para la autenticación. Asegúrate de tener una cuenta de Firebase y de crear un proyecto.
Configuración: En el archivo src/config/firebaseConfig.js, reemplaza los valores en firebaseConfig con los de tu proyecto de Firebase.

## Funcionalidades
<ul>
<li>Registro de Usuario: Permite a los usuarios registrarse con un correo electrónico y contraseña.</li>
<li>Inicio de Sesión: Los usuarios pueden iniciar sesión con sus credenciales.</li>
<li>Vista Protegida: La vista Home está protegida y solo es accesible si el usuario está autenticado.</li>
<li>
Guardado de Estado del Usuario: El estado de autenticación del usuario se gestiona a través de Vuex.
</li>
</ul>

<!-- nota : 

Falta complementar un cierre de sesion, y un aviso cuando no tenga un correo valido. 
Por alguna razpn despues del login al recargar la pagina se cae, no entiendo porque, con el npm run serve no me ocurre, pero una vez esta montado si pasa.
Nos guiamos basicamente con lo que el profesor realizo. -->



## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
