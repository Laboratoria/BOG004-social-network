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
      console.log(user);
      changeView('#/feed');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // console.log('login erroneo  ');
      // console.log(errorCode, 'hola error');
      // console.log(errorMessage, 'error prueba');
      switch (error.code) {
        case 'auth/invalid-email':
          console.log('emailfail');
          alert('Por favor ingresa un email válido');
          break;
        case 'auth/invalid-password':
          console.log('Tu contraseña no es correcta');
          alert('Tu contraseña no es correcta');
          break;
        default:
          console.log('ejecutandoError');
      }
    });
};

// REGISTRO
export const register = (email, password) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      register.innerHtml='registro exitoso';
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
  
      
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