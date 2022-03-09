// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';
import { iniciarFirebase } from './firebase.js';
import { signInGoogle } from './auth-google-firebase.js';
iniciarFirebase();

const btnSignInGoogle = document.querySelector("#btnSignInGoogle")



btnSignInGoogle.addEventListener("click", signInGoogle)