// Este es el punto de entrada de tu aplicacion

import { router } from './lib/index.js';

/* Colocamos el router antes para que cuanto arranque
la app nos muestre nuestro inicio o home */

router(window.location.hash);
window.addEventListener('hashchange', () => {
  router(window.location.hash);
});


