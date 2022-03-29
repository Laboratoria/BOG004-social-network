//DESACOPLANDOLO
import { createUser, logIn } from '../src/controllers-firebase.js'; 

//Función FIREBASE para registro de nuevos usuarios
export let registerUser = (email, password) => {
    return createUser(email, password);
}

// export let logInUser = (email, password) => {
//     return logIn(email, password);
// }

//COMO ESTABA ANTES
// import {
//     getAuth,
//     createUserWithEmailAndPassword,
//     signInWithEmailAndPassword,
//     onAuthStateChanged,
// } from "./firebase-import.js";

// //Función FIREBASE para registro de nuevos usuarios
// export let registerUser = (email, password) => {
//     const auth = getAuth();
//     return createUserWithEmailAndPassword(auth, email, password);
// };

// //Función FIREBASE para acceso de usuarios existentes
// signInWithEmailAndPassword(auth, email, password)

//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });

// //Función FIREBASE para estado de autenticación y obtener datos del usuario
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
//     const uid = user.uid;
//     // ...
//   } else {
//     // User is signed out
//     // ...
//   }
// });