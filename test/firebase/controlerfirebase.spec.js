/* eslint-disable no-promise-executor-return */
import { createUser } from '../../src/firebase/controlerfirebase.js';

jest.mock('../../src/firebase/firebase-utils.js');

describe('createUser', () => {
  it('debería ser una función', () => {
    expect(typeof createUser).toBe('function');
  });

  it('Deberia permitir la creacion de un usuario', async () => {
    document.body.innerHTML = '<div id="id-message-error-record"></div>';
    createUser('ferchito@gmail.com', 'miPasswordSeguro');
    await new Promise((r) => setTimeout(r, 2000));// Espera 2 segundos
    expect(document.getElementById('id-message-error-record').innerHTML).toBe('');
  });

  it('Deberia arrojar un error en la crecion', async () => {
    document.body.innerHTML = '<div id="id-message-error-record"></div>';
    createUser('juanchito@gmail.com', 'miPasswordSeguro');
    await new Promise((r) => setTimeout(r, 2000));
    expect(document.getElementById('id-message-error-record').innerHTML).not.toBe('');
  });
});
