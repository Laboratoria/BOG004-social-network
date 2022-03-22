// eslint-disable-next-line import/no-unresolved
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';

const provider = new GoogleAuthProvider();

console.log('provider: ', provider);

export const signInWithGoogle = () => {
  const auth = getAuth();

  signInWithPopup(auth, provider)
    .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(`El usuario ${user} se ha autenticado!!!`);
    // ...
    }).catch((error) => {
    // Handle Errors here.
      // const errorCode = error.code;
      // const errorMessage = error.message;
      console.error(error);
    });
};
