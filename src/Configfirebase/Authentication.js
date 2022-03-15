import firebaseApp from '../Configfirebase/confiFirebase.js';
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, sendSignInLinkToEmail, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';

const auth = getAuth(firebaseApp);
export const submithandler = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      document.getElementById("modal").style.display = 'block'
      console.log(user, 'hola usuario')
      // ...
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage, 'hola error')
      if (error.message = 'Error (auth/invalid-email)') {
        alert('Por favor escribe un correo valido')
      }
    });
}
const actionCodeSettings = {
  url: 'http://localhost:3000/#login',
  handleCodeInApp: true
};
export const emailSend = (email) => {
  sendSignInLinkToEmail(auth, email, actionCodeSettings)
  .then(() => {
    window.localStorage.setItem('emailForSignIn', email);
    window.location.href = 'http://localhost:3000'
  })
  .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage, 'Correo Invalido')
  })
}

const provider = new GoogleAuthProvider();
export const SignGoogle = () =>{ signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(token, user, 'hellow')
  }).catch((error) => {
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log(errorMessage, email, credential)
  });
}

export const loginUser = (email, password) => signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log(user, 'inicie sesion')
    // ...
  })
  .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage, 'este es un error');
    const messageerror= document.getElementById('texterror');
    messageerror.innerHTML=' ';
    if (error.message === 'Error (auth/user-not-found)') {
      messageerror.innerHTML='Usuario no registrado'
    }else if(error.message === 'Error (auth/wrong-password)') {
      messageerror.innerHTML='Contraseña incorrecta'
    }else{
      messageerror.innerHTML='bienvenido'
    }

  });
