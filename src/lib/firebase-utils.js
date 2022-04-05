/* eslint-disable import/no-unresolved */
export { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js';
export { getFirestore } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js';

export {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithRedirect,
  sendEmailVerification,
  onAuthStateChanged,
} from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';

export {collection, getDocs, addDoc, onSnapshot} from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js';
