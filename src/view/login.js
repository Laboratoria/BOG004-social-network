// eslint-disable-next-line import/no-cycle
import { login, authGoogle } from '../lib/auth.js';
import { GoogleAuthProvider } from '../lib/firebase-utils.js';
// eslint-disable-next-line import/no-cycle
import { changeView } from '../view-controler/router.js';

export default () => {
  document.querySelector('#sectionGrid').style.display = 'block';
  const viewLogin = `
    <div class='containerLogin'>
      <button class='returnBtn'><</button>
      <h2 class='text.center'> ¡Hola! </h2>
      <form class='formLogin' id="login-form">
        <input type='text' id='loginEmail' class='inputForm' placeholder='e-mail' required input/>
        <input type='password' id='loginPassword' class='inputForm' placeholder='Contraseña' required></input>
        <p id='messageAlert'></p>
        <button type='submit' id='btnLogin'>Iniciar sesión</button>
      </form>
      <p class='parraf-google'>Conéctate con</p>
      <hr class='divider'>
      <img class='googleLogo' src='https://raw.githubusercontent.com/MafeValenciaCastillo/BOG004-social-network/main/src/img/google.png' alt='ingresa-con-google'>
    </div>`;

  const divLogin = document.createElement('div');
  divLogin.setAttribute('id', 'login');
  divLogin.innerHTML = viewLogin;

  divLogin.querySelector('#login-form').addEventListener('submit', (e) => {
    e.preventDefault(); // previene la recarga por defecto de la página
    const email = divLogin.querySelector('#loginEmail').value;
    const password = divLogin.querySelector('#loginPassword').value;
    login(email, password);
  });
  const googleButton = divLogin.querySelector('.googleLogo');
  const provider = new GoogleAuthProvider();
  googleButton.addEventListener('click', async () => {
    const respuesta = await authGoogle(provider);
    if (respuesta === true) {
      changeView('#/feed');
    } else {
      // console.log('error al iniciar sesión');
    }
  });
  const returnBtn = divLogin.querySelector('.returnBtn');
  returnBtn.addEventListener('click', () => {
    changeView('#/');
  });

  return divLogin;
};
