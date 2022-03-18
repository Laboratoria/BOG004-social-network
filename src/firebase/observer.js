import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';

function observerUserState() {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      //TODO: ponerlo en una variable global para poder hacer cosas cheveres
      window.location.hash = '#wall';
      // ...
    } else {
      // User is signed out
      if (window.location.hash === "#wall") {
        window.location.hash = '';
      }
      console.log('good bye!');
      // window.location.hash = '';
      // ...
    }
  });
}

export default observerUserState;
