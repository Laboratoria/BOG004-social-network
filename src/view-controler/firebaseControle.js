import {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,signInWithPopup,GoogleAuthProvider,
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
      // ..
    });
  }
   export const  loginUser = (email, password) =>{
 signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      //Signed in
      const user = userCredential.user;
      //...
      console.log("funciona")
      changeView("#/timeLine");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }

export const provider = new GoogleAuthProvider();
export const googlePopUp = () => signInWithPopup(auth, provider);

export const loginGoogle = () =>{
googlePopUp(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
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
