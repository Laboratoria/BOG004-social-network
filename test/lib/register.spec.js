import { register } from "../../src/lib/register";

jest.mock('../../src/Configfirebase/firebase-imports.js');

describe('register',()=>{
    it('', ()=>{
    const result = register(); 

    const mail = result.getElementById('email');
    const pass = result.querySelector('#password');
    console.log(mail,pass)
    // mail.value = 'hola@gmail.com'
    // pass.value = '123456789'

    // const btn = result.querySelector('#btnregister');
    // btn.dispatchEvent(new Event('click'));
    })
})



// // importamos la funcion que vamos a testear
// import { router } from '../src/lib/index';

// describe('myFunction', () => {
//   it('debería ser una función', () => {
//     expect(typeof router).toBe('function');
//   });
// });
