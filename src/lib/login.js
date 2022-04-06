import { SignGoogle, loginUser } from '../Configfirebase/Authentication.js';

export const login = () => { /* Aqui creamos el template del login */
  const divElement = document.createElement('div');
  const template = `
  <header>
  <img src='image/logo2.png' alt='social-trip-png' class = 'logo-L'>
  </header>
  <form id='formlogin' class='formregister' autocomplete='off'> 
  <label for='email'>Correo Electrónico</label>
  <input type='email' id='email' name='email'>
  <label for='password'>Contraseña</label>
  <input type='password' id='password' name='password' minlength='8' maxlength='16'>
  <p class='texto'>¿Has olvidado tu contraseña?</p>
  </form> 
  <button  type='submit' id='btnlogin'>INICIA SESIÓN</button>
  <h1>O</h1>
  <button id='google' class='google'><img src='image/botongoogle.png' alt='logo-google'>Inicia sesión con Google</button>`;

  divElement.classList.add('view3');
  divElement.innerHTML = template;

  const buttonlogin = divElement.querySelector('#btnlogin');
  const buttonGoogle = divElement.querySelector('#google');
  const buttonhome = divElement.querySelector('.logo-L');
  const email = divElement.querySelector('#email');
  const password = divElement.querySelector('#password');

  /* Aqui ejecutamos la funcion para traer el valor del email y password */
  buttonlogin.addEventListener('click', () => {
    loginUser(email.value, password.value);
  });

  /* Aqui ejecutamos la funcion para iniciar sesion con Google */
  buttonGoogle.addEventListener('click', () => {
    SignGoogle();
  });

  /* Aqui añadimos un evento para redirigir a la vista home */
  buttonhome.addEventListener('click', () => {
    window.location = '';
  });

  return divElement;
};
