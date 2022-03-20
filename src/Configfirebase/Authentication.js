import firebaseApp from '../Configfirebase/confiFirebase.js';
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, sendSignInLinkToEmail, signInWithEmailAndPassword } from './firebase-imports.js';

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
      const errorCode = error.code;
      console.log(errorMessage, 'hola error')
      console.log(errorCode,'este es el codigo')
      switch(error.code){
        case 'auth/invalid-email': 
        console.log('vaso');
          alert('Oops! Por favor escribe un correo valido');
          break;
        case 'auth/email-already-in-use':
        console.log('ya existe este usuario');
          alert('Oops! Parece que ya estas registrado');
          break;
        case 'auth/weak-password':
          console.log('esta contraseña es muy corta');
            alert('Oops! Tu contraseña es muy corta');
            break;  
          default:
          console.log('Esto no sirve.');
        
        
      /*if (error.message = 'Error (auth/invalid-email)') {
        alert('Por favor escribe un correo valido')}*/
      
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
      const errorCode = error.code;
      console.log(errorMessage, 'hola error')
      console.log(errorCode,'este es el codigo')
      switch(error.code){
        case 'auth/wrong-password': 
        console.log('vaso');
          alert('Oops! Contraseña incorrecta, verifica tus datos.');
          break;
        case 'auth/user-not-found':
        console.log('ya existe este usuario');
          alert('Oops! Antes de inicar sesión debes registrarte, por favor verifica tus datos');
          break;
          case 'auth/invalid-email': 
          console.log('vaso');
            alert('Oops! Por favor escribe un correo valido');
            break; 
            case 'auth/internal-error': 
          console.log('vaso');
            alert('Oops! Por favor completa todos los campos');
            break; 
          default:
          console.log('Esto no sirve.');
          
    }
    });
  
  