// eslint-disable-next-line import/no-unresolved
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';

const createUser = (email, password) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      // const user = userCredential.user;
      // eslint-disable-next-line no-console
      console.log(`El usuario ${userCredential} fue creado!!!`);
    })
    .catch((error) => {
      const getDivError = document.getElementById('id-message-error-record');
      const errorCode = error.code;
      const errorMessage = error.message;
      // eslint-disable-next-line no-console
      console.error(errorCode);
      console.error(errorMessage);
      if (errorCode === 'auth/email-already-in-use') {
        getDivError.innerHTML = '<p>El usuario ya existe, inicie sesión</p>';
      } else if (errorCode === 'auth/weak-password') {
        getDivError.innerHTML = '<p>Por favor ingresar contraseña de al menos 6 digitos</p>';
      } else {
        getDivError.innerHTML = `<p>Error (${errorCode}): ${errorMessage}</p>`;
      }
    });
};

export default createUser;
