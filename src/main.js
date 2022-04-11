// Este es el punto de entrada de tu aplicacion

import { router } from './routes.js';

// hashchange es un evento que se dispara cuando el hash de la URL cambia
window.addEventListener('hashchange', () => {
  router.loadRoute(router.removeHash(window.location.hash)); // cargamos la ruta
});

// window.addEventListener('popstate', () => { // cuando se hace un popstate
//   const removePath = router.removeSlash(window.location.pathname); // obtenemos la ruta
//   router.loadRoute(removePath); // cargamos la ruta
// });
