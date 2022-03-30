// importamos la funcion que vamos a testear
import { changeView } from '../../src/view-controler/route.js';

jest.mock('../../src/Firebase/firebaseImport.js');
/* src\Firebase\firebaseImport.js */

const viewRegisterTest = () =>{
  const registerTest = `<p id="viewTest">Esto es un texto de prueba</p>`;
  const divTest = document.createElement('div');
  divTest.innerHTML = registerTest;
  return divTest;
}

const componentsTest = {
  register : viewRegisterTest,
  ecotraveler: viewRegisterTest,
}

describe ('debería cargar la vista register', () =>{
  it ('debería mostrar la vista register', () =>{
    document.body.innerHTML = '<section id="container"></section>';
    changeView('#/register', componentsTest);
    expect(document.getElementById("container").textContent).toEqual('Esto es un texto de prueba');
  })
  it ('debería mostrar la vista de muro', () =>{
    document.body.innerHTML = '<section id="container"></section>';
    changeView('#/ecoTraveler', componentsTest);
    expect(document.getElementById("container").textContent).toEqual('Esto es un texto de prueba');
  })
})

describe('changeView', () => {
  it('debería ser una función', () => {
    expect(typeof changeView).toBe('function');
  });
});

