import { registerUser } from "../src/Firebase/auth.js";
// importamos la funcion que vamos a testear
// import { myFunction } from '../src/lib/index';

jest.mock('../src/Firebase/__ mocks__/firebase-import.js/')


// describe('myFunction', () => {
//     it('debería ser una función', () => {
//         expect(typeof myFunction).toBe('function');
//     });
// });

describe('registerUser', () => {
    it('', () => {
        const register = registerUser();
        const email = register.querySelector('#emailRegister');
        const password = register.querySelector('#passwordRegister');

        console.log(email.innerHTML)
    });
});