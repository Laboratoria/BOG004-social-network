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
    console.log('bbbbbbb', ruta);
    const matchedRoute = this.matchUrlToRoute(ruta);
    const routerOutElm = document.getElementById('container');
    routerOutElm.innerHTML = matchedRoute.template;
    matchedRoute.script();
  }

  matchUrlToRoute(ruta) {
    console.log('aaaaaaaaaaaaaaaaaa', ruta);
    return this.routes.find((rout) => this.removeSlash(rout.path) === ruta);
  }
}
