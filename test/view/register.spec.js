// import { createFormUser, saveUser } from '../../src/view/register.js';
// import { register } from '../../src/lib/auth.js';

// jest.mock('../../src/lib/firebase-utils.js');

// describe('register', () => {
//     // it('', () => {
//     //   const createUserDOM = createFormUser();
//     //   const saveUserDOM = saveUser();

//     //   const pass = createUserDOM.querySelector('#register-password');
//     //   const repeatPass = createUserDOM.querySelector('#register-repeat-password');

//     //   pass.value = 'password1';
//     //   repeatPass.value = 'password2';

//     //   const submit = saveUserDOM.querySelectorAll('#register-form input:not([type="submit"])');
//     //   submit.dispatchEvent(new Event('submit'));
//     // });
//     it.only('Permite el registro de usuario', () => {
//       document.body.innerHTML= '<p id="error-message-password"></p>';
//       register('prueba@gmail.com', '123456')
//         .then(() => {
//           const message = document.querySelector('#error-message-password');
//           expect(message.innerHTML).toBe('');
//           done();
//         })
//     })
//   });

