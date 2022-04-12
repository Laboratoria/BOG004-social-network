//* En esta pestaña esta la segunda vista que tiene la parte de loguearse a la SN *//
import { loginWithEmailAndPassword, loginGoogle } from '../firebaseController.js';

export default () => {
  const divLogin = document.createElement('div');
  divLogin.setAttribute('class', 'container-div-Login');
  const viewLogin = `
  <div class="main__div--tittle"></div>
  <div class= "main__div--container">
      <h2 class="welcome-wizards"><b></b></h2>
      <div class="main__div--login-login">
        <form id='formLogin'>
          <input type="text" placeholder="Email" id="email">
          <br class="espacio">
          <input type="PASSWORD" placeholder="Password" id="password">
          <div id='modalMessage'>
              <div id='textModal'></div>
          </div>
        </form>
        <div id='errorMessageLogin'></div>
        <p class="alohomora"> ALOHOMORA</p>
        <button type='button' class="Login"> Login </button>
        <div class="div-or">
        <p class="or">or</p>
        </div>
        <button type="button" id="googleButton" class="continue-with-google"></button>
      <p class="new-Wizard">New Wizard?</p>
      <a href=''><button class="join"> Join </button></a>
  </div>
</main>
`;
  divLogin.innerHTML = viewLogin;

  const login = divLogin.querySelector('.Login');
  login.addEventListener('click', (e) => {
    e.preventDefault();

    // const formLogin = divLogin.queryselector('#formLogin');
    const email = divLogin.querySelector('#email').value;
    const password = divLogin.querySelector('#password').value;

    loginWithEmailAndPassword(email, password)
      .then(() => {
        window.location.hash = '#/daily';
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = divLogin.querySelector('#errorMessageLogin');
        // Creamos casos de error para inicio de sesion de usuario ya registrado
        switch (errorCode) {
          case 'auth/invalid-email':
            errorMessage.innerHTML = '❌Invalid Email';
            break;
          case 'auth/wrong-password':
            errorMessage.innerHTML = '❌Wrong Password';
            break;
          case 'auth/user-not-found':
            errorMessage.innerHTML = '⚠️ User not Found, Please Join';
            break;
          default:
            errorMessage.innerHTML = '⚠️ Fill in all the fields';
            break;
        }
      });
  });

  const googleBotton = divLogin.querySelector('#googleButton');
  googleBotton.addEventListener('click', (e) => {
    e.preventDefault();
    loginGoogle()
      .then(() => {
        window.location.hash = '#/daily';
      });
  });

  return divLogin;
};
