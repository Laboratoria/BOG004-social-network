/* eslint-disable no-unused-vars */
import {
  singIn, singUp, singInGoogle, emailSingUp, singWithPopUp, errorSingUpWithPopUp,
} from '../view-controler/controllers.js';
// eslint-disable-next-line
import { changeView } from '../view-controler/router.js';
// LOGIN

const showErrorAuth = (error) => {
  const errorCode = error.code;
  switch (errorCode) {
    case 'auth/user-not-found':
      document.querySelector('#messageAlert').innerText = 'Usuario incorrecto';
      break;
    case 'auth/wrong-password':
      document.querySelector('#messageAlert').innerText = 'Contraseña incorrecta';
      break;
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
      document.getElementById('message').innerText = 'Ocurrió un error, intentelo de nuevo';
      break;
  }
};

export const login = (email, password) => {
  singIn(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      if (user.emailVerified) {
        changeView('#/feed');
      } else {
        document.querySelector('#messageAlert').innerText = 'Su correo no ha sido verificado, por favor revise su email';
      }
    }).catch((error) => {
      showErrorAuth(error);
    });
};

// // REGISTRO

export const register = (email, password) => {
  singUp(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      emailSingUp(user).then(() => {
        document.querySelector('#message').innerText = `Se ha enviado un mensaje al correo: ${user.email} para verificar la creación de la cuenta`;
        setTimeout(() => { window.location.href = 'http://localhost:3000/#/login'; }, 5000);
      }).catch((error) => {
        showErrorAuth(error);
      });
    }).catch((error) => {
      showErrorAuth(error);
    });
};

// GOOGLE

export const authGoogle = (provider) => {
  // retornamos el resultado de la promesa (true o false)
  const resultoPromesa = new Promise((resolve) => {
    singInGoogle(provider)
      .then((result) => {
        const credential = singWithPopUp(result);
        const token = credential.accessToken;
        const user = result.user;
        resolve(true); // terminar la promesa
        // changeView('#/feed');
      })
      .catch((error) => {
        resolve(false); // terminar la promesa
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = errorSingUpWithPopUp;
        // ...
      });
  });
  return resultoPromesa;
};
