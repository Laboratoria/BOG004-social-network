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
    case '#/register':
      containerRoot.appendChild(login());
      break;
    case '#/home':
      containerRoot.appendChild(daily());
      break;
    default:
      containerRoot.innerHTML = 'Oops Error 404';
  }
};
export const changeRoute = (hash) => {
  if (hash === '#/Login') {
    return showTemplate(hash);
  } if (hash === '#/register') {
    return showTemplate(hash);
  } if (hash === '#/daily') {
    return showTemplate(hash);
  }
  return showTemplate(hash);
};
