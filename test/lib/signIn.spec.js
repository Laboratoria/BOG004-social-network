import { userSignIn } from '../../src/lib/signIn.js';

jest.mock('../../src/lib/firebase-utils.js');

describe('Ingreso a la página Petshare', () => {
  it('is a function', () => {
    expect(typeof userSignIn).toBe('function');
  });
  it('incorrect sign in', () => {
    const email = 'email@lau.com';
    const pass = '12345';
    userSignIn(email, pass).then(() => {
      expect(window.location.hash).toEqual('#/timeline');
    });
  });
});
