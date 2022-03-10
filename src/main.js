const join= document.querySelector(".join");

join.addEventListener("click", (e) => {
    e.preventDefault();

    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    auth 
        .createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            console.log("Join")
        })
})







// // Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';

// myFunction();
// const auth = getAuth();
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });

  // async function createUserEmailAndPassword(email, password) {
  //   try {
  //     const authentication = await firebase.auth().createUserWithEmailAndPassword(email, password);
  //     return authentication; //   objeto que trae mucas cosas
  //   } catch (error) {
  //     let errorMessage = error.message;
  //     return errorMessage;
  //   }
  //}
  
