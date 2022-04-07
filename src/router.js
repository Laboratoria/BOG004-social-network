/* eslint-disable class-methods-use-this */
// Usamos método class constructor definiendo como miembros de la clase
// los parametros que recibe routes y loadInitialRoute.
export default class Router {
  constructor(rutas) {
    this.routes = rutas; // Array de rutas
    this.loadInitialRoute(); // carga la ruta inicial
  }

  getState() { // obtiene el estado de la sesion
    const usuario = JSON.parse(sessionStorage.getItem('user')); // obtenemos el usuario de sessionStorage
    if (usuario && usuario.emailVerified) { // si el usuario existe y esta verificado
      return 'logged'; // retornamos logged
    }
    return 'unlogged'; // si no retornamos unlogged
  }

  removeSlash(path) { // elimina los slash de la ruta
    return path.substring(1); // retorna la ruta sin slash
  }

  loadInitialRoute() { // carga la ruta inicial
    const ruta = this.removeSlash(window.location.hash); // obtenemos la ruta
    // console.log(window.location);
    this.loadRoute(ruta); // cargamos la ruta
  }

  loadRoute(ruta) { // carga la ruta
    const matchedRoute = this.matchUrlToRoute(ruta); // obtenemos la ruta
    // console.log(matchedRoute);
    const routerOutElm = document.getElementById('container'); // obtenemos el elemento container
    if (matchedRoute !== undefined) { // si la ruta existe
      // si el estado de la ruta es igual al estado de la sesion
      if (matchedRoute.state === this.getState()) {
        routerOutElm.innerHTML = matchedRoute.template; // cargamos la ruta
        matchedRoute.script(); // cargamos el script
      } else if (this.getState() === 'logged') { // si el estado de la sesion es logged
        window.location.hash = 'perfil'; // redireccionamos a perfil
      } else {
        window.location.hash = ''; // redireccionamos a home
      }
    } else { // si la ruta no existe
      routerOutElm.innerHTML = `<div class="no404"> <figure> 
      <img src="https://res.cloudinary.com/dtaq1ip2g/image/upload/v1647617297/404-removebg-preview_rdmlwg.png" alt="Trulli" style="width:100%">
      </figure></div>
      <footer></footer>`; // cargamos la ruta no encontrada
    }
  }

  matchUrlToRoute(ruta) { // obtiene la ruta
    return this.routes.find((rout) => this.removeSlash(rout.path) === ruta); // retorna la ruta
  }
} // fin de la clase
