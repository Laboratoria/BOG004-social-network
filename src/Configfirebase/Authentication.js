import firebaseApp from '../Configfirebase/confiFirebase.js';
import { getAuth, createUserWithEmailAndPassword, sendSignInLinkToEmail } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';

const auth = getAuth(firebaseApp);
export async function submithandler(email, password) {
  const users = await createUserWithEmailAndPassword(auth, email, password);
  
  const actionCodeSettings = {
  
    //url: 'https://social-trip-d4874.firebaseapp.com/__/auth/action',
    url: 'http://localhost:3000/#login',
    handleCodeInApp: true
  };
  
  const emailSend= sendSignInLinkToEmail(auth, email, actionCodeSettings)
  .then(() => {
    window.localStorage.setItem('emailForSignIn', email);
    window.location.href = 'http://localhost:3000'
  })
  .catch((error) => {
    
    console.log(error.code)
    const errorCode = error.code;
    const errorMessage = error.message;
    if(errorMessage === 'auth/invalid-email'){
      alert('correo invalido' )
    }
    // ...
    console.log(errorCode,errorMessage, 'Correo Invalido')
  })
  
  
  return users,emailSend;
}



   





