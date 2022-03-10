export default class Router {

    constructor(rutas) {
        this.routes = rutas;
        this.loadInitialRoute();
    }

    // loadRoute(...urlSegs) {
    //   const matchedRoute = this.matchUrlToRoute(urlSegs);

    //   const url = `/${urlSegs.join('/')}`;
    //   window.history.pushState({}, 'texto', url);

    //   const eventoCambioRuta = new CustomEvent('cambioruta', { detail: { url } });

    loadRoute(urlSegs, push = true) {
        const matchedRoute = this.matchUrlToRoute(urlSegs);

        const url = `/${urlSegs}`;
        push && window.history.pushState({}, url, url);

        const routerOutElm = document.querySelectorAll('[data-router]')[0];
        routerOutElm.innerHTML = matchedRoute.template;
        matchedRoute.script()

        // const routerOutElm = document.querySelectorAll('[data-router]')[0];
        // routerOutElm.innerHTML = matchedRoute.template;

        // // Dispara evento personalizado 'para avisar que se cambio la ruta y se cargo la plantilla'

        // document.dispatchEvent(eventoCambioRuta);

    }

    // matchUrlToRoute(urlSegs) {
    //   const matchedRoute = this.routes.find((route) => {
    //     const routePathSegs = route.path.split('/').slice(1);

    //     if (routePathSegs.length !== urlSegs.length) {
    //       return false;
    //     }
    //     return routePathSegs.every((routePathSeg, i) => routePathSeg === urlSegs[i]);
    //   });

    //   return matchedRoute;
    // }

    matchUrlToRoute(urlSegs) {
        return this.routes.find((ruta) =>
            this.removeSlash(ruta.path) === urlSegs
        )
    }

    // loadInitialRoute() {
    //   const pathNameSplit = window.location.pathname.split('/');
    //   const pathSegs = pathNameSplit.length > 1 ? pathNameSplit.slice(1) : '';

    //   this.loadRoute(...pathSegs);
    // }

    loadInitialRoute() {
        const ruta = this.removeSlash(window.location.pathname)
        this.loadRoute(ruta, false);

    }

    removeSlash(path) {
        return path.substring(1)
    }

}