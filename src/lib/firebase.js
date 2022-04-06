/* eslint-disable no-alert */
/* eslint-disable no-console */

import {
  initializeApp,
  getAnalytics,
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithPopup,
  updateProfile,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  collection,
  getFirestore,
  addDoc,
  getDoc,
  onSnapshot,
  deleteDoc,
  doc,
  updateDoc,
  serverTimestamp,
  query, orderBy,
} from './firebase.util.js';

const firebaseConfig = {
  apiKey: 'AIzaSyDIRrQ_iwja7mfLbiFMCFyAzdhDcgcsoRI',
  authDomain: 'paws-sn.firebaseapp.com',
  projectId: 'paws-sn',
  storageBucket: 'paws-sn.appspot.com',
  messagingSenderId: '311934905620',
  appId: '1:311934905620:web:621715c4a0e60821c06601',
  measurementId: 'G-LCLLP4CTSC',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore();
export const auth = getAuth();

// registrarse con cualquier correo
export const signInEmail = (email, password, name) => {
  createUserWithEmailAndPassword(auth, email, password) // crea usuario
    .then((userCredential) => { // si se crea el usuario
      // Signed in
      const user = userCredential.user; // obtiene el usuario
      updateProfile(auth.currentUser, { // actualiza el nombre del usuario
        displayName: name, // nombre del usuario
      });
      console.log(user);
      sendEmailVerification(auth.currentUser).then(() => { // envia correo de verificacion
        alert('Hemos enviado a tu correo electrónico el enlace de confirmación');
      });
      window.location.hash = 'login'; // redirecciona a login
    })
    .catch((error) => {
      const errorMessage = error.message; // obtiene el mensaje de error
      alert('Correo ya registrado, por favor intente con otro correo.'); // muestra mensaje de error
      console.log(errorMessage); // muestra el mensaje de error en consola
      // ..
    });
};

// registrarse o iniciar sesión con google

export const signInGoogle = () => { // inicia sesion con google
  const provider = new GoogleAuthProvider(); // crea proveedor de google
  // console.log(auth);
  signInWithPopup(auth, provider) // inicia sesion con google
    .then((result) => { // si se inicia sesion
      const credential = GoogleAuthProvider.credentialFromResult(result);
      // obtiene credencial de google
      const token = credential.accessToken; // obtiene token de google
      const user = result.user; // obtiene usuario de google
      sessionStorage.setItem('token', token); // guarda token en sessionStorage
      sessionStorage.setItem('user', JSON.stringify(user)); // guarda usuario en sessionStorage
      window.location.hash = 'post'; // redirecciona a post.
    })
    .catch((error) => { // si no se inicia sesion
      const errorMessage = error.message; // obtiene el mensaje de error
      const credential = GoogleAuthProvider.credentialFromError(error);
      // obtiene credencial de google
      console.log(credential); // muestra credencial de google en consola
      console.log(errorMessage); // muestra mensaje de error en consola
    });
};

// Iniciar sesión
export const logInEmail = (email, password) => {
  signInWithEmailAndPassword(auth, email, password) // inicia sesion con correo
    .then((userCredential) => { // si se inicia sesion
      const user = userCredential.user; // obtiene el usuario
      if (user.emailVerified) { // si el correo esta verificado
        sessionStorage.setItem('user', JSON.stringify(user)); // guarda usuario en sessionStorage
        window.location.hash = 'post'; // redirecciona a post.
      } else {
        alert('Para iniciar sesión debes confirmar el link que enviamos a tu correo electrónico');
      }
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert('Usario y/o contraseña inválido');
      console.log(errorMessage);
    });
};

const newCollection = collection(db, 'post'); // crea coleccion de post
export const savePost = (postDescription, userId, countLike, userlikes) => addDoc(collection(db, 'post'), {
  postDescription, userId, countLike, userlikes, createdAt: serverTimestamp(),
}); // guarda post
const q = query(newCollection, orderBy('createdAt', 'desc')); // crea query de post
export const onGetPost = (callback) => onSnapshot(q, collection(db, 'post'), callback); // obtiene los post
export const deletePost = (id) => deleteDoc(doc(db, 'post', id)); // elimina post
export const getOnlyPost = (id) => getDoc(doc(db, 'post', id)); // obtiene un sólo post.
export const updatePost = (id, newfields) => updateDoc(doc(db, 'post', id), newfields); // actualiza post.
