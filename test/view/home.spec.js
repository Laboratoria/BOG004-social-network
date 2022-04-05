import home from '../../src/view/home.js';
import { changeView } from '../../src/view-controler/router.js'
jest.mock('../../src/lib/firebase-utils.js');

describe('Pruebas Unitarias Home', () => {
    test('Al hacer click en "ingresa", dirige a sección de Login', () => {
        const container = home();
        const loginBtn = container.querySelector('#loginBtn');
        loginBtn.dispatchEvent(new Event('click'));
        console.log(window.location.hash);
        // expect(window.location.pathname).toBe('/');
    })
});