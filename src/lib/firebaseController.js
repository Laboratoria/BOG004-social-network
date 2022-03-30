import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithEmailAndPassword,
}
  // eslint-disable-next-line import/no-unresolved
  from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';

import { collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js';

export const newRegister = (auth, email, password, name) => {
  return createUserWithEmailAndPassword(auth, email, password, name)
};

export const loginGoogle = (auth, provider) => {
  return signInWithPopup(auth, provider)
};

export const loginWithEmailAndPassword = (auth, email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
};

export const createPost = (db, posts) => {
  return collection(db, posts)
};
