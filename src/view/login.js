import { login } from '../lib/auth.js';

export default () => {
  const viewLogin = `
    <h2 class='text.center'> ¡Hola! </h2>
    <form class= 'formLogin'>
     <input type='text' id='loginEmail' class='inputForm' placeholder='e-mail' required input/>
     <input type='password' id='loginPassword' class='inputForm' placeholder='Contraseña' required></input>
    <button type='submit' id='btnLogin'>Iniciar sesión</button>
    </form>`;

  const divLogin = document.createElement('div');
  divLogin.innerHTML = viewLogin;
  divLogin.querySelector('#btnLogin').addEventListener('click', () => {
    const email = divLogin.querySelector('#loginEmail').value;
    const password = divLogin.querySelector('#loginPassword').value;
    console.log(email, password);
    login(email, password);
  });
  return divLogin;
};
