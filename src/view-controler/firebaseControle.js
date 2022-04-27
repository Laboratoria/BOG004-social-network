import {
    auth,
    createUserWithEmailAndPassword,GoogleAuthProvider, loginWithFirebase,loginWithGoogle
} from './firebase.js';

import{changeView} from './router.js'

   export const authenticate =(email, password) =>{
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {

      // Signed in
      const user = userCredential.user;
      
      // ...
        changeView("#/timeLine");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message; 
      console.log("este error es ", errorMessage)
       const errorMessageDiv = document.querySelector('.message--text');
      switch (errorCode) {
        case 'auth/internal-error':
          errorMessageDiv.innerHTML = 'Correo electrónico no válido';
          break;
        case 'auth/email-already-in-use':
          errorMessageDiv.innerHTML = 'Usuario encontrado, ¡por favor ingresa!';
          break;
        case 'auth/weak-password':
            errorMessageDiv.innerHTML = 'La contraseña debe tener al menos seis caracteres';
            break;
        default:
          errorMessageDiv.innerHTML = 'Rellena todos los campos';
          break;
      }
    });
  }
   export const  loginUser = (email, password) =>{
     return loginWithFirebase(email, password)
//  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      //Signed in
      const user = userCredential.user;
      localStorage.setItem("userInfo", JSON.stringify(user))
      console.log("hola")
      //...
      console.log(user)
      changeView("#/timeLine");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const errorMessageDiv = document.querySelector('.message-text');
      console.log("adios", errorMessageDiv) 
      switch (errorCode) {
        case 'auth/invalid-email':
          errorMessageDiv.innerHTML = 'Correo electrónico no válido';
          break;
        case 'auth/user-not-found':
          errorMessageDiv.innerHTML = 'Usuario no encontrado, ¡por favor registrate!';
          break;
        case 'auth/wrong-password': 
            errorMessageDiv.innerHTML = 'Contraseña incorrecta';
            break;
        default:
          errorMessageDiv.innerHTML = 'Rellena todos los campos';
          break; 
      }
    });
  }

// export const provider = new GoogleAuthProvider();
// export const googlePopUp = () => signInWithPopup(auth, provider);

export const loginGoogle = () =>{
// googlePopUp(auth, provider)
 /*return loginWithGoogle(auth, provider)*/
 loginWithGoogle()
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    localStorage.setItem("userInfo", JSON.stringify(user))
 changeView("#/timeLine");
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
  });

}
