// // importamos la funcion que vamos a testear

import Router from '../src/router.js';
import { routes } from '../src/routes.js';

// jest.mock('../../src/lib/firebase.auth-util.js')

describe('registro', () => {
  it('deberia Redireccionar a construccion', () => {
    // paso 1: Pintar la vista de registro
    const router = new Router(routes);
    router.loadRoute('registro');
    // paso 2: Darle valores a los input
    // paso 3: Hacer click en el boton
    // paso 4: Verificar que la url cambie
    expect(window.location.hash).toBe('post');
  });
});
