
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,

} from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-database.js";

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
      console.log('ingreso exitoso')
    });
}




export const saveTask = (title, description) =>
  addDoc(collection(db, 'tasks'), { title, description })
