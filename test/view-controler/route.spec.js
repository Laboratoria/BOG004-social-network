// importamos la funcion que vamos a testear
import { changeView } from '../../src/view-controler/route.js';

jest.mock('../../src/__mocks__/firebaseImport.js');
describe('changeView', () => {
  it('debería ser una función', () => {
    expect(typeof changeView).toBe('function');
  });
});
