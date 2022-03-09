// Este es el punto de entrada de tu aplicacion
// import { myFunction } from './lib/index.js';
// myFunction();
import { router } from './lib/index.js';

// // boton de la modal
const btnModal = document.getElementById('sign-up');
const modalWindow = document.getElementById('modalWindow');
btnModal.addEventListener('click', () => {
  modalWindow.style.visibility = 'hidden';
  router.loadRoute('registro');
});

// // boton de registrar
// const btn = document.querySelector('#btn-register');
// function funcionX() {
//   console.log('Hola me voy a Firebase');
// }
// btn.addEventListener('click', funcionX());
