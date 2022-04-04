import Router from '../src/router';

const rutas = [{
  path: '/registro',
  template: '<div id="registro">Hola mundo</div>',
  state: 'unlogged',
  script: () => {},
},
{
  path: '/post',
  template: '<div id="post">Hola mundo</div>',
  state: 'logged',
  script: () => {},
},
{
  path: '/perfil',
  template: '<div id="perfil">Hola mundo</div>',
  state: 'logged',
  script: () => {},
},
{
  path: '/',
  template: '<div id="home">Hola mundo</div>',
  state: 'unlogged',
  script: () => {},
},
];

describe('registro', () => {
  it('debe permitir acceder a la vista registro si no esta logueado', () => {
    document.body.innerHTML = '<div id="container" ></div>';
    const router = new Router(rutas);
    sessionStorage.clear();
    router.loadRoute('registro');
    expect(document.querySelector('#registro')).toBeTruthy();
  });
  it('debe redireccionar a la vista perfil al estar logueado', () => {
    document.body.innerHTML = '<div id="container" ></div>';
    const router = new Router(rutas);
    sessionStorage.setItem('user', JSON.stringify({ emailVerified: true }));
    router.loadRoute('registro');
    expect(window.location.hash).toEqual('#perfil');
  });
  it('debería cargar el template post al estar logueado', () => {
    document.body.innerHTML = '<div id="container" ></div>';
    const router = new Router(rutas);
    router.loadRoute('post');
    expect(document.querySelector('#post')).toBeTruthy();
  });
  it('deberia redireccionar a home al no estar logueado', () => {
    document.body.innerHTML = '<div id="container" ></div>';
    const router = new Router(rutas);
    sessionStorage.clear();
    router.loadRoute('post');
    expect(window.location.hash).toEqual('');
  });
  it('al no encontrar la ruta deberia mandar a la pagina 404', () => {
    const router = new Router(rutas);
    router.loadRoute('registr');
    const div404 = document.querySelector('.no404');
    expect(div404).toBeTruthy();
  });
});
