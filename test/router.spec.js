import Router from '../src/router';
// import registro from '../src/pages/registro.js';

// describe('Router', () => {
//   it('`loadRoute` carga la ruta correcta', () => {
//     registro.template = jest.fn();
//     const router = new Router([registro]);
//     router.loadRoute('registro');
//   });
// });

const rutas = [{
  path: '/',
  template: '',
  script: () => { },
},
{
  path: '/registro',
  template: '<div id="saludo">Hola mundo</div>',
  script: () => { },
},
];

describe('registro', () => {
  it('debería cargar el template al hash registro', () => {
    document.body.innerHTML = '<div id="container" ></div>';
    const router = new Router(rutas);
    router.loadRoute('registro');
    console.log(document.body);
    // router.loadRoute('registro');
    expect(document.querySelector('#saludo')).toBeTruthy();
  });
});