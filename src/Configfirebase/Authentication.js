import firebaseApp from '../Configfirebase/confiFirebase.js';
import { getAuth, createUserWithEmailAndPassword, sendSignInLinkToEmail } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';

const auth = getAuth(firebaseApp);
export async function submithandler(email, password) {
  const users = await createUserWithEmailAndPassword(auth, email, password);
  
  const actionCodeSettings = {
  
    url: 'https://social-trip-d4874.firebaseapp.com/__/auth/action',
    
    handleCodeInApp: true
  };
  
  const emailSend= sendSignInLinkToEmail(auth, email, actionCodeSettings)
  firebase.auth().invalidemail = 'INVALID_EMAIL';
  firebase.auth().sendSignInLinkToEmail(email)
  .then((data) => {
    window.localStorage.setItem('emailForSignIn', email);
   console.log(data);
    // ... 
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = users.invalidemail;
    // ...
    console.log(errorCode,errorMessage, 'Correo Invalido')
  })
  
  
  return users,emailSend;
}



   





