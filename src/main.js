// Este es el punto de entrada de tu aplicacion

import { router } from './routes.js';
import { iniciarFirebase } from './lib/firebase.js';

// firebase

iniciarFirebase();

window.addEventListener('popstate', () => {
  const removePath = router.removeSlash(window.location.pathname);
  router.loadRoute(removePath, false);
});

// validacion el form
// const form = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');

const expresiones = {
  name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  password: /^.{6,15}$/, // 6 a 15 digitos.
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
};

const campos = {
  name: false,
  email: false,
  password: false,

};

const validateField = (expresion, input, campo) => {
  if (expresion.test(input.value)) {
    document
      .getElementById(`group__${campo}`)
      .classList.remove('form__group-incorrect');
    document
      .getElementById(`group__${campo}`)
      .classList.add('form__group-right');
    document
      .querySelector(`#group__${campo} i`)
      .classList.add('fa-check-circle');
    document
      .querySelector(`#group__${campo} i`)
      .classList.remove('fa-times-circle');
    document
      .querySelector(`#group__${campo} .form__input-error`)
      .classList.remove('form__input-error-active');
    campos[campo] = true;
  } else {
    document
      .getElementById(`group__${campo}`)
      .classList.add('form__group-incorrect');
    document
      .getElementById(`group__${campo}`)
      .classList.remove('form__group-right');
    document
      .querySelector(`#group__${campo} i`)
      .classList.add('fa-times-circle');
    document
      .querySelector(`#group__${campo} i`)
      .classList.remove('fa-check-circle');
    document
      .querySelector(`#group__${campo} .form__input-error`)
      .classList.add('form__input-error-active');
    campos[campo] = false;
  }
};

// valida la seccion de registro
const validarForm = (e) => {
  switch (e.target.name) {
    case 'name':
      validateField(expresiones.name, e.target, 'name');
      break;
    case 'email':
      validateField(expresiones.email, e.target, 'email');
      break;
    case 'password':
      validateField(expresiones.password, e.target, 'password');
      break;
    default:
  }
};

inputs.forEach((input) => {
  input.addEventListener('keyup', validarForm);
  input.addEventListener('blur', validarForm);
});

window.addEventListener('hashchange', () => {
  router.loadRoute(router.removeSlash(window.location.hash), false);
});
