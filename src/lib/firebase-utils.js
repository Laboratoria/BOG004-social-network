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
  signOut,
} from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';

export {
  collection,
  getDocs,
  addDoc,
  onSnapshot,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  query,
  orderBy,
} from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js';
