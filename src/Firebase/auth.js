import { createUser } from "./controller-firebase.js";
import { goLoginUser } from "./controller-firebase.js";
import { loginGoogle } from "./controller-firebase.js";


//Función FIREBASE para registro de nuevos usuarios
export const registerUser = (email, password) => {
    return createUser(email, password);
};

export const loginUser = (email, password) => {
    return goLoginUser(email, password);
};

export const googleUser = () =>{
    return loginGoogle();
};


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