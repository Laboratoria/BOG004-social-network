// Este es el punto de entrada de tu aplicacion

import { home } from './home.js';
import { login } from './login.js';
import { register } from './register.js';

const content = document.getElementById('root');
const router = (route) => {
  content.innerHTML = '';
  switch (route) {
    case '': {
      content.appendChild(home());
      break;
    }
    case '#login':
      console.log(login());
      break;
    case '#register':
      content.appendChild(register());
      break;
    default:
      console.log('404');
      break;
  }
};

export { router };
