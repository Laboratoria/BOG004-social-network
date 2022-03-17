import { SignGoogle, loginUser }  from '../Configfirebase/Authentication.js';

export const login = () => {
  const divElement = document.createElement('div');
  const template = `
  <header>
  <img src='image/logo2.png' alt='social-trip-png'>
  </header>
  <form id='formlogin' class='formregister' autocomplete='off'> 
  <label for='email'>Correo Electrónico</label>
  <input type='email' id='email' name='email'>
  <label for='password'>Contraseña</label>
  <input type='password' id='password' name='password' minlength='8' maxlength='16'>
  <p>¿Has olvidado tu contraseña?</p>
  </form> 
  <button  type='submit' id='btnlogin'>INICIA SESIÓN</button>
  <h1>O</h1>
  <button id='google' class='google'><img src='image/botongoogle.png' alt='logo-google'>Inicia sesión con Google</button>`

  divElement.classList.add('view3');
  divElement.innerHTML = template;

  const bottomlogin = divElement.querySelector('#btnlogin')
  const bottomGoogle = divElement.querySelector('#google');

  bottomlogin.addEventListener('click', ()=>{
    loginUser(email.value, password.value)
  })

  bottomGoogle.addEventListener('click', ()=>{
    SignGoogle()
  })

  return divElement;
};
