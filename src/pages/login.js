import { signInGoogle, logInEmail } from '../lib/firebase.js';

export default {
  path: '#login',
  template: `
  <div class='paws-image'>
    <img class='paws' src='images/animalsBackground.png' alt='paws' />
  </div>
    <div class='container-form'>
      <form action='' class='form' id='form'>
      <p class='p-login'>Inicia sesión.</p>
      <div class='form__group' id='group__email'>
        <div class='form__group-input'>
          <input type='email' class='form__input' name='emailLogin' id='emailLogin' placeholder='correo@email.com'>
          <i class='form__validation-state fas fa-times-circle'></i>
        </div>
        <p class='form__input-error'>Verifica tu correo.</p>
      </div>
  
      <div class='form__group' id='group__password'>
        <div class='form__group-input'>
          <input type='password' class='form__input' name='passwordLogin' id='passwordLogin' placeholder='Ingresa contraseña'>
          <i class='form__validation-state fas fa-times-circle'></i>
        </div>
        <p class='form__input-error'>Contraseña incorrecta.</p>
    </div>
      <button type='button' id='logIn'>Ingresar</button>
    </form>
    <button id='btnSignInGoogle'>
    <img src='https://img.icons8.com/color/30/000000/google-logo.png'/> 
    <p>Ingresar con Google.</p>
  </button>
 </div>
  
   
              `,
  state: 'unlogged',
  script: () => {
    const btn = document.querySelector('#logIn');
    btn.addEventListener('click', () => {
      const email = document.querySelector('#emailLogin').value;
      const password = document.querySelector('#passwordLogin').value;
      logInEmail(email, password);
    });

    const btnSignInGoogle = document.querySelector('#btnSignInGoogle');
    btnSignInGoogle.addEventListener('click', signInGoogle);
  },
};
