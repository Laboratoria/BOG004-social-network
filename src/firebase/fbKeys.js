import { initializeApp } from './firebaseImport.js';
import { getFirestore } from './firebaseImport.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDhjVPgymevoHI5P7Ei_zaCiAs0kUf-PMc',
  authDomain: 'ecotraveler-7a1f9.firebaseapp.com',
  projectId: 'ecotraveler-7a1f9',
  storageBucket: 'ecotraveler-7a1f9.appspot.com',
  messagingSenderId: '538325992373',
  appId: '1:538325992373:web:71fb73cb17db171c8d0ffc',
  measurementId: 'G-BRN1X1QDKR',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);
