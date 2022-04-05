import { firebaseApp, db } from './confiFirebase.js';
import {
  getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider,
  createUserWithEmailAndPassword, sendSignInLinkToEmail,
  signInWithEmailAndPassword, addDoc, collection, signOut,
} from './firebase-imports.js';

/* Autenticacion de email y contraseña */
const auth = getAuth(firebaseApp);
export const submithandler = (email, password, userName) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const docRef = await addDoc(collection(db, 'users'), {
        user: localStorage.getItem('emailForSignIn'),
        userName,
      }); // eslint-disable-next-line
      console.log(docRef);

      const user = userCredential.user;
      document.getElementById('modal').style.display = 'block';
      // eslint-disable-next-line
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorMessage = error.message;
      const errorCode = error.code;
      // eslint-disable-next-line
      console.log(errorMessage, 'hola error');
      // eslint-disable-next-line
      console.log(errorCode, 'este es el codigo');
      switch (error.code) {
        case 'auth/invalid-email':
          // eslint-disable-next-line
          console.log('vaso');
          // eslint-disable-next-line
          alert('Oops! Por favor escribe un correo valido');
          break;
        case 'auth/email-already-in-use':
          // eslint-disable-next-line
          console.log('ya existe este usuario');
          // eslint-disable-next-line
          alert('Oops! Parece que ya estas registrado');
          break;
        case 'auth/weak-password':
          // eslint-disable-next-line
          console.log('esta contraseña es muy corta');
          // eslint-disable-next-line
          alert('Oops! Tu contraseña es muy corta');
          break;
        default:
          // eslint-disable-next-line
          console.log('Esto no sirve.');
      /* if (error.message = 'Error (auth/invalid-email)') {
        alert('Por favor escribe un correo valido')} */
      }
    });
};

/* Enviar email de confirmación */

const actionCodeSettings = {
  url: 'http://localhost:3000/#login',
  handleCodeInApp: true,
};

export const emailSend = (email) => {
  sendSignInLinkToEmail(auth, email, actionCodeSettings)
    .then(() => {
      window.localStorage.setItem('emailForSignIn', email); // aquí creamos un objeto en localStorage para almacenar el correo del usuario
      window.location = '';
    })
    .catch((error) => {
      const errorMessage = error.message;
      // eslint-disable-next-line
      console.log(errorMessage, 'Correo Invalido');
    });
};

/* Autenticacion inicio de sesion con google */
const provider = new GoogleAuthProvider();

export const SignGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      window.location = '#wall';
      // eslint-disable-next-line
      console.log(token, user, 'hellow');
    }).catch((error) => {
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // eslint-disable-next-line
      console.log(errorMessage, email, credential);
    });
};

/* Inicio de sesion con email y contraseña */

export const loginUser = (email, password) => signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    localStorage.setItem('emailForSignIn', email);
    window.location = '#wall';
    // eslint-disable-next-line
    console.log(user, 'inicie sesion');
    // ...
  })
  .catch((error) => {
    const errorMessage = error.message;
    const errorCode = error.code;
    // eslint-disable-next-line
    console.log(errorMessage, 'hola error');
    // eslint-disable-next-line
    console.log(errorCode, 'este es el codigo');
    switch (error.code) {
      case 'auth/wrong-password':
        // eslint-disable-next-line
        console.log('vaso');
        // eslint-disable-next-line
        alert('Oops! Contraseña incorrecta, verifica tus datos.');
        break;
      case 'auth/user-not-found':
        // eslint-disable-next-line
        console.log('ya existe este usuario');
        // eslint-disable-next-line
        alert('Oops! Antes de inicar sesión debes registrarte, por favor verifica tus datos');
        break;
      case 'auth/invalid-email':
        // eslint-disable-next-line
        console.log('vaso');
        // eslint-disable-next-line
        alert('Oops! Por favor escribe un correo valido');
        break;
      case 'auth/internal-error':
        // eslint-disable-next-line
        console.log('vaso');
        // eslint-disable-next-line
        alert('Oops! Por favor completa todos los campos');
        break;
      default:
        // eslint-disable-next-line
        console.log('Esto no sirve.');
    }
  });

export const userActive = () => {
  onAuthStateChanged(auth, (user) => {
    if (localStorage.getItem('emailForSignIn') === '') {
      // eslint-disable-next-line
      alert('inicia sesion')
      // eslint-disable-next-line
      console.log(localStorage, 'ls');
    } return user;
    // User is signed out
  });// eslint-disable-next-line
  console.log('no hay usuario');
};

export const singOff = (email) => {
  signOut(auth, email)
    .then(() => {
      // eslint-disable-next-line
      console.log('userSignout');
      localStorage.removeItem('emailForSignIn', email);
      // Sign-out successful.
      window.location = '';
    }).catch((error) => {
      // eslint-disable-next-line
      console.log(error);
    // An error happened.
    });
};
