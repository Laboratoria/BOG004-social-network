// Este es el punto de entrada de tu aplicacion
// import { myFunction } from './lib/index.js';
// myFunction();
import { router } from './lib/index.js';
import { iniciarFirebase } from './firebase.js';
import { signInGoogle } from './auth-google.js';

// firebase

iniciarFirebase();

// declarar las funciones de cada vista

function home() {
  const btnModal = document.querySelector('#sign-up');
  btnModal.addEventListener('click', () => {
    router.loadRoute('registro');
  });
}

function register() {
  const btn = document.querySelector('#btn-register');
  btn.addEventListener('click', () => {
    router.loadRoute('construccion');
  });
}

function registerGoogle() {
  const btnSignInGoogle = document.querySelector('#btnSignInGoogle');
  btnSignInGoogle.addEventListener('click', signInGoogle);
}

function confiWindow(url) {
  switch (url) {
    case '/':
      home();
      break;
    case '/registro':
      register();
      registerGoogle();
      break;

    default:
      console.log('hola');
      break;
  }
}
confiWindow(window.location.pathname);

// se captura el evento que avisa que se cambio la ruta y cargo la plantilla
document.addEventListener('cambioruta', (event) => {
  const url = event.detail.url;
  confiWindow(url);
});

window.addEventListener('popstate', () => {
  const removePath = window.location.pathname.substring(1);
  router.loadRoute(removePath);
  confiWindow(window.location.pathname);
  // console.log(window.location.pathname);
  // const url = event.detail.url;
  // confiWindow(url);
});

// // boton primera vista

// boton de registrar

// function funcionX() {
//   console.log('Hola me voy a Firebase');
// }
// const btn = document.querySelector('#btn-register');
// btn.addEventListener('click', () => {
//   // modalWindow.style.visibility = 'hidden';
//   router.loadRoute('construccion');
// });
