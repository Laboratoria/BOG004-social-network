// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDIho93T00-3d4qtHXdkC0BeqV3vwNRfVE",
    authDomain: "paws-bc8fe.firebaseapp.com",
    projectId: "paws-bc8fe",
    storageBucket: "paws-bc8fe.appspot.com",
    messagingSenderId: "871881516799",
    appId: "1:871881516799:web:62be0dd5c72b33afcbceca",
    measurementId: "G-74KBQC3L9V"
};

// Initialize Firebase

export const iniciarFirebase = () => {

    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

}
