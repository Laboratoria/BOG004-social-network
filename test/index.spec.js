// importamos la funcion que vamos a testear
import {SignInUser} from '../src/lib/firebase.js';

jest.mock('../src/lib/firebase-imports.js');
// Función signIn
describe('Función para ingresar con correo electrónico', () => {
  it('Debería ser una función', () => {
    expect(typeof SignInUser).toBe('function');
  });
  it('Debe logearse con correo y contraseña', () => SignInUser('viviana.perez28@gmail.com', '123456')
    .then((user) => {
      console.log(user); 
      expect(user.email).toBe('viviana.perez28@gmail.com');
    }));
});
