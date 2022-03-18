import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';

const createUser = (email, password) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      // const user = userCredential.user;
      // eslint-disable-next-line no-console
      console.log('El usuario fue creado!!!');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // eslint-disable-next-line no-console
      console.error(`${errorCode} ${errorMessage}`);
      const getDivError = document.getElementById('id-message-error-record');
      getDivError.innerHTML = '<p>Por favor ingresar correo electronico y contraseña validos</p>';
    });
};

export default createUser;
