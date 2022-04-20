/* Cambiamos la ruta que venia por defecto por la de las llaves
y al final cambiamos el app.js por auth.js */
export {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js';

export {
  initializeApp,
} from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js';
export {
  getFirestore,
  collection,
  addDoc,
  query,
  getDocs,
  serverTimestamp,
  orderBy,
  onSnapshot,
  updateDoc,
  doc,
  deleteDoc,
  arrayUnion,
  arrayRemove,
} from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js';
