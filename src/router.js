export default class Router {
  constructor(rutas) {
    this.routes = rutas;
    this.loadInitialRoute();
  }

  loadRoute(urlSegs, push = true) {
    console.log(this.routes, urlSegs);
    const matchedRoute = this.matchUrlToRoute(urlSegs);

    const url = `/${urlSegs}`;

    if (push === true) {
      window.location.hash = url;
    }

    const routerOutElm = document.querySelectorAll('[data-router]')[0];
    routerOutElm.innerHTML = matchedRoute.template;
    matchedRoute.script();
  }

  matchUrlToRoute(urlSegs) {
    return this.routes.find((ruta) => this.removeSlash(ruta.path) === urlSegs);
  }

  loadInitialRoute() {
    const ruta = this.removeSlash(window.location.hash);
    console.log(window.location);
    this.loadRoute(ruta, false);
  }

  // eslint-disable-next-line class-methods-use-this
  removeSlash(path) {
    return path.substring(1);
  }

  // seccion 404.
}

// import { routes } from './routes.js';
// export const router = new Router(routes)
