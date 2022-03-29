import { registerUser } from "../src/Firebase/auth.js";
// importamos la funcion que vamos a testear
// import { myFunction } from '../src/lib/index';

jest.mock('../src/Firebase/firebase-import.js')

describe('myFunction', () => {
    it('debería ser una función', () => {
        expect(typeof registerUser).toBe('function');
    });
});

// describe('registerUser', () => {
//     it('', () => {
//         const register = registerUser();
//         const email = register.querySelector('#emailRegister');
//         const password = register.querySelector('#passwordRegister');


//         //data para pruebas:
//         email = "danielahuyo@hotmail.com"
//         password = "1234"


//         console.log(email.innerHTML)
//     });
// });