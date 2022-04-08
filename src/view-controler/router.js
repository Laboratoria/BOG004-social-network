// eslint-disable-next-line import/no-cycle
import { signOut, checkAuthStatus } from '../lib/auth.js';
// eslint-disable-next-line import/no-cycle
import { components } from '../view/index.js';
// este import está pendiente para ser movido a otro archivo

const changeView = async (hash) => {
  window.location.hash = hash;
  const sectionMain = document.getElementById('container');
  sectionMain.innerHTML = '';
  const user = await checkAuthStatus();
  switch (hash) {
    case '':
    case '#':
    case '#/': {
      if (user) {
        changeView('#/feed');
      }
      return sectionMain.appendChild(components.Home());
    }
    case '#/createUser': {
      if (user) {
        changeView('#/feed');
      }
      sectionMain.appendChild(components.User.createFormUser());
      components.User.saveUser();
      return sectionMain;
    }
    case '#/login': {
      if (user) {
        changeView('#/feed');
      }
      return sectionMain.appendChild(components.Login());
    }
    case '#/feed': {
      if (!user) {
        changeView('#/');
      }
      return sectionMain.appendChild(components.Feed());
    }
    case '#/cerrar-sesion': {
      signOut();
      window.location.hash = '#/';
      return '';
    }
    default:
      return sectionMain.appendChild(components.Different());
  }
};
export { changeView };
