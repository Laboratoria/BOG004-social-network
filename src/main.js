// Este es el punto de entrada de tu aplicacion

import { router } from './routes.js';
import { iniciarFirebase } from './lib/firebase.js';

// firebase
window.addEventListener('hashchange', () => {
  router.loadRoute(router.removeSlash(window.location.hash), false);
});

iniciarFirebase();

window.addEventListener('popstate', () => {
  const removePath = router.removeSlash(window.location.pathname);
  router.loadRoute(removePath, false);
});
