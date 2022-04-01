export { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js';
export {
  getAuth, updateProfile, onAuthStateChanged, signInWithPopup, GoogleAuthProvider,
  createUserWithEmailAndPassword,
  sendSignInLinkToEmail, signInWithEmailAndPassword, signOut
} from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';
export {
  deleteDoc, getFirestore, collection, addDoc, getDocs, doc, setDoc, updateDoc, arrayUnion, arrayRemove,
} from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js';

// export { initializeApp };
// export { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword,
// sendSignInLinkToEmail, signInWithEmailAndPassword };
// export { getFirestore, collection, addDoc };
