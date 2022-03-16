// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';

// myFunction();

import { changeTmp } from './view-controller/router.js';

const init = () => {
    changeTmp(window.location.hash);
    window.addEventListener('hashchange', () => changeTmp(window.location.hash));
};

window.addEventListener('load', init);

