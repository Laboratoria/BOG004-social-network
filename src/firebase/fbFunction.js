// Importamos app para inicializar firebase
import { app } from './fbkeys.js'; 
import { createUser, provider } from '../view-controler/controllers.js';
import { signIn } from '../view-controler/controllers.js';
import { changeView } from '../view-controler/route.js';
import { signInWithGoogle } from '../view-controler/controllers.js';
import { GoogleAuthProvider } from '../firebase/firebaseImport.js'

/* Creamos una funcion createUser para exportarla y activarla
cuando se de click a el boton de registrarte y le pasamos como parametro email y contraseña */
export const createNewUser = (email, password) => {
  createUser(email, password)
    .then((userCredential) => {
    // Signed in
      /* const user = userCredential.user; */
      changeView('#/ecoTraveler');
    // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = document.querySelector('#errorMessage');
      switch (errorCode) {
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
export const signInUser = (auth, email, password) => {
  signIn(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
      changeView('#/ecoTraveler');
      console.log(user, "Esta entrando a la funcion signIn");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = document.querySelector('#errorMessage');
      switch(errorCode){
        case 'auth/invalid-email':
          errorMessage.innerHTML = 'Correo inválido';
          break;
        case 'auth/user-not-found':
          errorMessage.innerHTML = 'El usuario no está registrado';
          break;
        case 'auth/wrong-password':
          errorMessage.innerHTML = 'Contraseña incorrecta';
          break;
          default:
            break;
      }
      console.log(errorMessage, "No esta entrando a la funcion signIn");
    });
    }
 
    // const auth = getAuth();
    export const loginGoogle = (auth, provider) => {
      signInWithGoogle(auth,provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        changeView('#/ecoTraveler');
        // ...
        console.log(signInWithGoogle, 'probando función signin')
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
    }