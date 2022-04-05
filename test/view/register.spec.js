import { createFormUser, saveUser } from '../../src/view/register.js';
import { register } from '../../src/lib/auth.js';

jest.mock('../../src/lib/firebase-utils.js');

describe('register', () => {
    it.only('deberia retornar Correo Invalido para el caso auth/invalid-email', (done) => {
        const email = 'testgmailcom';
        const password = '123456';

        const createUserDOM = createFormUser();
      const saveUserDOM = saveUser();

        register(email, password)
            .then(() => {
                const notification = createUserDOM.querySelector('#message');
                expect(notification.innerText).toBe('El correo es inválido');
                done();
            })
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
    });
})