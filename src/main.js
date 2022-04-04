// Este es el punto de entrada de tu aplicacion

import { router } from './routes.js';

// firebase
window.addEventListener('hashchange', () => {
  router.loadRoute(router.removeSlash(window.location.hash));
});

// window.addEventListener('popstate', () => {
//   const removePath = router.removeSlash(window.location.pathname);
//   router.loadRoute(removePath);
// });
// esta seccion de popstate da undefined si console.log router.loadRoute(removePath);
