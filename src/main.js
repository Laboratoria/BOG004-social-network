import { changeView } from './view-controler/router.js';
let menu = 'closedMenu';
const init = () => {
  changeView(window.location.hash);
  window.addEventListener('hashchange', () => changeView(window.location.hash));
};
window.addEventListener('load', init);

const showMenuMobile = (event) => {
  event.preventDefault();
  const menuMobile = document.getElementById('navMobile');
  if (menu == 'closedMenu'){
    menuMobile.style.display = 'inline';
    menu = 'openMenu';
  }
  else{
    menuMobile.style.display = 'none';
  menu = 'closedMenu';
  }
};
const menuBtn = document.getElementById('menuBtn');
menuBtn.addEventListener('click', (event) => {
  showMenuMobile(event);
});
