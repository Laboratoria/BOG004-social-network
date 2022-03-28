import { changeTmp } from './view-controller/router.js';
import { components } from './view/index.js';

const init = () => {
  changeTmp(window.location.hash, components);
  window.addEventListener('hashchange', () => changeTmp(window.location.hash, components));
};

window.addEventListener('load', init);
