import { SignInUser } from './firebase.js';
// eslint-disable-next-line import/no-cycle
import { changeView } from './viewController.js';

export default () => {
  const viewSignIn = `
    <h4>Si ya estas registrado, ingresa tu correo y contraseña</h4>
    <form id='signInForm'>
    <input type='email' id='email' placeholder='email'>
    <input type='password' id='password' placeholder='password'>
    <input type='submit' value='Sign in'>
    
  </form>`;

  const signInContainer = document.createElement('div');
  signInContainer.innerHTML = viewSignIn;

  const formSignIn = signInContainer.querySelector('#signInForm');
  formSignIn.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    SignInUser(email, password)
      .then(() => {
        changeView('#/post');
      })
      .catch((error) => {
        // eslint-disable-next-line no-unused-vars
        const errorCode = error.code;
        const errorMessage = error.message;
        // eslint-disable-next-line no-alert
        alert(errorMessage);
      });
  });
  return signInContainer;
};
