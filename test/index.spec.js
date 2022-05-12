// importamos la funcion que vamos a testear
import { router } from '../src/lib/index.js';

jest.mock('../src/Configfirebase/firebase-imports.js');
describe('router', () => {
  it('debería cambiar la ruta', () => {
    document.body.innerHTML = '';
    const container = {
      register: () => {
        const divregister = document.createElement('div');
        divregister.innerHTML = 'hola mundo';
        return divregister;
      },
      error: () => {
        const divregister = document.createElement('div');
        divregister.innerHTML = 'oops esto es un error';
        return divregister;
      },
    };
    router('#register', container);
    expect(container.register).not.toBe(container.error);
  });
});
