import Router from '../src/router';

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

describe('registro', () => {
  it('debería cargar el template al hash registro', () => {
    document.body.innerHTML = '<div id="container" ></div>';
    const router = new Router(rutas);
    router.loadRoute('registro');
    // router.loadRoute('registro');
    expect(document.querySelector('#saludo')).toBeTruthy();
  });
  it('el template de registro debería ser Hola Mundo', () => {
    document.body.innerHTML = '<div id="container" ></div>';
    const router = new Router(rutas);
    router.loadRoute('registro');
    expect(document.getElementById('container').textContent).toEqual('Hola mundo');
  });
  it('el template de registr debería ser imagen', () => {
    const router = new Router(rutas);
    router.loadRoute('registr');
    const div404 = document.querySelector('.no404');
    expect(div404).toBeTruthy();
  });
});
