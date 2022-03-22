import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js';
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js"
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, sendSignInLinkToEmail, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';
export { initializeApp }
export { getFirestore, collection, addDoc }
export { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, sendSignInLinkToEmail, signInWithEmailAndPassword }