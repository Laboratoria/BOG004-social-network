import { register } from '../lib/auth.js';

const createFormUser = () => {
  const divElem = document.createElement('div');
  const viewCreateUser = `<h2 class='text-center'>Crea una cuenta en Nibbles</h2>`;
  divElem.innerHTML = viewCreateUser;
  const htmlFormRegister = () => {
    const form = document.createElement('form');
    form.setAttribute('method', 'post');
    form.setAttribute('id', 'register-form');

    const fullName = document.createElement('input');
    fullName.setAttribute('type', 'text');
    fullName.setAttribute('name', 'Full Name');
    fullName.setAttribute('placeholder', 'Nombre Completo');
    fullName.setAttribute('class', 'formulario');

    const email = document.createElement('input');
    email.setAttribute('type', 'text');
    email.setAttribute('name', 'email');
    email.setAttribute('placeholder', 'correo');
    email.setAttribute('id', 'register-email');
    email.setAttribute('class', 'formulario');

    const password = document.createElement('input');
    password.setAttribute('type', 'password');
    password.setAttribute('name', 'password');
    password.setAttribute('placeholder', 'contraseña');
    password.setAttribute('id', 'register-password');
    password.setAttribute('class', 'formulario');

    const repeatPassword = document.createElement('input');
    repeatPassword.setAttribute('type', 'password');
    repeatPassword.setAttribute('name', 'Repeat Password');
    repeatPassword.setAttribute('placeholder', ' repite la contraseña');
    repeatPassword.setAttribute('id', 'register-repeat-password');
    repeatPassword.setAttribute('class', 'formulario');

    const submit = document.createElement('input');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('value', 'registrarse');
    submit.setAttribute('class', 'btn-submit');

    form.appendChild(fullName);

    form.appendChild(email);

    form.appendChild(password);

    form.appendChild(repeatPassword);

    form.appendChild(submit);

    divElem.appendChild(form);
  };
  htmlFormRegister();

  return divElem;
};

const saveUser = () => {
  const signupForm = document.querySelector('#register-form');
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.querySelector('#register-email').value;
    const password = document.querySelector('#register-password').value;
    const repeatPassword = document.querySelector(
      '#register-repeat-password',
    ).value;
    console.log(email, password);
    if (password === repeatPassword) {
      register(email, password);
    } else {
      return'la contraseña no coinciden';
    }
  });
};
export { createFormUser, saveUser };
