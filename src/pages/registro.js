import { signInGoogle } from '../lib/auth-google.js';
import { signInEmail } from '../lib/auth-email.js';
import { expresiones, validateField } from '../utils.js';

export default {
  path: '#registro',
  template: `<div class='paws-image'>
  <img class='paws' src='images/animalsBackground.png' alt='paws' />
</div>
  <div class='container-form'>
    <form action='' class='form' id='form'>
    <p>BIENVENIDO</p>
    <div class='form__group' id='group__name'>
      <div class='form__group-input'>
        <input type='text' class='form__input' name='name' id='name' placeholder='Nombre y Apellido'>
        <i class='form__validation-state fas fa-times-circle'></i>
      </div>
      <p class='form__input-error'>Ingresa sólo tú nombre y apellido.</p>
    </div>
    <div class='form__group' id='group__email'>
      <div class='form__group-input'>
        <input type='email' class='form__input' name='email' id='email' placeholder='correo@email.com'>
        <i class='form__validation-state fas fa-times-circle'></i>
      </div>
      <p class='form__input-error'>El correo sólo puede contener letras, números,<br> puntos, guiones y guion bajo.</p>
    </div>
    <div class='form__group' id='group__password'>
      <div class='form__group-input'>
        <input type='password' class='form__input' name='password' id='password' placeholder='Contraseña'>
        <i class='form__validation-state fas fa-times-circle'></i>
      </div>
      <p class='form__input-error'>La contraseña tiene que ser de 6 a 15 dígitos alfanuméricos.</p>
  </div>
    <button type='button' id='btn-register'>Registrarse</button>
  </form>
    <button id='btnSignInGoogle'>
      <img src='https://img.icons8.com/color/30/000000/google-logo.png'/> Ingresar con Google.
    </button>
  
  
  </div>
  
            `,
  script: () => {
    const btn = document.querySelector('#btn-register');
    const inputs = document.querySelectorAll('#form input');

    btn.addEventListener('click', () => {
      const email = document.querySelector('#email').value;
      const password = document.querySelector('#password').value;
      signInEmail(email, password);
    });

    const btnSignInGoogle = document.querySelector('#btnSignInGoogle');
    btnSignInGoogle.addEventListener('click', signInGoogle);

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
  },
};
