// import { components } from '../view/index.js';

export const changeTmp = (hash, components) => {
  // const id = hash.split('/')[1];
  const sectionMain = document.getElementById('container');
  sectionMain.innerHTML = '';

  switch (hash) {
    case '':
    case '#':
    case '#/':
    { return sectionMain.appendChild(components.home()); }
    case '#/login':
    { return sectionMain.appendChild(components.login()); }
    case '#/register':
    { return sectionMain.appendChild(components.register()); }
    case '#/feed':
    { return sectionMain.appendChild(components.feed()); }
    default:
      return sectionMain.appendChild(components.different());
  }
};
