// importamos todas las vistas, llamamos los templates y exportamos el cambio de ruta
import Register from './views/register.js';
import login from './views/login.js';
import daily from './views/daily.js';

const showTemplate = (hash) => {
  const containerRoot = document.getElementById('container');
  containerRoot.innerHTML = '';

  switch (hash) {
    case '':
      containerRoot.appendChild(Register());
      break;
    case '#/login':
      containerRoot.appendChild(login());
      break;
    case '#/daily':
      containerRoot.appendChild(daily());
      break;
    default:
      containerRoot.innerHTML = 'Oops Error 404';
  }
};
export const changeRoute = (hash) => {
  if (hash === '#/') {
    return showTemplate(hash);
  } if (hash === '#/login') {
    return showTemplate(hash);
  } if (hash === '#/daily') {
    return showTemplate(hash);
  }
  return showTemplate(hash);
};
