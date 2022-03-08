//import { firestore } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js'
import firebaseApp from '../Configfirebase/confiFirebase.js';
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';

const auth = getAuth(firebaseApp);

async function submithandler(e) {
  e.preventDefault();
  const nameform = e.target.name.value;
  const usuarioform = e.target.username.value;
  const emailform = e.target.email.value;
  const passwordform = e.target.password.value;
  console.log(nameform, usuarioform, emailform, passwordform)

  const users = await createUserWithEmailAndPassword(auth, nameform, usuarioform, emailform, passwordform);
  console.log('user',users);
}
export const register = () => {

 const template = `
  <header>
  <img src='image/logo2.png' alt='social-trip-png'>
  </header>
  <form ${onsubmit=submithandler}id='formregister' class='formregister' autocomplete='off'> 
  <label for='name'>Nombres y Apellidos</label>
  <input type='name' id='name' maxlength='20' >
  <label for='username'>Nombre de Usuario</label>
  <input type='username' id='username' maxlength='12'>
  <label for='email'>Correo Electrónico</label>
  <input type='email' id='email'>
  <label for='password'>Contraseña</label>
  <input type='password' id='password' minlength='8' maxlength='16'>
  <button type='submit' id='btnregister'>REGISTRATE</button>
  <p>Al registrarte, aceptas nuestras condiciones, la politica de datos, y la politica de cookies.</p>
  <h1>O</h1>
  <button><img src='image/botongoogle.png' alt='logo-google'>Inicia sesión con Google</button>
  </form>`;
  // aqui tu codigo
  const divElement = document.createElement('div');
  divElement.classList.add('view2');
  divElement.innerHTML = template; 
  return divElement;
};
