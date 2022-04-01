// importamos la funcion que vamos a testear
import { changeView } from '../../src/lib/router.js';

describe('changeView', () => {
  it('debería ser una función', () => {
    expect(typeof changeView).toBe('function');
  });

  it('Deberia devolver el contenido de la pagina de registro', () => {
    document.body.innerHTML = '<section id="root">'
    + '</section>';

    expect(changeView('').innerHTML).toMatch(/Te damos la bienvenida a mommi/i);
  });

  it('Deberia devolver el contenido de la pagina de inicio de sesion', () => {
    document.body.innerHTML = '<section id="root">'
    + '</section>';

    expect(changeView('#login').innerHTML).toMatch(/Te damos la bienvenida a mommi/i);
  });

  it('Deberia devolver el contenido del muro', () => {
    document.body.innerHTML = '<section id="root">'
    + '</section>';

    expect(changeView('#wall').innerHTML).toMatch(/wall/i);
  });

  it('Deberia devolver el contenido del blog', () => {
    document.body.innerHTML = '<section id="root">'
    + '</section>';

    expect(changeView('#blogs').innerHTML).toMatch(/blogs/i);
  });

  it('Deberia devolver el contenido de books', () => {
    document.body.innerHTML = '<section id="root">'
    + '</section>';

    expect(changeView('#books').innerHTML).toMatch(/books/i);
  });

  it('Deberia devolver el contenido de featured', () => {
    document.body.innerHTML = '<section id="root">'
    + '</section>';

    expect(changeView('#featured').innerHTML).toMatch(/featured/i);
  });

  it('Deberia devolver el contenido de mostrecent', () => {
    document.body.innerHTML = '<section id="root">'
    + '</section>';

    expect(changeView('#mostrecent').innerHTML).toMatch(/most recent/i);
  });

  it('Deberia devolver el contenido de people', () => {
    document.body.innerHTML = '<section id="root">'
    + '</section>';

    expect(changeView('#people').innerHTML).toMatch(/people/i);
  });

  it('Deberia devolver el contenido de picture', () => {
    document.body.innerHTML = '<section id="root">'
    + '</section>';

    expect(changeView('#picture').innerHTML).toMatch(/picture/i);
  });

  it('Deberia devolver el contenido de 404', () => {
    document.body.innerHTML = '<section id="root">'
    + '</section>';

    expect(changeView('default').innerHTML).toMatch(/404/i);
  });
});
