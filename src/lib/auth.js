import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from './firebase-utils.js';
import { changeView } from '../view-controler/router.js';

// LOGIN

export const login = (email, password) => {
  const auth = getAuth();

  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('login exitoso');
      const user = userCredential.user;
      changeView('#/feed');
    })

    .catch((error) => {
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

        default:
          break;
      }
    });
};


// REGISTRO
export const register = (email, password) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('registro exitoso');
      const user = userCredential.user;
      changeView('#/feed');
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
          break;
      }

      console.log(errorCode);
      console.log(errorMessage);
      console.log('registro erroneo');

    });
  //     const expresiones = {
  //       email: /^[a-zA-ZO-9_.+-]+@[a-zA-ZO-9-.]+$/,
  //       password:/^.{4,12}$/,
  //       RepeatPassword:/^.{4,12}$/,
  //     }
};

// GOOGLE
export const authGoogle = (provider) => {
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log('usuario ingresa');
      console.log(user);
      localStorage.setItem('token', token);
      localStorage.setItem('name', user.displayName);
      localStorage.setItem('creationTime', user.metadata.creationTime);
      localStorage.setItem('lastSignInTime', user.metadata.lastSignInTime);

      if (user.metadata.creationTime === user.metadata.lastSignInTime) {
        console.log('usuario ingresó por primera vez');
        changeView('#/profile');
      } else {
        console.log('usuario ya había ingresado');
        changeView('#/feed');
      }
      // location.hash = '#/interest';
      // ...
      // ...
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