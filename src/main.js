// Este es el punto de entrada de tu aplicacion

import { changeView } from './view-controler/route.js'

const init = () => {
    changeView(window.location.hash);
    window.addEventListener('hashchange', () => changeView(window.location.hash))
}

window.addEventListener('load', init)

 // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyDhjVPgymevoHI5P7Ei_zaCiAs0kUf-PMc",
        authDomain: "ecotraveler-7a1f9.firebaseapp.com",
        projectId: "ecotraveler-7a1f9",
        storageBucket: "ecotraveler-7a1f9.appspot.com",
        messagingSenderId: "538325992373",
        appId: "1:538325992373:web:71fb73cb17db171c8d0ffc",
        measurementId: "G-BRN1X1QDKR"
      };
    
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      const analytics = getAnalytics(app);

      