import { changeView } from './view-controler/router.js';

const init = () => {
  changeView(window.location.hash);
  window.addEventListener('hashchange', () => changeView(window.location.hash));
};
window.addEventListener('load', init);

const showMenuMobile = (event) => {
  event.preventDefault();
  const menuMobile = document.getElementById('navMobile');
  menuMobile.style.display = 'inline';
};
const menuBtn = document.getElementById('menuBtn');
menuBtn.addEventListener('click', (event) => {
  showMenuMobile(event);
});
