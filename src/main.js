/* eslint-disable no-use-before-define */
/* eslint-disable no-console */
/* eslint-disable indent */
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js';

// Este es el punto de entrada de tu aplicacion
import { changeView } from './lib/router.js';
import createUser from './firebase/newloginuser.js';
import loginUserjs from './firebase/loginuser.js';

const init = () => {
  const currentHash = window.location.hash
  changeView(currentHash);
  window.addEventListener('hashchange', () => changeView(window.location.hash));
  const firebaseConfig = {
    apiKey: 'AIzaSyCzpRPSooaA1jjcXSKCj1hCV7kJqZj3Dfc',
    authDomain: 'mommi-1bf76.firebaseapp.com',
    projectId: 'mommi-1bf76',
    storageBucket: 'mommi-1bf76.appspot.com',
    messagingSenderId: '295073784310',
    appId: '1:295073784310:web:0ff893c0ec68221fefe7d7',
    measurementId: 'G-VBTE1KYCDY',
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  console.log('app', app);
  if (currentHash === '') registerUser();
  if (currentHash === '/#login') loginUser();
};

function registerUser() {
    // Funcionalidad enlaces y botones de la sección y registro.

  const registerBtn = document.getElementById('registerBtn');

  console.log(`Cargando el boton ${registerBtn}`);

  registerBtn.addEventListener('click', () => {
    // 1. Traer los inputs de la vista y luego .value
    // 2. Validar?
    // 3. Llamar a la funcion createUserWith..blablabla

    const emailValidation = document.getElementById('registerUsername').value;
    const passwordValidation = document.getElementById('registerPassword').value;

    createUser(emailValidation, passwordValidation);
  });
}
function loginUser() {
  console.log('loginUser Runs');
  const loginBtn = document.getElementById('loginBtn');

  console.log(`Cargando el boton ${loginBtn}`);

  loginBtn.addEventListener('click', () => {
    // 1. Traer los inputs de la vista y luego .value
    // 2. Validar?
    // 3. Llamar a la funcion createUserWith..blablabla

    const loginEmailValidation = document.getElementById('loginEmail').value;
    const loginPasswordValidation = document.getElementById('loginPassword').value;

    loginUserjs(loginEmailValidation, loginPasswordValidation);
  });
}
window.addEventListener('load', init);
