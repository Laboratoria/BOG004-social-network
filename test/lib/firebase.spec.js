// import { async } from '/regenerator-runtime';
import { signInEmail, logInEmail, signInGoogle } from '../../src/lib/firebase.js';
import { signInWithPopup } from '../../src/lib/firebase.util.js';

jest.mock('../../src/lib/firebase.util.js');

describe('El usuario se registra y habilita su acceso a login', () => {
  beforeAll(() => {
    window.alert = jest.fn();
  });
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

// jest.spyOn(window, 'alert').mockImplementation(() => {});
describe('logInEmail retorna inicio sesión', () => {
  beforeEach(() => {
    window.alert = jest.fn();
    window.sessionStorage = { setItem: jest.fn() };
    window.JSON = { stringify: jest.fn() };
  });

  it('should change to post', async () => {
    const email = 'verificado';
    const password = '4321';
    await logInEmail(email, password);
    expect(window.location.hash).toBe('#post');
  });
  it('should to post', async () => {
    const email = 'no_verificado';
    const password = '4321';
    await logInEmail(email, password);
    expect(window.alert).toHaveBeenLastCalledWith('Para iniciar sesión debes confirmar el link que enviamos a tu correo electrónico');
  });
  it('should to post ejempleo', async () => {
    const email = 'error';
    const password = '4321';
    expect.assertions(1);
    try {
      await logInEmail(email, password);
      expect(window.alert).toHaveBeenLastCalledWith('Usario y/o contraseña inválido');
    } catch (error) {
      console.log(error);
    }
  });
});

describe('signInGoogle retorna post', () => {
  beforeAll(() => {
    // window.alert = jest.fn();
    window.sessionStorage = { setItem: jest.fn() };
    window.JSON = { stringify: jest.fn() };
  });

  it('cambia a  post', async () => {
    await signInGoogle();
    expect(window.location.hash).toBe('#post');
  });
  it('se mantiene en login', async () => {
    // sessionStorage.clear();
    // window.location.hash = 'login';
    const userVerified = {
      user: { emailVerified: true },
    };

    // Caso de error de autenticacion.
    const errorObj = {
      code: 0,
      message: 'Failed',
    };

    signInWithPopup.mockImplementation(jest.fn(
      (auth, provider) => new Promise((resolve, reject) => {
        console.log(provider);
        if (auth === 'houtsf') {
          resolve(userVerified);
        } else {
          reject(errorObj);
        }
      }),
    ));
    await signInGoogle();
    console.log('aaaaaaaaaaaaaaaaaaaaaaaa');
    expect(window.alert).toHaveBeenCalled();
  });
});
