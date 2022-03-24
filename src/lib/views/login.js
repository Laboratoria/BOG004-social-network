//* En esta pestaña ira la segunda vista que tiene la parte de loguearse a la SN *//
import { auth, provider } from '../firebaseInit.js';
import { loginWithEmailAndPassword, loginGoogle } from '../firebaseController.js';

export default () => {
  const divLogin = document.createElement('div');
  divLogin.setAttribute('class', 'container-div-Login');
  const viewLogin = `
  <picture class="main__div--tittle"></picture>
  <div class= "main__div--container">
      <h2 class="welcome-wizards"><b> WELCOME WIZARDS</b></h2>
      <div class="main__div--login">
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
        <a href='#/Login'><button class="Login"> Login </button></a>
        <div class="div-or">
        <p class="or">or</p>
        </div>
        <div class="continue-with-google">
        <p>Continue with Google</p>
        <img src="./img/hand.png" class="hand">
        <button type='button' id='googleButton' class='btn-google'>
        <img src="./img/google.png" id='img-google'>
        </button>
      </div>
      </div>
      <p class="new-Wizard">New Wizard?</p>
      <button class="join"> Join </button>
  </div>
</main>
`;
  divLogin.innerHTML = viewLogin;

  const login = divLogin.querySelector('.Login');
  login.addEventListener ('click', (e) => {
    e.preventDefault();
    console.log('click Login');

    // const formLogin = document.queryselector('#formLogin');
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    loginWithEmailAndPassword(auth, email, password)
      .then(() => {
        //const user = userCredential.user;
        console.log('Login');
        formLogin.reset();
        window.location.hash = '#/daily';
      // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = document.querySelector('#errorMessageLogin');
        // Creamos casos de error para inicio de sesion de usuario ya registrado
        switch (errorCode) {
          case 'auth/invalid-email':
            errorMessage.innerHTML = '❌El correo debe ser válido';
            break;
          case 'auth/wrong-password':
            errorMessage.innerHTML = '❌Contraseña incorrecta';
            break;
          case 'auth/user-not-found':
            errorMessage.innerHTML = '❌El correo no se encuentra registrado';
            break;
          default:
            errorMessage.innerHTML = '❌Ups algo falló';
            break;
        }
      });
      const googleBotton = divLogin.querySelector('#googleButton');
        googleBotton.addEventListener('click', (e) => {
         e.preventDefault();
        console.log('Click en Google');
        loginGoogle(auth, provider)
       .then(() => {
        window.location.hash = '#/daily';
    });
  });
  return divLogin;
};