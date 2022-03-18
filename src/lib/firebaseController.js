import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';

export const newRegister = (auth, email, password, name) => {
  return createUserWithEmailAndPassword(auth, email, password,  name);
};
