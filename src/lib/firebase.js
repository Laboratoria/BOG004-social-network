import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
} from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';


export const SignUpUser = (email, password) => {
  const auth = getAuth();
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      return user;
      // ...
    })
    .then ((user)=> {
      sendEmailVerification(user)
        .then(() => {
        // Email verification sent!
          const msg = 'An email verification link has been sent to ' + user.email;
          alert(msg) });
    })
    
} 

export const SignInUser = (email,password) => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log('ingreso exitoso')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert('usuario o contraseña incorrecta')
    });
}

export const observer = () => {
  const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    const uid = user.uid;
    console.log('login')
   
  } else {
    // User is signed out
   
  }
});

}