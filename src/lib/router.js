import { components } from '../views/index.js';
import { getUser, closeSession } from '../firebase/controlerfirebase.js';

// eslint-disable-next-line consistent-return
const changeView = (route) => {
  const container = document.getElementById('root');
  container.innerHTML = '';
  // eslint-disable-next-line no-console
  console.log(window.location.hash);
  switch (route) {
    case '': {
      if (getUser() != null) {
        console.log(`Route ${route} user null`);
        closeSession();
      }
      return container.appendChild(components.record());
    }

    case '#login': {
      if (getUser() != null) {
        console.log(`Route ${route} user null`);
        closeSession();
      }
      return container.appendChild(components.login());
    }

    case '#wall': {
      if (getUser() == null) {
        console.log(`Route ${route} user null`);
        window.location.hash = '';
      }
      return container.appendChild(components.wall());
    }

    case '#blogs':
    { return container.appendChild(components.blogs()); }

    case '#books':
    { return container.appendChild(components.books()); }

    case '#featured':
    { return container.appendChild(components.featured()); }

    case '#mostrecent':
    { return container.appendChild(components.mostrecent()); }

    case '#people':
    { return container.appendChild(components.people()); }

    case '#picture':
    { return container.appendChild(components.picture()); }

    default:
    { return container.appendChild(components.different()); }
  }
};

export { changeView };
