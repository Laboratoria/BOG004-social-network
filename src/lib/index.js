import { components } from '../views/index.js';

const changeView = (route) => {
  const container = document.getElementById('root');
  container.innerHTML = '';
  switch (route) {
    case '':
      container.appendChild(components.record());
      break;
    case '#login':
      container.appendChild(components.login());
      break;
    default:
      console.log(window.location.hash);
  }
};

export { changeView };
