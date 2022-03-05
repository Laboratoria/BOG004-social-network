import { getAuth } from 'firebase/auth';
import firebaseApp from '../Configfirebase/confiFirebase.js';

const auth = getAuth(firebaseApp);
export const register = () => {
  async function submitHandler(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, username, email, password);
  }

  const template = `
  <header>
  <img src='image/logo2.png' alt=''>
  </header>
  <form onSubmit={submitHandler} id='formregister' class='formregister' autocomplete='off'> 
  <label for='name'>Nombres y Apellidos</label>
  <input type='name' id='name' maxlength='20'>
  <label for='username'>Nombre de Usuario</label>
  <input type='username' id='username' maxlength='12'>
  <label for='email'>Correo Electrónico</label>
  <input type='email' id='email'>
  <label for='password'>Contraseña</label>
  <input type=password id='password' minlength='8' maxlength='16'>
  <button>REGISTRATE</button>
  <p>Al registrarte, aceptas nuestras condiciones, la politica de datos, y la politica de cookies.</p>
  <h1>O</h1>
  <button><img src='image/botongoogle.png' alt=''>Inicia sesión con Google</button>
  </form>`;
  // aqui tu codigo
  const divElement = document.createElement('div');
  divElement.classList.add('view2');
  divElement.innerHTML = template;
  return divElement;
};
