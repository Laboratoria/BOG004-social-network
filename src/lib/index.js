// Este es el punto de entrada de tu aplicacion

import { home } from './home.js';
import { login } from './login.js';
import { register } from './register.js';

let content= document.getElementById('root');
const router= (route)=> {
    content.innerHTML='';
    switch(route) {
        case '':{
           return content.appendChild(home());
        }
            

        case '#login':
            return console.log('login')
        case '#register':
            return console.log('register')
        default:
            return console.log('404')
    }
}

export { router};







//Esto es lo que teniamos 


/*let root = document.getElementById('root');

export const router = () => {
    root.innerHTML = '';
    root.appendChild(home());
    window.addEventListener('hashchange', () => {
        switch (location.hash) {
            /* case "#home":
                 document.getElementById('root').appendChild(home());
                 break;*/
            /*case "":
                root.appendChild(home());
                break;
            case "#login":
                root.appendChild(login());
                break;
            case "#register":
                root.appendChild(register());
                console.log('register');
                break;
            default:
                root.innerHTML = 'Not found'
                console.log(404);
                break;

        }
    });
}*/