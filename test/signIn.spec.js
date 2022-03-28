// importamos la funcion que vamos a testear
import signIn from '../src/lib/signIn.js';

jest.mock('../src/lib/firebase-imports.js');
// Función signIn
describe('Función para ingresar con correo electrónico', () => {
  it('Debería ser una función', () => {
    expect(typeof signIn).toBe('function');
  });
  it('Deberia ejecutar el error', () => {
    const result = signIn();
    
    const email = result.querySelector('#email');
    email.value = `viviana.perez28@gmail`;

    const btn = result.querySelector('#signInForm');
    btn.dispatchEvent(new Event('submit'));

    const errorMessage = result.querySelector('.errorM');
    console.log(errorMessage.textContent);

  });
});
