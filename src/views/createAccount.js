// importamos la funcion de createUser
import { createUser } from '../firebase/fbFunction.js';

export default () => {
  const viewAccount = `
    <div class='container'>
      <div class='gridHeaderAccount'>
        <img src='img/Logo.svg' alt='Logo' class='logoAccount' />
        <h1 class='tittleAccount'>EcoTraveler</h1>
      </div>
      <div class='gridBodyAccount'>
        <input class='inputStyle' id='inputName' type='text' placeholder='Nombre y Apellido'>
        <input class='inputStyle' id='inputE' type='email' placeholder='Correo Electrónico'>
        <input class='inputStyle' id='inputBirthdate' type='text' placeholder='Fecha de Nacimiento' onfocus="(this.type='date')">
        <input class='inputStyle' id='inputPassword' type='password' placeholder='Contraseña'>
        <input class='inputStyle' id='inputConfirm' type='password' placeholder='Confirmar Contraseña'>
        <button class='btnRegister' id='viewWall'><a href='#/ecoTraveler'>Regístrate</a></button>
      </div>
    </div>`;

  const divAccount = document.createElement('div');
  divAccount.innerHTML = viewAccount;
  // creamos una variable para acceder al id del boton de registrate
  const btnViewRegister = divAccount.querySelector('#viewWall');
  // creamos un evento al boton registrate
  btnViewRegister.addEventListener('click', () => {
    const userName = document.getElementById('inputName').value;
    const birthDate = document.getElementById('inputBirthdate').value;
    const passwordConfirm = document.getElementById('inputConfirm').value;
    console.log(userName);
    /* creamos 2 constantes para capturar los datos ingresado
    por el usuario de email y contraseña en los inputs */
    const email = document.getElementById('inputE').value;
    const password = document.getElementById('inputPassword').value;
    if (userName, birthDate, passwordConfirm, email, password.trim() == '') {
      alert ('Debes ingresar un valor en el campo');
    }
    if (password != passwordConfirm) {
      alert ('Tus contraseñas no coinciden, intentalo de nuevo');
    }
    /* llamamos la funcion createUser con los argumentos de email
    y contraseñas guardados en las constantes anteriores */
    createUser(email, password);
    console.log('Saludo');
  });
  return divAccount;
};
