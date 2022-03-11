import { components } from './components.js'
import {login} from './firebase.js'

const changeView = (route) => {
    const container = document.getElementById('container');
    container.innerHTML = '';
    switch (route) {
        case '#/signUp':
            container.appendChild(components.upSign())
            const signUpForm = document.getElementById('signUpForm');
            signUpForm.addEventListener('submit', (e) => {
                e.preventDefault();
                console.log('cargando')
                const email = document.getElementById('email').value;
                const password = document.getElementById('password').value;
                login(email,password)

            })
            break

        default:
            break;
    }
    console.log(route)
}

export { changeView }