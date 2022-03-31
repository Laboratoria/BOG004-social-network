import { registerUser } from "../src/Firebase/auth.js";
import { register } from "../src/view/register.js";
// importamos la funcion que vamos a testear

jest.mock('../src/Firebase/firebase-import.js')

describe('registerUser', () => {
    it('debería ser una función', () => {
        expect(typeof registerUser).toBe('function');
    });
    it('Debería permitir el registro del usuario', () => {
        document.body.innerHTML = '<p id="errorMessage"></p>';
        registerUser('holaholaquetal@gmail.com', 'contraseña123');
        expect(document.getElementById('errorMessage').innerHTML).toBe('');
    });
    // it('El usuario no puede registrarse correctamente', () => {
    //     document.body.innerHTML = '<p id="errorMessage"></p>';
    //     registerUser('holaholaquetal@gmail.com', 'contraseña123');
    //     expect(document.getElementById('errorMessage').innerHTML).not.toBe("");
    // });
    it('El usuario no puede registrarse correctamente', () => {
        document.body.innerHTML = '<p id="errorMessage"></p>';
        registerUser('holahol34@gmail.com', 'contr');
        expect(document.getElementById('errorMessage').innerHTML).toBe("La contraseña debe tener mínimo 6 caracteres");
    });
});