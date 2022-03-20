/* eslint-disable no-use-before-define */
/* eslint-disable no-console */
/* eslint-disable indent */
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js';

// Este es el punto de entrada de tu aplicacion
import { changeView } from './lib/router.js';
import createUser from './firebase/newloginuser.js';
import existingUser from './firebase/loginuser.js';
import observerUserState from './firebase/observer.js';
import { signInWithGoogle } from './firebase/authgoogle.js';
import closeSession from './firebase/closesession.js';

function onChangeView() {
  const currentHash = (window.location.hash);
  console.log('currentHash', currentHash);
  changeView(currentHash);
  if (currentHash === '') registerUser();
  if (currentHash === '#login') loginUser();
  if (currentHash === '#wall') registerCloseSession();
  if (currentHash === '') authAddGoogle();
  if (currentHash === '#login') authAddGoogle();
}

const init = () => {
  onChangeView(); // Este se llama solo la primera vez
  window.addEventListener('hashchange', onChangeView);// Esto es para cuando cambie despues de la primera carga
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
  observerUserState();
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

//

function loginUser() {
  console.log('loginUser Runs');
  const loginBtn = document.getElementById('loginBtn');

  console.log(`Cargando el boton ${loginBtn}`);

  loginBtn.addEventListener('click', () => {
    const loginEmailValidation = document.getElementById('loginEmail').value;
    const loginPasswordValidation = document.getElementById('loginPassword').value;

    existingUser(loginEmailValidation, loginPasswordValidation);
});
}

function authAddGoogle() {
  // Funcionalidad enlaces y botones de la sección autenticacion con google.

const googleBtn = document.getElementById('googleBtn');

console.log(`autenticando con google ${googleBtn}`);

googleBtn.addEventListener('click', () => {
  // 1. Traer los inputs de la vista y luego .value
  // 2. Validar?
  // 3. Llamar a la funcion createUserWith..blablabla

  signInWithGoogle();
});
}
//

function registerCloseSession() {
  console.log('logoutBtn Runs');
  const logoutBtn = document.getElementById('logoutBtn');

  console.log(`Cargando el boton logout ${logoutBtn}`);

  logoutBtn.addEventListener('click', () => {
    closeSession();
  });
}

window.addEventListener('load', init);
