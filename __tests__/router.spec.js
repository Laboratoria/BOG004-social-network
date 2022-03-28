import { changeTmp } from '../src/view-controller/router.js';

// const vistaPrueba = () => {
//   const tmpPrueba = '<div id='textoPrueba'> Esto es una vista de prueba</div>';
//   const divPrueba = document.createElement('div');
//   divPrueba.innerHTML = tmpPrueba;
//   return divPrueba;
// };

// const components = {
//   home: vistaPrueba,
// };

describe('changeTmp', () => {
  it('debería cargar el tmpPrueba a la vista home', () => {
    document.body.innerHTML = '<section id="container"></section>';
    const components = {
      home: () => {
        const divElemt = document.createElement('div');
        divElemt.innerHTML = 'Esto es una vista de prueba';
        return divElemt;
      },
    };
    changeTmp('#', components);
    expect(document.getElementById('container').textContent.trim()).toEqual('Esto es una vista de prueba');
  });
});
