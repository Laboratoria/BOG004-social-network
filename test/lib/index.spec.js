// importamos la funcion que vamos a testear
import { components } from '../../src/lib/index.js';

jest.mock('../../src/lib/firebase-utils.js');

describe('view components', () => {
  it('debería ser una función', () => {
    expect(typeof components).toBe('object');
  });
});
