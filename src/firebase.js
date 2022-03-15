// Configuracion firebase
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-analytics.js";
  import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBjr-ZpWK_pg0Apckfty-O56ZqnFhwSO_U",
    authDomain: "valorant-social.firebaseapp.com",
    projectId: "valorant-social",
    storageBucket: "valorant-social.appspot.com",
    messagingSenderId: "700869464423",
    appId: "1:700869464423:web:88689d128213e38acb1fc2",
    measurementId: "G-1KJ7QLNHYF"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);