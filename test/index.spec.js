// importamos la funcion que vamos a testear
import { changeView } from '../src/lib/router.js';

describe('changeView', () => {
  it('debería ser una función', () => {
    expect(typeof changeView).toBe('function');
  });

  it('Deberia devolver el contenido de la pagina de registro', () => {
    document.body.innerHTML = '<div id="root">'
    + '</div>';

    expect(changeView('').innerHTML).toMatch(/Te damos la bienvenida a mommi/i);
  });
});
