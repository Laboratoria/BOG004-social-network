// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBYQRWOJCKW_FSQzdmKwZBZ6Bl3hq6ZZfo",
    authDomain: "ninja-social-network.firebaseapp.com",
    projectId: "ninja-social-network",
    storageBucket: "ninja-social-network.appspot.com",
    messagingSenderId: "831935966918",
    appId: "1:831935966918:web:1d6c8a571c41c911bf31c7",
    measurementId: "G-C0G4TLFDJK"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

//Función FIREBASE para registro de nuevos usuarios
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

//Función FIREBASE para acceso de usuarios existentes
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

//Función FIREBASE para estado de autenticación y obtener datos del usuario
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});

