// importamos la funcion que vamos a testear
import { changeView } from '../src/lib/viewController.js';

describe('changeView ', () => {
  it('debería ser una función', () => {
    expect(typeof changeView).toBe('function');
  });
});
