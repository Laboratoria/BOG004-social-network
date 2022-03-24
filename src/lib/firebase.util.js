import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-analytics.js';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';

export {
  initializeApp,
  getAnalytics, 
  getAuth, signInWithPopup, GoogleAuthProvider,
  createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword,
};
