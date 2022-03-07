//import { firestore } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js'
import { getAuth, createUserWhitEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';

import firebaseApp from '../Configfirebase/confiFirebase.js';

const auth = getAuth(firebaseApp);
createUserWhitEmailAndPassword(auth, nameform, usuarioform, emailform, passwordform)
export const register = () => {

  const template = `
  <header>
  <img src='image/logo2.png' alt='social-trip-png'>
  </header>
  <form id='formregister' class='formregister' autocomplete='off'> 
  <label for='name'>Nombres y Apellidos</label>
  <input type='name' id='name' maxlength='20' >
  <label for='username'>Nombre de Usuario</label>
  <input type='username' id='username' maxlength='12'>
  <label for='email'>Correo Electrónico</label>
  <input type='email' id='email'>
  <label for='password'>Contraseña</label>
  <input type='password' id='password' minlength='8' maxlength='16'>
  <button type='button'>REGISTRATE</button>
  <p>Al registrarte, aceptas nuestras condiciones, la politica de datos, y la politica de cookies.</p>
  <h1>O</h1>
  <button><img src='image/botongoogle.png' alt='logo-google'>Inicia sesión con Google</button>
  </form>`;
  // aqui tu codigo
  const divElement = document.createElement('div');
  divElement.classList.add('view2');
  divElement.innerHTML = template;
  const formulario = divElement.querySelector('#formregister');
  console.log(formulario)
 
formulario.addEventListener('click', function onsubmit( ) {
    const nameform = divElement.querySelector('#name').value;
    const usuarioform= divElement.querySelector('#username').value;
    const emailform = divElement.querySelector('#email').value;
    const passwordform = divElement.querySelector('#password').value;      
      console.log(nameform, usuarioform, emailform, passwordform) 
})
  return divElement;
};




