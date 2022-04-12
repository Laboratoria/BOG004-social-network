import { registerUser } from "../src/Firebase/auth.js";
import { loginUser } from "../src/Firebase/auth.js";
// importamos la funcion que vamos a testear

import { createUserWithEmailAndPassword } from '../src/Firebase/firebase-import.js';
import { signInWithEmailAndPassword } from '../src/Firebase/firebase-import.js';

jest.mock('../src/Firebase/firebase-import.js')

describe('registerUser', () => {
    it('debería ser una función', () => {
        expect(typeof registerUser).toBe('function');
    });

    //Test para validar que "errorMessaje" por defecto está vacio (campo para muestra de mensajes de error)
    it('Debería permitir el registro del usuario', (done) => {
        document.body.innerHTML = '<p id="errorMessage"></p>';
        registerUser('holaholaquetal@gmail.com', 'contraseña123')
            .then(() => {
                expect(document.getElementById('errorMessage').innerHTML).toBe('');
                done();
            })
    });
    // Test de implementación 
    it('En esta función viajan correctamente los parametros en registerUser', (done) => {
        registerUser('holahol34@gmail.com', 'contr')
            .then(() => {
                console.log(createUserWithEmailAndPassword.mock.calls[1])
                expect(createUserWithEmailAndPassword.mock.calls[1])
                    .toEqual([{ _id: 'get-auth' }, 'holahol34@gmail.com', 'contr'])
                done();
            })
    });
});

 // Test de implementación 
 it('En esta función viajan correctamente los parametros en loginUser', (done) => {
    loginUser('holaholaquetal@gmail.com', 'contraseña123')
        .then(() => {
            console.log(signInWithEmailAndPassword.mock.calls[0])
            expect(signInWithEmailAndPassword.mock.calls[0])
                .toEqual([{ _id: 'get-auth' }, 'holaholaquetal@gmail.com', 'contraseña123'])
            done();
        })
});
