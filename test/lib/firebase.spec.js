import { signInEmail } from '../../src/lib/firebase.js';

jest.mock('../../src/lib/firebase.util.js');

describe('8990850', () => {
  afterAll(() => {
    jest.resetAllMocks();
  });
  it('should change to login', async () => {
    const email = 'pepe@pepe.com';
    const password = '123';
    window.alert = jest.fn();
    await signInEmail(email, password);

    console.log(window.alert.mock.calls);

    expect(window.location.hash).toBe('#login');
  });
  it('should stay in register', async () => {
    const email = 'pepita@pepe.com';
    const password = '123';
    window.location.hash = 'registro';
    window.alert = jest.fn();
    await signInEmail(email, password);
    expect(window.location.hash).toBe('#registro');
  });
});
