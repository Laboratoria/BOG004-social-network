import { singIn } from '../view-controler/controllers.js';

jest.mock('../src/lib/firebase-utils.js');
describe('SignIn Function', () => {
  it('Debería ser una función', () => {
    expect(typeof singIn).toBe('function');
  });
};