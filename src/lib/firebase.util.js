import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-analytics.js';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';

import {
  getFirestore, collection, addDoc, getDocs, onSnapshot, deleteDoc, doc,
} from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js';

export {
  initializeApp,
  getAnalytics,
  onAuthStateChanged,
  updateProfile,
  getAuth, signInWithPopup, GoogleAuthProvider,
  createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword,
  collection, getFirestore, addDoc, getDocs, onSnapshot, deleteDoc, doc,
};
