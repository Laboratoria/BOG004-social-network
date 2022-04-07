/* eslint-disable import/no-unresolved */
import {
  getAuth, createUserWithEmailAndPassword,
  signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider,
  deleteUser, signInWithRedirect,
} from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';

import {
  getDocs, collection, addDoc, getFirestore, doc, setDoc, getDoc, serverTimestamp, orderBy,
  query, deleteDoc,
  onSnapshot,
} from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js';

export {
  getAuth, createUserWithEmailAndPassword,
  signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup,
  GoogleAuthProvider, signInWithRedirect, serverTimestamp, orderBy, query,
  getDocs, collection, addDoc, getFirestore, doc, setDoc, getDoc, deleteUser,
  onSnapshot, deleteDoc,
};
