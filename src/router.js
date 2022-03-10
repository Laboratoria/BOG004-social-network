export default class Router {
  constructor(rutas) {
    this.routes = rutas;
    this.loadInitialRoute();
  }

  loadRoute(urlSegs, push = true) {
    const matchedRoute = this.matchUrlToRoute(urlSegs);

    const url = `/${urlSegs}`;
    push && window.history.pushState({}, url, url);

    const routerOutElm = document.querySelectorAll('[data-router]')[0];
    routerOutElm.innerHTML = matchedRoute.template;
    matchedRoute.script();
  }

  matchUrlToRoute(urlSegs) {
    return this.routes.find((ruta) => this.removeSlash(ruta.path) === urlSegs);
  }

  loadInitialRoute() {
    const ruta = this.removeSlash(window.location.pathname);
    this.loadRoute(ruta, false);
  }

  removeSlash(path) {
    return path.substring(1);
  }
}
