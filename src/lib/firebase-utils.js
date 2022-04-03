/* eslint-disable import/no-unresolved */
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithRedirect,
  sendEmailVerification,
  onAuthStateChanged,
}
  from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';
import { collection, getDocs, addDoc } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js';

export {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithRedirect,
  sendEmailVerification,
  collection,
  getDocs,
  addDoc,
  onAuthStateChanged,
};
