import { signInUser, loginGoogle } from '../firebase/fbFunction.js';
import { auth, provider } from '../view-controler/controllers.js';

export const clickSignIn = (div) => {
  const email = div.querySelector('#inputEmail').value;
  const password = div.querySelector('#inputPassword').value;
  const errorMessageLogin = div.querySelector('#errorMessage');
  signInUser(auth, email, password);
};

export const logoGoogleClick = () => {
  loginGoogle(auth, provider);
};

export default () => {
  const viewRegister = `
  <div class='container'>
    <div class='gridHeader'>
      <img src='img/Logo.svg' alt='Logo' class='logo' />
      <h1 class='tittle'>EcoTraveler</h1>
    </div>
    <div class='gridBody'>
      <input class='inputStyle' id='inputEmail' type='email' placeholder='Correo Electrónico'>
      <input class='inputStyle' id='inputPassword' type='password' placeholder='Contraseña'>
      <p class='alertMessage' id='errorMessage'></p>
      <button class='btnLogin' id='signInBtn'>Ingresar</button>
      <h3 class='textGoogle'>Iniciar sesión con google</h3>
      <img src='img/google-logo.svg' id='loginGoogle' alt='googleLogo' class='googleLogo'>
    </div>
    <div class='gridRegister'>
      <h3 class='textAccount'>¿Aún no tienes cuenta?</h3>
      <button class='btnRegister' id='createAccount'><a href='#/createAccount'>Regístrate</a></button>
    </div>
  </div>`;

  const divRegister = document.createElement('div');
  divRegister.innerHTML = viewRegister;

  const btnSignIn = divRegister.querySelector('#signInBtn');
  btnSignIn.addEventListener('click', () => clickSignIn(divRegister));

  const btnGoogle = divRegister.querySelector('#loginGoogle');
  btnGoogle.addEventListener('click', () => logoGoogleClick(divRegister));
  return divRegister;
};
