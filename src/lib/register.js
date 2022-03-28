import { submithandler, emailSend, SignGoogle } from '../Configfirebase/Authentication.js';

export const register = () => {
  const divElement = document.createElement('div');
  const template = `
  <header>
  <img src='image/logo2.png' alt='social-trip-png' class = 'logo-R'>
  </header>
  <form id='formregister' class='formregister' autocomplete='on'> 
  <label for='name'>Nombres y Apellidos</label>
  <input type='name' id='name' maxlength='20' >
  <label for='username'>Nombre de Usuario</label>
  <input type='username' id='username' maxlength='12'>
  <label for='email'>Correo Electrónico</label>
  <input type='email' id='email' name='email'>
  <label for='password'>Contraseña</label>
  <input type='password' id='password' name='password' minlength='8' maxlength='16'>
  </form>
  <button  type='submit' id='btnregister'>REGISTRATE</button>
  <p class='texto'>Al registrarte, aceptas nuestras condiciones, la politica de datos, y la politica de cookies.</p>
  <h1>O</h1>
  <button id='google' class='google'><img src='image/botongoogle.png' alt='logo-google'>Registrate con Google</button>
  <button id='login2' class='login2'>¿Ya tienes una cuenta? Inicia sesión</button>
  <section id='modal' class='modal'>
  <p id='confirmation' class='confirmation'> Verifica tu correo electrónico. Gracias por unirte a nuestra red de viajeros. Social Trip te ofrece todo para que puedas compartir, recomendar y opinar sobre los sitios que has visitado. Para acceder a tu cuenta, crear y editar post, has click en verificar.</p>
  <button id='btnconfirmation' class='btnconfirmation'>ACEPTAR</button>
  </section>`;
  // aqui tu codigo

  divElement.classList.add('view2');
  divElement.innerHTML = template;

  const buttonregister = divElement.querySelector('#btnregister');
  const modalwindow = divElement.querySelector('.modal');
  const buttonclose = divElement.querySelector('.btnconfirmation');
  const buttonGoogle = divElement.querySelector('#google');
  const buttonlogin2 = divElement.querySelector('#login2');
  const buttonhome = divElement.querySelector('.logo-R');
  const email = divElement.querySelector('#email');
  const password = divElement.querySelector('#password');
  const username = divElement.querySelector('#username');

  buttonregister.addEventListener('click', () => {
    modalwindow.classList.add('active');
    submithandler(email.value, password.value, username.value);
  });

  buttonclose.addEventListener('click', () => {
    modalwindow.classList.remove('active');
    emailSend(email.value);
  });

  buttonGoogle.addEventListener('click', () => {
    SignGoogle();
  });

  buttonlogin2.addEventListener('click', () => {
    window.location = '#login';
  });

  buttonhome.addEventListener('click', () => {
    window.location = '';
  });

  return divElement;
};
