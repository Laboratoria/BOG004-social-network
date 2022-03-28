// eslint-disable-next-line import/no-cycle
import { SignInUser } from './firebase.js';
// eslint-disable-next-line import/no-cycle
import { changeView } from './viewController.js';

export default () => {
  const viewSignIn = `
  <figure>
      <img class="Icono" src="images/iPhone 13/Logo.png" alt="Icono"><br>
    </figure>
    <h1>SIGN IN</h1>
    <h4>Si ya estas registrado, ingresa tu correo y contraseña</h4>
    <form id="signInForm">
    <input type="email" id="email" placeholder="email">
    <input type="password" id="password" placeholder="password">
    <input type="submit" value="Sign in" class = 'submitSignIn'>
  </form>
  <span class = 'errorM'></span>`;

  const signInContainer = document.createElement('div');
  signInContainer.classList = 'divSignIn';
  signInContainer.innerHTML = viewSignIn;
  const formSignIn = signInContainer.querySelector('#signInForm');
  formSignIn.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = signInContainer.querySelector('#email').value;
    const password = signInContainer.querySelector('#password').value;
    const errorM = signInContainer.querySelector('.errorM');
    if (!email.includes('.com')) {
      errorM.innerHTML = 'correo inválido';
    } else {
      SignInUser(email, password)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .then(() => { changeView('#/post'); })
        .catch((error) => {
          const errorCode = error.code;
          if(errorCode)
          errorM.innerHTML = 'Usuario o contraseña incorrecta';})
    }
  });
  return signInContainer;
};
