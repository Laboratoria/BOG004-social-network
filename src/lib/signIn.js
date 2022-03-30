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
    <input type="submit" value="Sign in" class = 'submitSignIn'><br>
    <span class = 'errorM'></span>
  </form>
  `;

  const signInContainer = document.createElement('div');
  signInContainer.classList = 'divSignIn';
  signInContainer.innerHTML = viewSignIn;
  const formSignIn = signInContainer.querySelector('#signInForm');
  formSignIn.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = signInContainer.querySelector('#email').value;
    const password = signInContainer.querySelector('#password').value;
    const errorM = signInContainer.querySelector('.errorM');
    const regexDominio = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/;

    if (regexDominio.test(email)) {
      SignInUser(email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          if (!user.emailVerified) {
            // eslint-disable-next-line no-alert
            errorM.innerHTML = 'Verifica tu correo';}
          else {
            changeView('#/post');
          }
        })

        .catch((error) => {
          const errorCode = error.code;
          if (errorCode) { errorM.innerHTML = 'Usuario o contraseña incorrecta'; }
        });
    } else {
      errorM.innerHTML = 'Correo inválido';
    }
  });
  return signInContainer;
};
