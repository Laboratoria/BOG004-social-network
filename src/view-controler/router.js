<<<<<<< HEAD
import { components} from '../view/index.js'

const changeView = (hash) => {
  // const id = hash.split('/')[1];
=======
import { components } from '../view/index.js';

const changeView = (hash) => {
  location.hash = hash;
>>>>>>> 27662b55d1ed05b1e11ffe76f599b2389d47e272
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
      location.hash = '#/';
    }
    default:
      return sectionMain.appendChild(components.Different());
  }
};
export { changeView };

