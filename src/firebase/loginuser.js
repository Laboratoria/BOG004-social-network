import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";

function existingUser(email, password) {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log('Login extitoso');
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // eslint-disable-next-line no-console
      console.error(`${errorCode} ${errorMessage}`);
      const getDivError = document.getElementById('id-message-error');
      getDivError.innerHTML = '<p>Usuario o contraseña invalidos, por favor ingresar nuevamente</p>';
    });
}
export default existingUser;
