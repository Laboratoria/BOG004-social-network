export {
  initializeApp,
// eslint-disable-next-line
} from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js';

export {
  getAuth, updateProfile, onAuthStateChanged, signInWithPopup, GoogleAuthProvider,
  createUserWithEmailAndPassword,
  sendSignInLinkToEmail, signInWithEmailAndPassword, signOut,
// eslint-disable-next-line
} from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';

export {
  deleteDoc, getFirestore, collection, addDoc, getDocs, doc, setDoc, updateDoc,
  arrayUnion, arrayRemove, getDoc,
// eslint-disable-next-line
} from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js';
