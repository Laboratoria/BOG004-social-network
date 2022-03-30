import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendEmailVerification,
} from './firebase-utils.js';
import { changeView } from '../view-controler/router.js';
// LOGIN

export const login = (email, password) => {
  const auth = getAuth();
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      if (user.emailVerified) {
        console.log('login exitoso');
        changeView('#/feed');
      } else {
        document.querySelector('#messageAlert').innerText = 'Su correo no ha sido verificado, por favor revise su email';
      }
    }).catch((error) => {
      const errorCode = error.code;
      console.log(errorCode);
      switch (errorCode) {
        case 'auth/user-not-found':
          document.querySelector('#messageAlert').innerText = 'Usuario incorrecto';
          console.log('Usuario incorrecto');
          break;
        case 'auth/wrong-password':
          console.log('contraseña incorrecta');
          document.querySelector('#messageAlert').innerText = 'Contraseña incorrecta';
          break;
        case 'auth/invalid-email':
          console.log('correo invalido');
          document.querySelector('#messageAlert').innerText = 'correo invalido';
          break;
        default:
          console.log('Error al iniciar sesión ' + errorCode);
          break;
      }
    });
};

// // REGISTRO
export const register = (email, password) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('registro exitoso');
      const user = userCredential.user;
      sendEmailVerification(user).then(() => {
        console.log("Se ha enviado un mensaje al correo: " + user.email + " para verificar la creación de la cuenta ");
        // changeView('#/login');
        // location.hash = '#/login';
        document.querySelector('#message').innerText = 'Se ha enviado un mensaje al correo:' + user.email + ' para verificar la creación de la cuenta ';
        setTimeout("location.href='http://localhost:3000/#/login'", 5000)
  }).catch(error => {
        console.log("Error enviando correo de verificación: " + error);
        document.getElementById('message').innerText = 'Error, intente denuevo';
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      switch (errorCode) {
        case 'auth/email-already-in-use':
          document.getElementById('message').innerText = 'Este correo ya esta registrado';
          break;
        case 'auth/weak-password':
          document.getElementById('message').innerText = 'La contraseña debe tener mínimo 6 caracteres';
          break;
        case 'auth/invalid-email':
          document.getElementById('message').innerText = 'El correo es inválido';
          break;
        default:
          console.log(errorCode);
          console.log(errorMessage);
          console.log('registro erroneo');
          break;
      }
    });
};

// GOOGLE
export const authGoogle = (provider) => {
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log('usuario ingresa');
      console.log(user);
      changeView('#/feed');
    })
    .catch((error) => {
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