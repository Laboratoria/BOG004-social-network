import signUp from '../../src/view/login.js';
import { signInWithPopup, signInWithEmailAndPassword } from '../../src/lib/firebase-utils.js';
import { login } from '../../src/lib/auth.js';


jest.mock('../../src/lib/firebase-utils.js');

describe('Pruebas Unitarias Login', () => {
    // test('Al hacer click en botón de google, se ejecuta la función "signInWithPopup"', async () => {
    //     const container = signUp();
    //     const googleBtn = container.querySelector('.googleLogo');
    //     googleBtn.dispatchEvent(new Event('click'));
    //     await signInWithPopup.mockResolvedValue();
    //     // expect(window.location.port).toBe('/');
    // });
    it('muestra un mensaje de alerta ', async () => {
        const container = signUp();
        // const email = container.querySelector('#loginEmail');
        // const pass = container.querySelector('#loginPassword');
        const alert = container.querySelector('#messageAlert');

        const email = 'mariagmail.com';
        const pass = '123456';

        const getInto = container.querySelector('#btnLogin');

        getInto.dispatchEvent(new Event('click'));
        login(email, pass);
        console.log(email, pass);
        // console.log(alert.textContent);
        // expect(alert.textContent).toBe('hola');

    });
    it.only('Login debería ser una función', () => {
        expect(typeof login).toBe('function');
    });
});
