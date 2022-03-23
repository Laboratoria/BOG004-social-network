import { components } from '../views/objects.js';

const changeView = (route) => {
  const container = document.getElementById('container');
  container.innerHTML = '';
  switch (route) {
    case '#/register': { return container.appendChild(components.register()); }
    case '#/ecoTraveler': { return container.appendChild(components.ecotraveler()); }
    case '#/createAccount': { return container.appendChild(components.account()); }
    case '#/notFound': { return container.appendChild(components.notFound()); }
    default:
      break;
  }
  return route;
};
export { changeView };
