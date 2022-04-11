import { createFormUser } from '../../src/view/register.js';

jest.mock('../../src/lib/firebase-utils.js');
describe('createFormUser', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="sectionGrid"><section id="container"></section></div>';
  });
  it('email es correcto', () => {
    const result = createFormUser();
    const errorEmail = result.querySelector('#error-message-email');
    expect(errorEmail.textContent).toBe('Ingresa un email valido');
    expect(errorEmail.classList).toContain('error-message-hidden');
  });
  it('password es correcto', () => {
    const result = createFormUser();
    const password = result.querySelector('#register-password');
    const repeatPassword = result.querySelector('#register-repeat-password');
    const errorPassword = result.querySelector('#error-message-password');
    password.value = '123';
    repeatPassword.value = '1234';
    expect(errorPassword.textContent).toBe('La contraseña no coincide');
  });
});
