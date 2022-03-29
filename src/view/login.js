// eslint-disable-next-line import/no-cycle
import { login } from '../lib/auth.js';

export default () => {
  document.querySelector('#sectionGrid').style.display = 'block';
  const viewLogin = `
    <div class='containerLogin'>
    <h2 class='text.center'> ¡Hola! </h2>
    <form class='formLogin' id="login-form">
     <input type='text' id='loginEmail' class='inputForm' placeholder='e-mail' required input/>
     <input type='password' id='loginPassword' class='inputForm' placeholder='Contraseña' required></input>
     <p id='messageAlert'></p>
     <button type='submit' id='btnLogin'>Iniciar sesión</button>
    </form>
    </div>`;

  const divLogin = document.createElement('div');
  divLogin.innerHTML = viewLogin;

  divLogin.querySelector('#login-form').addEventListener('submit', (e) => {
    e.preventDefault(); // previene la recarga por defecto de la página
    const email = divLogin.querySelector('#loginEmail').value;
    const password = divLogin.querySelector('#loginPassword').value;
    console.log(email, password);
    login(email, password);
  });
  return divLogin;
};
