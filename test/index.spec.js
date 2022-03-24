// importamos la funcion que vamos a testear
import { changeRoute } from '../src/lib/router';

describe('changeRoute', () => {
  it('debería ser una función', () => {
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
      }
    }
    changeRoute('#register', components);
    //expect(t).toBe('function');
  });
});
