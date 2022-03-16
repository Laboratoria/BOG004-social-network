import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-analytics.js';
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWHUz2SSjPIDRByCe41qqMYgh4DBnEIgQ",
  authDomain: "codering-b533c.firebaseapp.com",
  databaseURL: "https://codering-b533c-default-rtdb.firebaseio.com",
  projectId: "codering-b533c",
  storageBucket: "codering-b533c.appspot.com",
  messagingSenderId: "370693461584",
  appId: "1:370693461584:web:8612df7131b6e0b419a355",
  measurementId: "G-PJFBT87KF8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const newRegister = (auth, email, password) =>{
  return createUserWithEmailAndPassword(auth, email, password);
}