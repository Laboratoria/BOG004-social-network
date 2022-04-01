// Este es el punto de entrada de tu aplicacion

import { changeView } from './view-controler/route.js';

const init = () => {
  if (!window.location.hash) {
    window.location.hash = '#/register';
  }
  window.location.hash
  changeView(window.location.hash);
  window.addEventListener('hashchange', () => changeView(window.location.hash));
};

window.addEventListener('load', init);
