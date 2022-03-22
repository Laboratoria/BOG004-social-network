import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';

export const logInEmail = (email, password) => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
      // window.location.hash = 'post';

      if (user.emailVerified) {
        window.location.hash = 'post';
      } else {
        alert('Para iniciar sesión debes confirmar el link que enviamos a tu correo electrónico');
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      alert('Usario y/o contraseña inválido');
      const errorMessage = error.message;
});
};
