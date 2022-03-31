import { registerUser } from "../src/Firebase/auth.js";
import { register } from "../src/view/register.js";
// importamos la funcion que vamos a testear

import { createUserWithEmailAndPassword } from '../src/Firebase/firebase-import.js';

jest.mock('../src/Firebase/firebase-import.js')

describe('registerUser', () => {
    it('debería ser una función', () => {
        expect(typeof registerUser).toBe('function');
    });

    //Esta no está testeando absolutamente nada :)
    it('Debería permitir el registro del usuario', (done) => {
        document.body.innerHTML = '<p id="errorMessage">error por defecto</p>';
        registerUser('holaholaquetal@gmail.com', 'contraseña123')
            .then(() => {
                expect(document.getElementById('errorMessage').innerHTML).toBe('');
                done();
            })
    });

    it.only('El usuario no puede registrarse correctamente', (done) => {
        document.body.innerHTML = '<p id="errorMessage"></p>';
        registerUser('holahol34@gmail.com', 'contr')
            .then(() => {
                console.log(createUserWithEmailAndPassword.mock.calls[0])
                expect(createUserWithEmailAndPassword.mock.calls[0])
                    .toEqual([{ _id: 'get-auth' }, 'holahol34@gmail.com', 'contr'])
                done();
            })
    });
});