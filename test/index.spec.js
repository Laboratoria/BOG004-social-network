import { changeView } from '../src/view-controler/router';
jest.mock('../src/lib/firebase-utils.js');
document.body.innerHTML = '<div id="sectionGrid"><section id="container"></section></div>';
describe('changeView y login', () => {
  it('debería mostrar la vista login', () => {
    changeView('#/login');
    expect(document.getElementById('container').textContent).toContain('¡Hola!');
  });
  it('debería mostrar la vista 404', () => {
    changeView('#/1235654');
    expect(document.getElementById('container').textContent).toContain('Página no encontrada');
  });
});