import register from './lib/views/register.js';
import { changeRoute } from './lib/router.js';
import { components } from './index.js';

const init = () => {
  document.getElementById('container').appendChild(register());
  changeRoute(window.location.hash, components);
  window.addEventListener('hashchange', () => {
    changeRoute(window.location.hash, components);
  });
};
window.addEventListener('load', init);
