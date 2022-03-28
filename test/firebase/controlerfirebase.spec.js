import {
  createUser, existingUser, observerUserState, signInWithGoogle, closeSession,
} from '../../src/firebase/controlerfirebase.js';

jest.mock('../../src/firebase/firebase-utils.js');

describe('createUser', () => {
  it('debería ser una función', () => {
    expect(typeof createUser).toBe('function');
  });

  it('Deberia permitir la creacion de un usuario', async () => {
    document.body.innerHTML = '<div id="id-message-error-record"></div>';
    createUser('ferchito@gmail.com', 'miPasswordSeguro');
    await new Promise((r) => { setTimeout(r, 2000); });// Espera 2 segundos
    expect(document.getElementById('id-message-error-record').innerHTML).toBe('');
  });

  it('Deberia arrojar un error en la crecion', async () => {
    document.body.innerHTML = '<div id="id-message-error-record"></div>';
    createUser('juanchito@gmail.com', 'miPasswordSeguro');
    await new Promise((r) => { setTimeout(r, 2000); });// Espera 2 segundos
    expect(document.getElementById('id-message-error-record').innerHTML).not.toBe('');
  });
});

describe('existingUser', () => {
  it('debería ser una función', () => {
    expect(typeof existingUser).toBe('function');
  });
  it('Deberia permitir el ingreso de un usuario', async () => {
    document.body.innerHTML = '<div id="id-message-error-login"></div>';
    existingUser('ferchito@gmail.com', 'miPasswordSeguro');
    await new Promise((r) => { setTimeout(r, 2000); });// Espera 2 segundos
    expect(document.getElementById('id-message-error-login').innerHTML).toBe('');
  });

  it('Deberia arrojar un error en el ingreso', async () => {
    document.body.innerHTML = '<div id="id-message-error-login"></div>';
    existingUser('hola', 'mi');
    await new Promise((r) => { setTimeout(r, 2000); });// Espera 2 segundos
    expect(document.getElementById('id-message-error-login').innerHTML).not.toBe('');
  });
});

describe('observerUserState', () => {
  it('debería ser una función', () => {
    expect(typeof observerUserState).toBe('function');
    observerUserState();
  });
});

describe('signInWithGoogle', () => {
  it('debería ser una función', () => {
    expect(typeof signInWithGoogle).toBe('function');
    signInWithGoogle();
  });
});

describe('closeSession', () => {
  it('debería ser una función', async () => {
    expect(typeof closeSession).toBe('function');
    closeSession();
  });
});


describe('getPostList', ()=>{
  it('debería ser una función', async () => {
    expect(typeof getPostList).toBe('function');
    getPostList();
    aqui tocaria suscribirse o convertirt la suscripcion a un promise para ver los valores
    expect(document.getElementById('wall').innerHTML).toBe('');
  });

}

);