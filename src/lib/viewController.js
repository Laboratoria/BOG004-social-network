// eslint-disable-next-line import/no-cycle
import { components } from './components.js';

const changeView = (route) => {
  const container = document.getElementById('container');
  container.innerHTML = '';
  window.location.hash = route;
  switch (route) {
    case '#/home': {
      return container.appendChild(components.buttons());
    }
    case '#/signUp': {
      return container.appendChild(components.SignUp());
    }
    case '#/signIn': {
      return container.appendChild(components.SignIn());
    }
    case '#/post': {
      return container.appendChild(components.post());
    }
    default:
      break;
  }
  return route;
};

export { changeView };
