import { clickRegister } from '../../src/views/createAccount.js'

jest.mock('../../src/firebase/firebaseImport.js');

const templateRegisterTest = () => {
    const viewAccountTest = `
          <input class='inputStyle' id='inputPassword' type='password' placeholder='Contraseña'>
          <input class='inputStyle' id='inputConfirm' type='password' placeholder='Confirmar Contraseña'>
          <p class='alertMessage' id='errorPassword'></p>
          <button class='btnRegister' id='viewWall'>Regístrate</button>
        </div>
      </div>`;
      const divAccountTest = document.createElement('div');
      divAccountTest.innerHTML = viewAccountTest;
      return divAccountTest;
      
}
describe('clickRegister', () => {
    it('debería mostrar mensaje de error contraseñas no válidas', () => {
        // const clickRegisterTest = clickRegister(div);
        const passwordTest = templateRegisterTest().querySelector('#inputPassword');
        const confirmPasswordTest = templateRegisterTest().querySelector('#inputConfirm');
        passwordTest.value = '1234567';
        confirmPasswordTest.value = 'contrasenafalsa';
        const messagePasswordTest = templateRegisterTest().querySelector('#errorPassword');

        const btnTest = templateRegisterTest().querySelector('#viewWall');
        btnTest.dispatchEvent(new Event('click')); 
        clickRegister(templateRegisterTest());
        expect(messagePasswordTest.textContent).toBe('Tus contraseñas no coinciden, intentalo de nuevo');
    });
});
