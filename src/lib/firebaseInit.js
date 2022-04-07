// Importamos las funciones del Firebase y FireStore

import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js';

import { 
  getAuth, 
  GoogleAuthProvider,  
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithEmailAndPassword, 
  onAuthStateChanged,
  signOut,
} from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';

import { 
  getFirestore,
  collection, 
  addDoc,
  getDocs,
  onSnapshot,
  doc,
  query,
  serverTimestamp,
  orderBy,
  } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js'; 

const firebaseConfig = {
  apiKey: 'AIzaSyBrYZ67zhwpOS_Hfqv6FKtfRXFMNp5W7bY',
  authDomain: 'thedailyprophet-prueba.firebaseapp.com',
  projectId: 'thedailyprophet-prueba',
  storageBucket: 'thedailyprophet-prueba.appspot.com',
  messagingSenderId: '861904852247',
  appId: '1:861904852247:web:e43702a3cbba18134a5352',
};

const app = initializeApp(firebaseConfig);
console.log(app);

// export const auth = getAuth();
// console.log(auth);

export const provider = new GoogleAuthProvider();
console.log(provider);

export const db = getFirestore();
console.log(db);

export {
  getAuth, 
  GoogleAuthProvider,  
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithEmailAndPassword, 
  onAuthStateChanged,
  signOut,
  getFirestore,
  collection, 
  addDoc,
  getDocs,
  onSnapshot,
  doc,
  query,
  serverTimestamp,
  orderBy,
  };