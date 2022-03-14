import { obtenerRecetas } from '../../src/lib/firebase-base-de-datos'
import { collection } from '../../src/lib/firestore';
 
jest.mock('../../src/lib/firebase-utils');
 
describe('obtenerRecetas', () => {
    it('debería ser una función', async() => {
      expect.assertions(1)
      const dbTest = {};
      const result = await obtenerRecetas(dbTest);
      // que collection de firebase se llamo una ves con dbTest y 'recetas' como paramentro
      expect(collection.mock.calls[0]).toEqual([dbTest, 'recetas'])
      // que getDocs se llamo con el valor de retorno de collection
      // retorna una promesa q resuelve a un array
    });
  });

 
