// importamos la funcion de createUser
import { createNewUser } from '../firebase/fbFunction.js';

export const clickRegister = (div) => {
  const userName = div.querySelector('#inputName').value;
  const birthDate = div.querySelector('#inputBirthdate').value;
  const passwordConfirm = div.querySelector('#inputConfirm').value;
  const errorMessageInput = div.querySelector('#errorInput');
  const errorPasswordInput = div.querySelector('#errorPassword');
  const email = div.querySelector('#inputE').value;
  const password = div.querySelector('#inputPassword').value;
  const successfulOk = div.querySelector('#successRegister');
  // errorPasswordInput.innerHTML = 'Tus contraseñas no coinciden, intentalo de nuevo';
  const confirmPassword = password === passwordConfirm;
  const voidInput = (userName.trim() === '' || birthDate.trim() === '' || passwordConfirm.trim() === '' || email.trim() === '' || password.trim() === '');
  errorPasswordInput.innerHTML = '';
  errorMessageInput.innerHTML = '';

  if (!confirmPassword) {
    errorPasswordInput.innerHTML = 'Tus contraseñas no coinciden, intentalo de nuevo';
  }
  if (voidInput) {
    errorMessageInput.innerHTML = 'Debes ingresar un valor en el campo';
  }
  if (confirmPassword && !voidInput) {
  /* llamamos la funcion createUser con los argumentos de email
y contraseñas guardados en las constantes anteriores */
    createNewUser(email, password);
    successfulOk.innerHTML = 'El usuario se creo de forma exitosa';
  }
};

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
        <p class='alertMessage' id='errorMessage'></p>
        <p class='alertMessage' id='errorInput'></p>
        <p class='alertMessage' id='errorPassword'></p>
        <h1 id='successRegister'></h1>
        <button class='btnRegister' id='viewWall'>Regístrate</button>
      </div>
    </div>`;

  const divAccount = document.createElement('div');
  divAccount.innerHTML = viewAccount;
  // creamos una variable para acceder al id del boton de registrate
  const btnViewRegister = divAccount.querySelector('#viewWall');
  // creamos un evento al boton registrate
  btnViewRegister.addEventListener('click', () => clickRegister(divAccount));
  /* creamos constantes para capturar los datos ingresados por el usuario */
  return divAccount;
};
