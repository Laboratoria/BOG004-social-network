// import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';
import {
  getAuth,
  createUserWithEmailAndPassword,
} from './firebase.auth-email.util.js';

// import { router } from '../routes.js';

export const signInEmail = (email, password) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      // ...
      sessionStorage.setItem('user', JSON.stringify(user));

      window.location.hash = 'post';
    })

    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
};
