// import {auth} from "./lib/firebaseInit.js"
//import {register} from "./lib/firebaseController.js"
import register from "./lib/views/register.js"
import { changeRoute } from "./lib/router.js"

const init = () => {
    document.getElementById("container").appendChild(register());
    changeRoute(window.location.hash);
    window.addEventListener('hashchange', () => {
        changeRoute(window.location.hash);
    });
  };
  window.addEventListener('load', init);



// const registerDiv =registerView ()
// document.getElementById("container").appendChild(registerDiv) 


// const join= document.querySelector(".join");

// join.addEventListener("click", (e) => {
//     e.preventDefault();

//     const email = document.querySelector("#email").value;
//     const password = document.querySelector("#password").value;
//     console.log (auth);

//     register(auth, email, password)
//         .then((userCredential) => {
//         //Signed in
//             console.log("Join")
//             const user = userCredential.user;
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//         })


// })
    
