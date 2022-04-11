// Importamos la función que vamos a testear
import { newRegister } from '../src/view-controller/controllers';

jest.mock('../src/FirebaseConfig/FirebaseConfig.js');

describe('newRegister', () => {
  const email = 'fulanitogmail.com';
  const password = 'unaContraseña';
  it('No debe permitir crear un nuevo usuario con correo y contraseña', () => {
    newRegister(email, password).toBeFalsy();
  });
});
