// import { baseDeDatos } from './index.html';
// import { obtenerRecetas } from './lib/firebase-base-de-datos.js';
import { register, login} from "./lib/auth.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";
import {changeView} from './view-controler/router.js'
// obtenerRecetas(baseDeDatos).then((recetas) => {
//   console.log(recetas);
// });

const signupForm = document.querySelector("#signup-form");

signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.querySelector("#signup-email").value;
    const password = document.querySelector("#signup-password").value;
    console.log(email, password);
    login(email, password);
    register(email,password);
})
const googleButton = document.querySelector("#google");
const provider = new GoogleAuthProvider();  
googleButton.addEventListener("click", e => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log("usuario ingresa");
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  })
})

const init = () => {
    changeView(window.location.hash)
    window.addEventListener("hashchange", () => changeView(window.location.hash))
}
window.addEventListener("load", init);
