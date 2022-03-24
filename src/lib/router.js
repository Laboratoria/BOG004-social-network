// importamos todas las vistas, llamamos los templates y exportamos el cambio de ruta
import { components } from '../index.js';

const changeRoute = (hash) => {
  const containerRoot = document.getElementById('container');
  containerRoot.innerHTML = '';

  switch (hash) {
    case '':
    { return containerRoot.appendChild(components.register()); }
    case '#/login':
    { return containerRoot.appendChild(components.login()); }
    case '#/daily':
    { return containerRoot.appendChild(components.daily()); }
    default:
    { return containerRoot.appendChild(components.error404()); }
  }
};
export { changeRoute };
