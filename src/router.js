export default class Router {
    constructor(routes) {
        this.routes = routes;
        this.loadInitialRoute();
    }

    loadRoute(...urlSegs) {
        const matchedRoute = this.matchUrlToRoute(urlSegs);

        const url = `/${urlSegs.join('/')}`;
        history.pushState({}, 'texto', url);

        const eventoCambioRuta = new CustomEvent("cambioruta", { detail: { url: url } })

        const routerOutElm = document.querySelectorAll('[data-router]')[0];
        routerOutElm.innerHTML = matchedRoute.template;
        //Dispara evento personalizado "para avisar que se cambio la ruta y se cargo la plantilla"
        document.dispatchEvent(eventoCambioRuta);
    }

    matchUrlToRoute(urlSegs) {
        const matchedRoute = this.routes.find((route) => {
            const routePathSegs = route.path.split('/').slice(1);

            if (routePathSegs.length !== urlSegs.length) {
                return false;
            }

            return routePathSegs.every((routePathSeg, i) => routePathSeg === urlSegs[i]);
        });

        return matchedRoute;
    }

    loadInitialRoute() {
        const pathNameSplit = window.location.pathname.split('/');
        const pathSegs = pathNameSplit.length > 1 ? pathNameSplit.slice(1) : '';

        this.loadRoute(...pathSegs);
    }
}