import { changeTmp } from '../src/view-controller/router.js';

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


//   it('register', () => {
//     //paso 1
//     newLogin('ssinuc@test.com', '1234') //-->hace un redirect
//     //confirmar ls efectos de esta funcion
//     .then(() => {
//       expect(windowd.location).toBe('#/')
//     })

//     //**************** */
//     showLogin()
//     document.querySelector('#email').vlalue='ssinuco@test.com'
//     document.querySelector('#password').vlalue='1234''
//     document.querySelector('#button).click()
//     //confirmar
//     expect()

//   })
// });