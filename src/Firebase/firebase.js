// código firebase para registro de nuevos usuarios
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";

const auth = getAuth();
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

  //Código firebase para acceso de usuarios existentes

  import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";

const auth = getAuth();
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

  //código firebase para estado de autenticación y obtener datos del usuario

  import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";

const auth = getAuth();
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

// codigo para uso de firestore
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
