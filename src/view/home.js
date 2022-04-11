import { GoogleAuthProvider } from '../lib/firebase-utils.js';
// eslint-disable-next-line import/no-cycle
import { authGoogle } from '../lib/auth.js';
// eslint-disable-next-line import/no-cycle
import { changeView } from '../view-controler/router.js';

export default () => {
  document.querySelector('header').style.display = 'none';
  document.querySelector('#sectionGrid').style.display = 'block';
  const container = document.createElement('div');
  container.classList.add('container');

  const leftColumn = document.createElement('div');
  leftColumn.classList.add('leftColumn');
  const viewLeft = '<img id="homeImg" src="https://raw.githubusercontent.com/MafeValenciaCastillo/BOG004-social-network/main/src/img/home-img.png" alt="boot_image">';
  leftColumn.innerHTML = viewLeft;
  container.appendChild(leftColumn);

  const rightColumn = document.createElement('div');
  rightColumn.classList.add('rightColumn');
  const viewRight = `
    <img id='nibblesLogo' src='https://raw.githubusercontent.com/MafeValenciaCastillo/BOG004-social-network/main/src/img/logo-nibbles.png' alt='logo-nibbles'>
    <button id='loginBtn'>Ingresa</button>
    <button id='createUserBtn'>Crear cuenta</button>
    <p class='parraf-google'>Conéctate con</p>
    <hr class='divider'>
    <img class='googleLogo 'src='https://raw.githubusercontent.com/MafeValenciaCastillo/BOG004-social-network/main/src/img/google.png' alt='ingresa-con-google'>`;
  rightColumn.innerHTML = viewRight;
  container.appendChild(rightColumn);

  const loginBtn = container.querySelector('#loginBtn');
  loginBtn.addEventListener('click', () => {
    changeView('#/login');
  });
  const createUsernBtn = container.querySelector('#createUserBtn');
  createUsernBtn.addEventListener('click', () => {
    changeView('#/createUser');
  });
  const googleButton = container.querySelector('.googleLogo');
  const provider = new GoogleAuthProvider();
  googleButton.addEventListener('click', async () => {
    const respuesta = await authGoogle(provider);
    if (respuesta === true) {
      changeView('#/feed');
    } else {
      // console.log(respuesta);
    }
  });
  return container;
};
