// eslint-disable-next-line import/no-cycle
import { register } from '../lib/auth.js';
// eslint-disable-next-line import/no-cycle
import { changeView } from '../view-controler/router.js';

const createFormUser = () => {
  document.querySelector('#sectionGrid').style.display = 'block';
  const divElem = document.createElement('div');
  divElem.setAttribute('id', 'containerRegister');
  const viewCreateUser = `
  <button class='returnBtn'><</button>
  <h2 class='text-center'>Crea una cuenta en Nibbles</h2>
  <p id='slogan-nibbles'>¡Una experiencia deliciosa comienza aquí!<br>Publica tus mejores recetas</p>`;
  divElem.innerHTML = viewCreateUser;
  const htmlFormRegister = () => {
    const form = document.createElement('form');
    form.setAttribute('method', 'post');
    form.setAttribute('id', 'register-form');
    const message = document.createElement('p');
    message.setAttribute('id', 'message');
    message.innerContent = '';

    const contenedorEmail = document.createElement('div');
    const email = document.createElement('input');

    email.setAttribute('type', 'text');
    email.setAttribute('name', 'email');
    email.setAttribute('placeholder', 'Correo');
    email.setAttribute('id', 'register-email');
    email.setAttribute('class', 'formulario');
    email.setAttribute('autocomplete', 'off');

    const errorEmail = document.createElement('p');
    errorEmail.textContent = 'Ingresa un email valido';
    errorEmail.setAttribute('id', 'error-message-email');
    errorEmail.setAttribute('class', 'error-message-hidden');

    contenedorEmail.appendChild(email);

    const password = document.createElement('input');
    password.setAttribute('type', 'password');
    password.setAttribute('name', 'password');
    password.setAttribute('placeholder', 'Contraseña');
    password.setAttribute('id', 'register-password');
    password.setAttribute('class', 'formulario');
    password.setAttribute('autocomplete', 'off');

    const contenedorPassword = document.createElement('div');
    const repeatPassword = document.createElement('input');
    repeatPassword.setAttribute('type', 'password');
    repeatPassword.setAttribute('name', 'repeatpassword');
    repeatPassword.setAttribute('placeholder', ' Repite la contraseña');
    repeatPassword.setAttribute('id', 'register-repeat-password');
    repeatPassword.setAttribute('class', 'formulario');
    repeatPassword.setAttribute('autocomplete', 'off');

    const submit = document.createElement('input');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('value', 'registrarse');
    submit.setAttribute('class', 'btn-submit');

    const errorPassword = document.createElement('p');
    errorPassword.textContent = 'La contraseña no coincide';
    errorPassword.setAttribute('id', 'error-message-password');
    errorPassword.setAttribute('class', 'error-message-hidden');

    form.appendChild(errorEmail);
    form.appendChild(errorPassword);
    form.appendChild(message);
    form.appendChild(contenedorEmail);
    form.appendChild(contenedorPassword);
    form.appendChild(password);
    form.appendChild(repeatPassword);
    form.appendChild(submit);
    divElem.appendChild(form);
  };
  htmlFormRegister();

  const returnBtn = divElem.querySelector('.returnBtn');
  returnBtn.addEventListener('click', () => {
    changeView('#/');
  });
  return divElem;
};

const saveUser = () => {
  const signupForm = document.querySelector('#register-form');
  const inputs = document.querySelectorAll('#register-form input:not([type="submit"])');

  const expresiones = {
    password: /^.{6,12}$/, // 4 a 12 digitos.
    repeatpassword: /^.{6,12}$/, // 4 a 12 digitos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  };

  const validarFormulario = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    switch (inputName) {
      case 'email': {
        const emailInput = document.getElementById('register-email');
        const errorMessage = document.getElementById('error-message-email');
        if (expresiones.email.test(inputValue)) {
          emailInput.classList.remove('with-error'); // quite el color rojo
          errorMessage.classList.add('error-message-hidden'); // ocultar mensaje de error
        } else {
          emailInput.classList.add('with-error');
          errorMessage.classList.remove('error-message-hidden'); // mostrar mensaje de error
        }
        break;
      }
      case 'password':
        if (expresiones.password.test(inputValue)) {
          document.getElementById('register-password').classList.remove('with-error');
        } else {
          document.getElementById('register-password').classList.add('with-error');
        }
        break;
      case 'repeatpassword':
        if (expresiones.repeatpassword.test(inputValue)) {
          document.getElementById('register-repeat-password').classList.remove('with-error');
        } else {
          document.getElementById('register-repeat-password').classList.add('with-error');
        }
        break;
      default:
        break;
    }
  };

  inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
  });

  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.querySelector('#register-email').value;
    const password = document.querySelector('#register-password').value;
    const repeatPassword = document.querySelector(
      '#register-repeat-password',
    ).value;
    if (password.trim() !== '' && password === repeatPassword) {
      register(email, password);
    } else {
      const errorMessage = document.getElementById('error-message-password');
      errorMessage.classList.remove('error-message-hidden'); // ocultar mensaje de error
    }
  });
};

export { createFormUser, saveUser };
