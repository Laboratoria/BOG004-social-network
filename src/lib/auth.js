import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInWithRedirect } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";
import { changeView } from "../view-controler/router.js";
//REGISTRO
export const register = (email, password) =>{
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        console.log("registro exitoso");
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("registro exitoso");
        // ..
    })
}
//LOGIN
export const login = (email, password) => {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log("login exitoso");
            const user = userCredential.user;
            console.log(user);
            changeView("#/feed");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // console.log("login erroneo  ");
            // console.log(errorCode, "hola error");
            // console.log(errorMessage, "error prueba");
            switch(error.code){
                case 'auth/invalid-email': 
                console.log('emailfail');
                  alert("Por favor ingresa un email válido");
                  break;
                case 'auth/invalid-password':
                  console.log("Tu contraseña no es correcta");
                    alert("Tu contraseña no es correcta");
                    break;  
                  default:
                  console.log('ejecutandoError'); 
            }
                
                
        });
}
