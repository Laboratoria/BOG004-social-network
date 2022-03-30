// import { baseDeDatos } from './index.html';
// import { obtenerRecetas } from './lib/firebase-base-de-datos.js';
import { register, login} from "./lib/auth.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";
import {changeView,} from './view-controler/router.js'

// obtenerRecetas(baseDeDatos).then((recetas) => {
//   console.log(recetas);
// });

const init = () => {
    changeView(window.location.hash)
    window.addEventListener("hashchange", () => changeView(window.location.hash))
}
window.addEventListener("load", init);

const showMenuMobile = (event) =>{
    event.preventDefault();
    console.log('hola')
    const menuMobile = document.getElementById('navMobile');
    menuMobile.style.display = 'inline';
}
const menuBtn = document.getElementById('menuBtn');
menuBtn.addEventListener('click', event => {
    showMenuMobile(event)
});
