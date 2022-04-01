// import { createUserWithEmailAndPassword } from '../lib/firebase.js';

export default {
  path: '#perfil',
  template: `
  <div class='container-profile'>
    <img class='profile' src='images/profile.png' alt='imagen perfil' />
    <p class='nameUser'> </p>
    <button class='btnSingOut'>Cerrar Sesión</button>
  </div>
  
      `,
  state: 'logged',
  script: () => {
    document.querySelector('.btnSingOut').addEventListener('click', () => {
      sessionStorage.clear();
      window.location.hash = '#';
    });
  },
};

// const profileStatus = window.document.querySelector('.nameUser');
//   console.log('profileStats', profileStatus);

//   // const nameU = profileStatus.querySelector('.nameUser');
//   // console.log('name', nameU);
