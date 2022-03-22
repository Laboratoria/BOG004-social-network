import { register } from "../../src/lib/register";

jest.mock('../../src/Configfirebase/firebase-imports.js');

describe('register',()=>{
    it('', ()=>{
    const result = register(); 

    const email = result.querySelector('#email');
    const password = result.querySelector('#password');
    email.value = 'hola@gmail.com'
    password.value = '123456789'
     //console.log(email.value,password.value)
    const btn = result.querySelector('#btnregister');
    btn.dispatchEvent(new Event('click'));
    //console.log(btn.dispatchEvent(new Event('click')))
    })

    it('', ()=>{
        const result = register(); 
        const btn = result.querySelector('.btnconfirmation');
        btn.dispatchEvent(new Event('click'));
    })

    it('', ()=>{
        const result = register(); 
        const btn = result.querySelector('#login2');
        btn.dispatchEvent(new Event('click'));
    })

    it('', ()=>{
        const result = register(); 
        const btn = result.querySelector('.logo-R');
        btn.dispatchEvent(new Event('click'));
    })
})



// // importamos la funcion que vamos a testear
// import { router } from '../src/lib/index';

// describe('myFunction', () => {
//   it('debería ser una función', () => {
//     expect(typeof router).toBe('function');
//   });
// });
