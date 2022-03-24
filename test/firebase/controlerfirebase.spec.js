import { createUser } from '../../src/firebase/controlerfirebase.js';

jest.mock('../../src/firebase/firebase-utils.js');

describe('createUser', () => {
  it('debería ser una función', () => {
    expect(typeof createUser).toBe('function');
  });
});
