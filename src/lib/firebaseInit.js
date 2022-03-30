// Add Firebase products that you want to use
// eslint-disable-next-line import/no-unresolved
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js';
// eslint-disable-next-line import/no-unresolved
import { getAuth, GoogleAuthProvider } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js'; 

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

export const auth = getAuth();
console.log(auth);

export const provider = new GoogleAuthProvider();
console.log(provider);

export const db = getFirestore();
console.log(db);
