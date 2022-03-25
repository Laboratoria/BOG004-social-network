// importamos la funcion que vamos a testear
import { changeRoute } from '../src/lib/router';

describe('changeRoute', () => {
  it('deberia cambia', () => {
    document.body.innerHTML = '<div id="container"></div>'
    const components = {
      register: () => {
        const divLogin = document.createElement('div');
        divLogin.innerHTML = 'Hola mundo';
        return divLogin;
      },
      error404: () => {
        const divLogin = document.createElement('div');
        divLogin.innerHTML = 'errooooooor';
        return divLogin;
      },
    };
    changeRoute('#register', components);
    expect(components.register).not.toBe(components.error404);
  });
});
