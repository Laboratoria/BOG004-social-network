// Add Firebase products that you want to use
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';
// import { firestore } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js';

const firebaseConfig = {
  apiKey: 'AIzaSyBrYZ67zhwpOS_Hfqv6FKtfRXFMNp5W7bY',
  authDomain: 'thedailyprophet-prueba.firebaseapp.com',
  projectId: 'thedailyprophet-prueba',
  storageBucket: 'thedailyprophet-prueba.appspot.com',
  messagingSenderId: '861904852247',
<<<<<<< HEAD
  appId: '1:861904852247:web:e43702a3cbba18134a5352',
=======
  appId: '1:861904852247:web:e43702a3cbba18134a5352'
>>>>>>> 1267c24d7e22068e06e8b8415aee1ee53aa147fe
};
const app = initializeApp(firebaseConfig);
console.log(app);

export const auth = getAuth();
console.log(auth);

// const db = getFirestore(app);
// console.log(db);
