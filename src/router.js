export default class Router {
  constructor(routes) {
    this.routes = routes;
    this.loadInitialRoute();
  }

  loadRoute(...urlSegs) {
    const matchedRoute = this.matchUrlToRoute(urlSegs);

    const url = `/${urlSegs.join('/')}`;
    history.pushState({}, 'texto', url);

    const routerOutElm = document.querySelectorAll('[data-router]')[0];
    routerOutElm.innerHTML = matchedRoute.template;
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
