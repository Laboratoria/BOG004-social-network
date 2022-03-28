import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: '### FIREBASE API KEY ###',
  authDomain: '### FIREBASE AUTH DOMAIN ###',
  projectId: '### CLOUD FIRESTORE PROJECT ID ###'
});

const db = getFirestore();

import { collection, addDoc } from "firebase/firestore";

try {
  const docRef = await addDoc(collection(db, "users"), {
    first: "Ada",
    last: "Lovelace",
    born: 1815
    
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}

import { collection, getDocs } from "firebase/firestore";

const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});

// Allow read/write access on all documents to any user signed in to the application
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
// codigo firebase
import {
  getAuth, createUserWithEmailAndPassword,
  signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider,
// eslint-disable-next-line import/no-unresolved
} from './firebase-utils.js';

const createUser = (email, password) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      // const user = userCredential.user;
      // eslint-disable-next-line no-console
      console.log(`El usuario ${userCredential} fue creado!!!`);
    })
    .catch((error) => {
      const getDivError = document.getElementById('id-message-error-record');
      const errorCode = error.code === undefined ? '' : error.code;
      const errorMessage = error.message === undefined ? '' : error.message;
      // eslint-disable-next-line no-console
      console.log(errorCode);
      console.log(errorMessage);
      if (errorCode === 'auth/email-already-in-use') {
        getDivError.innerHTML = '<p>El usuario ya existe, inicie sesión</p>';
      } else {
        getDivError.innerHTML = '<p>Por favor ingresar correo electronico y/o contraseña validos</p>';
      }
    });
};

function existingUser(email, password) {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(`El usuario ${user} se ha autenticado!!!`);
      // ...
    })
    .catch((error) => {
      const getDivError = document.getElementById('id-message-error-login');
      const errorCode = error.code === undefined ? '' : error.code;
      const errorMessage = error.message === undefined ? '' : error.message;
      // eslint-disable-next-line no-console
      console.log(errorCode);
      console.log(errorMessage);
      getDivError.innerHTML = '<p>Usuario o contraseña invalidos, por favor ingresar nuevamente</p>';
    });
}

function observerUserState() {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      window.location.hash = '#wall';
    } else if (window.location.hash === '#wall') {
      // User is signed out
      window.location.hash = '';
    }
  });
}

const closeSession = () => {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
    })
    .catch((error) => {
      console.error(error);
    });
};

const provider = new GoogleAuthProvider();
console.log('provider: ', provider);

const signInWithGoogle = () => {
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log(`El usuario ${user} se ha autenticado!!!`);
    // ...
    }).catch((error) => {
      // eslint-disable-next-line no-console
      console.error(error);
    });
};

/**
 * Esta funcion va a conectarse a fuirestore
 * Luego con el resultado que es una suscripcion (aun no sabes)
 * va a pintar en pantalla el resultado
 */
const getPostList = () => {
   document.getElementybById("wall")//tpca verificar
}

const editPosts = (pst) => {

}

export {
  createUser, existingUser, observerUserState, signInWithGoogle, closeSession,
};
