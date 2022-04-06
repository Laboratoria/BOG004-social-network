// eslint-disable-next-line import/no-cycle
import { components } from '../view/index.js';
// este import está pendiente para ser movido a otro archivo

const changeView = (hash) => {
  window.location.hash = hash;
  const sectionMain = document.getElementById('container');
  sectionMain.innerHTML = '';
  switch (hash) {
    case '':
    case '#':
    case '#/': {
      return sectionMain.appendChild(components.Home());
    }
    case '#/createUser': {
      sectionMain.appendChild(components.User.createFormUser());
      components.User.saveUser();
      return sectionMain;
    }
    case '#/login': {
      return sectionMain.appendChild(components.Login());
    }
    case '#/profile': {
      return sectionMain.appendChild(components.Profile());
    }
    case '#/feed': {
      return sectionMain.appendChild(components.Feed());
    }
    case '#/interest': {
      return sectionMain.appendChild(components.Interest());
    }
    case '#/cerrar-sesion': {
      window.location.hash = '#/';
    }
    // eslint-disable-next-line no-fallthrough
    default:

      return sectionMain.appendChild(components.Different());
  }
};
export { changeView };
