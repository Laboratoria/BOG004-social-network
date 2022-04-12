// Importamos las funciones del Firebase y FireStore

// eslint-disable-next-line import/no-unresolved
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js';

import {
  getAuth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
// eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  onSnapshot,
  doc,
  query,
  serverTimestamp,
  orderBy,
  deleteDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
// eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js';

const firebaseConfig = {
  apiKey: 'AIzaSyBrYZ67zhwpOS_Hfqv6FKtfRXFMNp5W7bY',
  authDomain: 'thedailyprophet-prueba.firebaseapp.com',
  projectId: 'thedailyprophet-prueba',
  storageBucket: 'thedailyprophet-prueba.appspot.com',
  messagingSenderId: '861904852247',
  appId: '1:861904852247:web:e43702a3cbba18134a5352',
};

export const app = initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();

export const db = getFirestore();

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
  getDoc,
  onSnapshot,
  doc,
  query,
  serverTimestamp,
  orderBy,
  deleteDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
};
