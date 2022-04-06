// import { async } from '/regenerator-runtime';
import { signInEmail, logInEmail, signInGoogle } from '../../src/lib/firebase.js';
// import { signInWithPopup } from '../../src/lib/firebase.util.js';

jest.mock('../../src/lib/firebase.util.js');

describe('8990850', () => {
  beforeAll(() => {
    window.alert = jest.fn();
  });
  // afterAll(() => {
  //   //jest.resetAllMocks();
  // });
  it('should change to login', async () => {
    const email = 'pepe@pepe.com';
    const password = '123';

    await signInEmail(email, password);

    expect(window.location.hash).toBe('#login');
  });
  it('should stay in register', async () => {
    const email = 'pepita@pepe.com';
    const password = '123';
    window.location.hash = 'registro';

    await signInEmail(email, password);
    expect(window.location.hash).toBe('#registro');
  });
});

describe('logInEmail retorna inicio sesión', () => {
  beforeAll(() => {
    window.alert = jest.fn();
    window.sessionStorage = { setItem: jest.fn() };
    window.JSON = { stringify: jest.fn() };
  });
  // afterAll(() => {
  //   jest.resetAllMocks();
  // });
  it('should change to post', async () => {
    const email = 'augusto@ejemplo.com';
    const password = '4321';
    await logInEmail(email, password);
    expect(window.location.hash).toBe('#post');
  });
  it('should to post', async () => {
    const email = 'joel@ejemplo.com';
    const password = '4321';
    await logInEmail(email, password);
    expect(window.alert).toHaveBeenCalled();
  });
});

describe('signInGoogle retorna post', () => {
  beforeAll(() => {
    window.sessionStorage = { setItem: jest.fn() };
    window.JSON = { stringify: jest.fn() };
  });

  it('cambia a  post', async () => {
    await signInGoogle();
    expect(window.location.hash).toBe('#post');
  });
  // it('se mantiene en login', async () => {
  //   await signInGoogle();
  //   window.location.hash = 'login';
  //   sessionStorage.clear();
  //   expect(window.location.hash).toBe('#login');
  // });
});
