// Este es el punto de entrada de tu aplicacion

import { router } from './lib/index.js';
import { iniciarFirebase } from './lib/firebase.js';

// firebase

iniciarFirebase();

window.addEventListener('popstate', () => {
    const removePath = router.removeSlash(window.location.pathname);
    router.loadRoute(removePath, false);
});

const name = document.querySelector('.name');
name.addEventListener('keyup', (e) => {
    const input = e.target.value;
    name.value = input.replace(/[0-9]/g, '');
});

const email = document.querySelector('.email');
email.addEventListener('keyup', (e) => {
    const campo = e.target;
    const valido = document.getElementById('emailOK');
    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if (emailRegex.test(campo.value)) {
        valido.innerText = 'Su correo es válido';
        // console.log(true);
    } else {
        valido.innerText = 'Su correo no es inválido';
        // console.log(false);
    }
});

const password = document.querySelector('.password');
password.addEventListener('keyup', (e) => {
    const passCampo = e.target;
    const passValid = document.getElementById('passOK');
    const passRegex = /^.{8,12}$/;
    if (passRegex.test(passCampo.value)) {
        passValid.innerText = '';
        // console.log(true);
    } else {
        passValid.innerText = 'Su clave es inválido';
        // console.log(false);
    }
});