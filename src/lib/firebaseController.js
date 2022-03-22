import {
  createUserWithEmailAndPassword,
  signInWithPopup,
}
  from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';

export const newRegister = (auth, email, password, name) => {
  return createUserWithEmailAndPassword(auth, email, password,  name)
};

export const loginGoogle = (auth, provider) => {
  return signInWithPopup(auth, provider)
  .then(() => {
    window.location.href = '#/daily';
  });
};
