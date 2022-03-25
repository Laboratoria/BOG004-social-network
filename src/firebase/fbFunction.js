/* Cambiamos la ruta que venia por defecto por la de las llaves
y al final cambiamos el app.js por auth.js */
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js';
// Importamos app para inicializar firebase
import { app } from './fbkeys.js';
import { changeView } from '../view-controler/route.js'

const auth = getAuth();
/* Creamos una funcion createUser para exportarla y activarla
cuando se de click a el boton de registrarte y le pasamos como parametro email y contraseña */
export const createUser = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in
      const user = userCredential.user;
      changeView('#/ecoTraveler');
    // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = document.querySelector('#errorMessage');
      switch(errorCode) {
        case 'auth/email-already-in-use':
          errorMessage.innerHTML = 'Correo registrado, ingresa uno nuevo';
          break;
          case 'auth/invalid-email':
            errorMessage.innerHTML = 'Correo inválido';
              break;
              case 'auth/weak-password':
                errorMessage.innerHTML = 'La contraseña debe contener mínimo 6 caracteres';
                break;
                default:
                break;
      }
    // ..
    });
};
