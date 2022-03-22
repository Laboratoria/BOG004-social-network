// importamos la funcion que vamos a testear
import { changeView } from '../src/lib/router.js';

describe('changeView', () => {
  it('debería ser una función', () => {
    expect(typeof changeView).toBe('function');
  });
});
