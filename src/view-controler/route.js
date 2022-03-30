import { components } from '../views/components.js';

const changeView = (route, components = componentsTest) => {
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
