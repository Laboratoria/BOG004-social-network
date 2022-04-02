// importamos la funcion que vamos a testear
import { router } from '../src/lib/index';

describe('myFunction', () => {
  it('debería ser una función', () => {
    expect(typeof router).toBe('function');
  });
});
