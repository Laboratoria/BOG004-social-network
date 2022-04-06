import { register } from '../src/lib/auth';
import { } from '../src/lib/__mocks__/auth-mock.js';

jest.mock('../src/lib/firebase-utils.js');

describe('Pruebas para register', () => {
  it('Se debe obtener el mensaje del correo', () => {
    const email = 'correo-de-prueba@gmail.com';
    const password = 'contraseña-de-prueba';
    document.body.innerHTML = '<div id="message"></div>';
    register(email, password).then(() => {
      const mensaje = document.querySelector('#message').textContent;
      expect(mensaje).toBe('Se ha enviado un mensaje al correo: correo-de-prueba@gmail.com para verificar la creación de la cuenta');
    });
  });
});
