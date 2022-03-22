import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  
} from './firebase.auth-util.js';

// import { router } from '../router.js';

export const signInGoogle = () => {
  const provider = new GoogleAuthProvider();

  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      sessionStorage.setItem('token', token);
      sessionStorage.setItem('user', JSON.stringify(user));

      window.location.hash = 'post';
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
};
