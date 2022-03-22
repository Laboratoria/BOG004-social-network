import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,

} from './firebase-imports.js';
import { initializeApp } from "./firebase-imports.js";
import { getFirestore, collection, addDoc } from "./firebase-imports.js";
import { getDatabase } from "./firebase-imports.js";

const firebaseConfig = {
  apiKey: "AIzaSyDOPnedni_lGkXKH8QvH6JV1iTbcAwmJm4",
  authDomain: "social-network-ac42d.firebaseapp.com",
  projectId: "social-network-ac42d",
  storageBucket: "social-network-ac42d.appspot.com",
  messagingSenderId: "301187927033",
  appId: "1:301187927033:web:6bf303b353329946510b28"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const dataBase = getDatabase(app);
const auth = getAuth();
/*const provider = new GoogleAuthProvider();*/


export const SignUpUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      sendEmailVerification(user)
        .then(() => {
          alert('Se ha enviado un correo de verificación a ' + user.email)
        })
    })
}

export const SignInUser = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user)
    });
}

/*export const googleSignWithPopup = () => {
  return signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user)
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
}*/


export const saveTask = (description) =>
  addDoc(collection(db, 'Post'), {description})


export const userSignOut = () => {
  return signOut(auth).then(() => {
    console.log('Estas fuera')
  }).catch((error) => {
    console.log('Hubo un error')
  });
}
