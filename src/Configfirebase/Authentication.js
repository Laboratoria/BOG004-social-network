import { firebaseApp, db } from './confiFirebase.js';
import {
  getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider,
  createUserWithEmailAndPassword, sendSignInLinkToEmail,
  signInWithEmailAndPassword, addDoc, collection, signOut
} from './firebase-imports.js';

/* Autenticacion de email y contraseña */
const auth = getAuth(firebaseApp);
export const submithandler = (email, password, userName) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const docRef = await addDoc(collection(db, 'users'), {
        user: localStorage.getItem('emailForSignIn'),
        userName,
      });

      const user = userCredential.user;
      document.getElementById('modal').style.display = 'block';
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorMessage = error.message;
      const errorCode = error.code;
      console.log(errorMessage, 'hola error');
      console.log(errorCode, 'este es el codigo');
      switch (error.code) {
        case 'auth/invalid-email':
          console.log('vaso');
          alert('Oops! Por favor escribe un correo valido');
          break;
        case 'auth/email-already-in-use':
          console.log('ya existe este usuario');
          alert('Oops! Parece que ya estas registrado');
          break;
        case 'auth/weak-password':
          console.log('esta contraseña es muy corta');
          alert('Oops! Tu contraseña es muy corta');
          break;
        default:
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
      window.localStorage.setItem('emailForSignIn', email);
      window.location = '';
    })
    .catch((error) => {
      const errorMessage = error.message;
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
      console.log(token, user, 'hellow');
    }).catch((error) => {
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
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
    console.log(user, 'inicie sesion');
    // ...
  })
  .catch((error) => {
    const errorMessage = error.message;
    const errorCode = error.code;
    console.log(errorMessage, 'hola error');
    console.log(errorCode, 'este es el codigo');
    switch (error.code) {
      case 'auth/wrong-password':
        console.log('vaso');
        alert('Oops! Contraseña incorrecta, verifica tus datos.');
        break;
      case 'auth/user-not-found':
        console.log('ya existe este usuario');
        alert('Oops! Antes de inicar sesión debes registrarte, por favor verifica tus datos');
        break;
      case 'auth/invalid-email':
        console.log('vaso');
        alert('Oops! Por favor escribe un correo valido');
        break;
      case 'auth/internal-error':
        console.log('vaso');
        alert('Oops! Por favor completa todos los campos');
        break;
      default:
        console.log('Esto no sirve.');
    }
  });

/* export const loginAndUpdate = async () => {
  // Calling authentication function
  let auth = getAuth();

  // You need to pass the authentication instance as param
  let { user } = await signInAnonymously(auth);

  // Passing user's object as first param and updating it
  await updateProfile(user, {
    displayName: 'erik',
    photoURL: 'erik.jpg',
  });
  console.log(user, 'un intento mas');
}; */

export const userActive = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user);
      return user;
    } console.log('no hay usuario');
    // User is signed out
    // ...
  });
};

export const singOff = (email) => {
  signOut(auth, email)
    .then(() => {
      console.log('userSignout');
      localStorage.removeItem('emailForSignIn', email);
      // Sign-out successful.
      window.location = '';
    }).catch((error) => {
      console.log(error);
    // An error happened.
    });
};
