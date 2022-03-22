export default class Router {
  constructor(rutas) {
    this.routes = rutas;
    this.loadInitialRoute();
  }

  // eslint-disable-next-line class-methods-use-this
  removeSlash(path) {
    return path.substring(1);
  }

  loadInitialRoute() {
    const ruta = this.removeSlash(window.location.hash);
    // console.log(window.location);
    this.loadRoute(ruta);
  }

  loadRoute(ruta) {
    const matchedRoute = this.matchUrlToRoute(ruta);
    // console.log(matchedRoute);
    const routerOutElm = document.getElementById('container');
    if (matchedRoute !== undefined) {
      routerOutElm.innerHTML = matchedRoute.template;
      matchedRoute.script();
    } else {
      routerOutElm.innerHTML = `<div class="no404"> <figure>
      <img src="https://res.cloudinary.com/dtaq1ip2g/image/upload/v1647617297/404-removebg-preview_rdmlwg.png" alt="Trulli" style="width:100%">
      </figure></div>
      <footer></footer>`;
    }
  }

  matchUrlToRoute(ruta) {
    return this.routes.find((rout) => this.removeSlash(rout.path) === ruta);
  }
}
