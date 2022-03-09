// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDIRrQ_iwja7mfLbiFMCFyAzdhDcgcsoRI",
    authDomain: "paws-sn.firebaseapp.com",
    projectId: "paws-sn",
    storageBucket: "paws-sn.appspot.com",
    messagingSenderId: "311934905620",
    appId: "1:311934905620:web:621715c4a0e60821c06601",
    measurementId: "G-LCLLP4CTSC"
};

// Initialize Firebase

export const iniciarFirebase = () => {

    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

}