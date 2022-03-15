import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';

const createUser = function (email, password) {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in
    // const user = userCredential.user;
      console.log('El usuario fue creado!!!');
    // ...
    })
    .catch((error) => {
    // const errorCode = error.code;
    // const errorMessage = error.message;
      console.error(`${error.code} ${error.message}`);
      //si pasa
      
    // ..
    });
};

export default createUser;