// import { createNewUser } from '../../src/firebase/fbFunction.js';
import { clickRegister } from '../../src/views/createAccount.js';

jest.mock('../../src/firebase/firebaseImport.js');

const templateRegisterTest = () => {
  const viewAccountTest = `
    <input class='inputStyle' id='inputName' type='text' placeholder='Nombre y Apellido'>
    <input class='inputStyle' id='inputBirthdate' type='text' placeholder='Fecha de Nacimiento' onfocus="(this.type='date')">
    <input class='inputStyle' id='inputE' type='email' placeholder='Correo Electrónico'>
    <p class='alertMessage' id='errorInput'></p>
          <input class='inputStyle' id='inputPassword' type='password' placeholder='Contraseña' value="">
          <input class='inputStyle' id='inputConfirm' type='password' placeholder='Confirmar Contraseña'>
          <p class='alertMessage' id='errorPassword'></p>
           <h1 id='successRegister'></h1>
          <button class='btnRegister' id='viewWall'>Regístrate</button>
        </div>
      </div>`;
  const divAccountTest = document.createElement('div');
  divAccountTest.innerHTML = viewAccountTest;
  return divAccountTest;
};
describe('clickRegister', () => {
  it('debería mostrar mensaje de error contraseñas no válidas', () => {
    // const clickRegisterTest = clickRegister(div);
    const divTemplateTest = templateRegisterTest();
    const passwordTest = divTemplateTest.querySelector('#inputPassword');
    const confirmPasswordTest = divTemplateTest.querySelector('#inputConfirm');
    passwordTest.value = '1234567';
    confirmPasswordTest.value = 'contrasenafalsa';
    const btnTest = divTemplateTest.querySelector('#viewWall');
    btnTest.addEventListener('click', () => clickRegister(divTemplateTest));
    btnTest.dispatchEvent(new Event('click'));
    const messagePasswordTest = divTemplateTest.querySelector('#errorPassword');
    expect(messagePasswordTest.textContent).toBe('Tus contraseñas no coinciden, intentalo de nuevo');
  });
  it('deberia mostrar mensaje de error campos vacios', () => {
    const divTemplateTestVoid = templateRegisterTest();
    const userNameTest = divTemplateTestVoid.querySelector('#inputName');
    userNameTest.value = '';
    const btnTestVoid = divTemplateTestVoid.querySelector('#viewWall');
    btnTestVoid.addEventListener('click', () => clickRegister(divTemplateTestVoid));
    btnTestVoid.dispatchEvent(new Event('click'));
    const messageInputTest = divTemplateTestVoid.querySelector('#errorInput');
    expect(messageInputTest.textContent).toBe('Debes ingresar un valor en el campo');
  });
  it('deberia llamar la funcion createUser', () => {
    const divTemplateTestCreate = templateRegisterTest();
    const userNameCreate = divTemplateTestCreate.querySelector('#inputName');
    userNameCreate.value = 'Pedro';
    const birthDateCreate = divTemplateTestCreate.querySelector('#inputBirthdate');
    birthDateCreate.value = '04-01-1989';
    const passwordCreate = divTemplateTestCreate.querySelector('#inputPassword');
    passwordCreate.value = '12345678';
    const passwordConfirmCreate = divTemplateTestCreate.querySelector('#inputConfirm');
    passwordConfirmCreate.value = '12345678';
    const emailCreate = divTemplateTestCreate.querySelector('#inputE');
    emailCreate.value = 'pedro123@gmail.com';
    const createNewUser = jest.fn();
    createNewUser(emailCreate, passwordCreate);

    const btnTestCreate = divTemplateTestCreate.querySelector('#viewWall');
    btnTestCreate.addEventListener('click', () => clickRegister(divTemplateTestCreate));
    btnTestCreate.dispatchEvent(new Event('click'));
    const successfulOkCreate = divTemplateTestCreate.querySelector('#successRegister');
    expect(successfulOkCreate.textContent).toBe('El usuario se creo de forma exitosa');
    expect(createNewUser).toHaveBeenCalled();
  });
});
