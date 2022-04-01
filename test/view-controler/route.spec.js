// importamos la funcion que vamos a testear
import { changeView } from '../../src/view-controler/route.js';

jest.mock('../../src/Firebase/firebaseImport.js');
/* src\Firebase\firebaseImport.js */

//funciones para cada caso

const viewRegisterTest = () =>{
  const registerTest = `<p id="viewTest">Esto es un texto de prueba para register</p>`;
  const divRegisterTest = document.createElement('div');
  divRegisterTest.innerHTML = registerTest;
  return divRegisterTest;
}
const viewEcotravelerTest = () =>{
  const EcotravelerTest = `<p id="viewTest">Esto es un texto de prueba para el muro</p>`;
  const divEcotravelerTest = document.createElement('div');
  divEcotravelerTest.innerHTML = EcotravelerTest;
  return divEcotravelerTest;
}
const viewAccountTest = () =>{
  const AccountTest = `<p id="viewTest">Esto es un texto de prueba para create account</p>`;
  const divAccountTest = document.createElement('div');
  divAccountTest.innerHTML = AccountTest;
  return divAccountTest;
}
const viewNotFoundTest = () =>{
  const notFoundTest = `<p id="viewTest">Esto es un texto de prueba para notFound 404</p>`;
  const divNotFoundTest = document.createElement('div');
  divNotFoundTest.innerHTML = notFoundTest;
  return divNotFoundTest;
}

//components de prueba
const componentsTest = {
  register : viewRegisterTest,
  ecotraveler: viewEcotravelerTest,
  account: viewAccountTest,
  notFound: viewNotFoundTest,
}

describe ('changeView', () =>{
  it ('debería mostrar la vista register', () =>{
    document.body.innerHTML = '<section id="container"></section>';
    changeView('#/register', componentsTest);
    expect(document.getElementById("container").textContent).toEqual('Esto es un texto de prueba para register');
  })
  it ('debería mostrar la vista ecotraveler', () =>{
    document.body.innerHTML = '<section id="container"></section>';
    changeView('#/ecoTraveler', componentsTest);
    expect(document.getElementById("container").textContent).toEqual('Esto es un texto de prueba para el muro');
  })
    it ('debería mostrar la vista create account', () =>{
    document.body.innerHTML = '<section id="container"></section>';
    changeView('#/createAccount', componentsTest);
    expect(document.getElementById("container").textContent).toEqual('Esto es un texto de prueba para create account');
  })
    it ('debería mostrar la vista not found', () =>{
    document.body.innerHTML = '<section id="container"></section>';
    changeView('#/estarutanoexiste', componentsTest);
    expect(document.getElementById("container").textContent).toEqual('Esto es un texto de prueba para notFound 404');
  })
})

// describe('changeView', () => {
//   it('debería ser una función', () => {
//     expect(typeof changeView).toBe('function');
//   });
// });

