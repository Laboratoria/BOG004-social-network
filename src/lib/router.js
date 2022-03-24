// importamos todas las vistas, llamamos los templates y exportamos el cambio de ruta
// import Register from './views/register.js';
// import login from './views/login.js';
// import daily from './views/daily.js';
// import error404 from './views/404.js';
import { components } from '../index.js';

const changeRoute = (hash) => {
  const containerRoot = document.getElementById('container');
  containerRoot.innerHTML = '';

  switch (hash) {
    case '':
    // containerRoot.appendChild(Register());
    // break;
    { return containerRoot.appendChild(components.register()); }

    case '#/login':
    // containerRoot.appendChild(login());
    // break;
    { return containerRoot.appendChild(components.login()); }
    case '#/daily':
    // containerRoot.appendChild(daily());
    // break;
    { return containerRoot.appendChild(components.daily()); }
    default:
    { return containerRoot.appendChild(components.error404()); }
  }
};
export { changeRoute };

// export const changeRoute = (hash) => {
//   if (hash === '#/') {
//     return showTemplate(hash);
//   } if (hash === '#/login') {
//     return showTemplate(hash);
//   } if (hash === '#/daily') {
//     return showTemplate(hash);
//   }
//   return showTemplate(hash);
// };
