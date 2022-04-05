// import { createUserWithEmailAndPassword } from '../lib/firebase.js';

export default {
  path: '#perfil',
  template: `
  <header class='nav-bar'>
  <img
    class='logo-mobile'
    src='https://res.cloudinary.com/dtaq1ip2g/image/upload/v1646690477/logo_movil_byxlxx.png'
    alt='pawslogo'
  />
  <div id='allPost'>
  <a><i class='fa-solid fa-user fa-3x' id='userHeader'><p>Perfil</p></i> </a>
    <a href=''><i class='fa-solid fa-paw fa-3x' id='postHeader'><p>Post</p></i> </a>
    <a href=''><i class='fa-solid fa-magnifying-glass fa-3x'><p>Buscar</p></i> </a>
  </div>
</header>
  <div class='container-profile'>
    <img class='profileImg' src='images/profile.png' alt='imagen perfil' />
    <p class='nameUser'> </p>
    <button class='btnSingOut'>Cerrar Sesión</button>
  </div>

  <footer>
      <a href=''><i class='fa-solid fa-user' id='userFooter'></i> </a>
      <a href=''><i class='fa-solid fa-paw' id='postFooter'></i> </a>
      <a href=''><i class='fa-solid fa-magnifying-glass'></i> </a>
    </footer>
  
      `,
  state: 'logged',
  script: () => {
    document.querySelector('.btnSingOut').addEventListener('click', () => {
      sessionStorage.clear();
      window.location.hash = '#';
    });

    const btnPostFooter = document.querySelector('#postFooter');

    btnPostFooter.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.hash = 'post';
    });
    const btnPostHeader = document.querySelector('#postHeader');

    btnPostHeader.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.hash = 'post';
    });
  },
};

// const profileStatus = window.document.querySelector('.nameUser');
//   console.log('profileStats', profileStatus);

//   // const nameU = profileStatus.querySelector('.nameUser');
//   // console.log('name', nameU);
