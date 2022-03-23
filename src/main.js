// import { baseDeDatos } from './index.html';
// import { obtenerRecetas } from './lib/firebase-base-de-datos.js';
import { register, login} from "./lib/auth.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";
import {changeView} from './view-controler/router.js'
// obtenerRecetas(baseDeDatos).then((recetas) => {
//   console.log(recetas);
// });

const init = () => {
    changeView(window.location.hash)
    window.addEventListener("hashchange", () => changeView(window.location.hash))
}
window.addEventListener("load", init);