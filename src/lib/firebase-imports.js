export {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged, // Agregando observador
// eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';
export {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
}
  // eslint-disable-next-line import/no-unresolved
  from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js';
  // eslint-disable-next-line import/no-unresolved
export { getDatabase } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-database.js';
// eslint-disable-next-line import/no-unresolved
export { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js';
