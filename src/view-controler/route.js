import { components } from '../views/components.js';

const changeView = (route, _components = components) => {
  const container = document.getElementById('container');
  container.innerHTML = '';
  window.location.hash = route;
  switch (route) {
    case '#/register': { return container.appendChild(_components.register()); }
    case '#/ecoTraveler': { return container.appendChild(_components.ecotraveler()); }
    case '#/createAccount': { return container.appendChild(_components.account()); }
    default: { return container.appendChild(_components.notFound()); }
  }
};
export { changeView };
