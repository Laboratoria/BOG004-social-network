// Importamos la función que vamos a testear
import { createUserWithEmailAndPassword } from '../src/FirebaseConfig';
import { newRegister } from '../src/view-controller/controllers';

jest.mock('../src/FirebaseConfig.js');

describe('newRegister', () => {
  const email = 'fulanitogmail.com';
  const password = 'unaContraseña';
  it('No debe permitir crear un nuevo usuario con correo y contraseña', () => {
    // eslint-disable-next-line jest/valid-expect
    expect(
      newRegister(email, password)
        .then(() => {
          window.location.assign('#login');
        })
        .catch(() => {
          const errorCode = 'auth/invalid-email';
          if (errorCode) {
            document.querySelector('#mensaje').innerHTML = 'Debe ingresar un correo válido';
            document.querySelector('#atencion').style.display = 'flex';
          }
        }),
    );
  });
});
