import { components} from '../view/index.js'

const changeView = (hash) => {
  // const id = hash.split('/')[1];
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
