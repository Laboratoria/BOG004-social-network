import { components } from '../view/index.js';

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
      console.log('usuario cerró sesion');
      window.location.hash = '#/';
    }
    default:
      return sectionMain.appendChild(components.Different());
  }
};
export { changeView };
