/* Cambiamos la ruta que venia por defecto por la de las llaves
y al final cambiamos el app.js por auth.js */
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js';
// Importamos app para inicializar firebase
import { app } from './fbkeys.js';

const auth = getAuth();
/* Creamos una funcion createUser para exportarla y activarla
cuando se de click a el boton de registrarte y le pasamos como parametro email y contraseña */
export const createUser = (email, password) => {
  console.log('ingreso la funcion');
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in
      const user = userCredential.user;
      console.log('el usuario se creo', user);
    // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('no fue posible crear usuario', errorCode);
    // ..
    });
};
