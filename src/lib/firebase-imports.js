export {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
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
} from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js';
export{ getDatabase } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-database.js';
export { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js';