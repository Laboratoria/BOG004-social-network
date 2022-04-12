import { components } from '../lib/index.js';

const changeViews = (route) => {
  const container = document.getElementById('container');
  container.innerHTML = '';
  switch (route) {
    case '':
    { return container.appendChild(components.home()); }
    case '#/':
    { return container.appendChild(components.home()); }
    case '#/signUp':
    { return container.appendChild(components.signUp()); }
    case '#/signIn':
    { return container.appendChild(components.signIn()); }
    case '#/timeline':
    { return container.appendChild(components.timeline()); }
    default:
    // eslint-disable-next-line no-lone-blocks
    { return container.appendChild(components.error()); }
  }
};

export { changeViews };
