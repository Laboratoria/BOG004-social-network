/* eslint-disable no-use-before-define */
/* eslint-disable no-console */
// eslint-disable-next-line import/no-unresolved
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js';

import {
  registerUser, loginUser, observerUserState, authAddGoogle, registerCloseSession,
  getPostList, registerAddPost, doLike,
} from './controlerview.js';

// Este es el punto de entrada de tu aplicacion
import { changeView } from './lib/router.js';

function onChangeView() {
  const currentHash = (window.location.hash);
  console.log('currentHash', currentHash);
  changeView(currentHash);
  if (currentHash === '') registerUser();
  if (currentHash === '#login') loginUser();
  if (currentHash === '#wall') { registerCloseSession(); getPostList(); registerAddPost(); }
  if (currentHash === '') authAddGoogle();
  if (currentHash === '#login') authAddGoogle();
}

const init = () => {
  const firebaseConfig = {
    apiKey: 'AIzaSyCzpRPSooaA1jjcXSKCj1hCV7kJqZj3Dfc',
    authDomain: 'mommi-1bf76.firebaseapp.com',
    projectId: 'mommi-1bf76',
    storageBucket: 'mommi-1bf76.appspot.com',
    messagingSenderId: '295073784310',
    appId: '1:295073784310:web:0ff893c0ec68221fefe7d7',
    measurementId: 'G-VBTE1KYCDY',
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  console.log('app', app);
  observerUserState();
  onChangeView(); // Este se llama solo la primera vez
  window.addEventListener('hashchange', onChangeView);// Esto es para cuando cambie despues de la primera carga
};

window.doLike = doLike;
window.addEventListener('load', init);
