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
  script: () => {},
},
{
  path: '/registro',
  template: '<div id="saludo">Hola mundo</div>',
  script: () => {},
},
];

// const page404 = `<div class="no404"> <figure>
// <img src="https://res.cloudinary.com/dtaq1ip2g/image/upload/v1647617297/404-removebg-preview_rdmlwg.png" alt="Trulli" style="width:100%">
// </figure></div>
// <footer></footer>`;

describe('registro', () => {
  it('debería cargar el template al hash registro', () => {
    document.body.innerHTML = '<div id="container" ></div>';
    const router = new Router(rutas);
    router.loadRoute('registro');
    console.log(document.body);
    // router.loadRoute('registro');
    expect(document.querySelector('#saludo')).toBeTruthy();
  });
  it('el template de registro debería ser Hola Mundo', () => {
    document.body.innerHTML = '<div id="container" ></div>';
    const router = new Router(rutas);
    router.loadRoute('registro');
    console.log(document.body);
    expect(document.getElementById('container').textContent).toEqual('Hola mundo');
  });
  it('el template de registr debería ser imagen', () => {
    const router = new Router(rutas);
    router.loadRoute('registr');
    console.log(document.body);
    const div404 = document.querySelector('.no404');
    expect(div404).toBeTruthy();
  });
});
