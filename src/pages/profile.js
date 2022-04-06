// import { createUserWithEmailAndPassword } from '../lib/firebase.js';

export default { // Exportamos un objeto con la descripcion de la ruta profile.
  path: '#perfil', // Ruta
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
  
      `, // Template
  state: 'logged', // Solo puede acceder a esta ruta si está logueado
  script: () => { // Función que se ejecuta al cargar la ruta
    document.querySelector('.btnSingOut').addEventListener('click', () => { // Evento click para cerrar sesión
      sessionStorage.clear(); // Limpiamos el storage
      window.location.hash = '#'; // Redireccionamos a la ruta Home.
    });

    const btnPostFooter = document.querySelector('#postFooter'); // Botón para ir a la sección post

    // evento vista movil.
    btnPostFooter.addEventListener('click', (e) => { // Evento click para ir a la sección post
      e.preventDefault(); // Evitamos que se recargue la página
      window.location.hash = 'post'; // Redireccionamos a la ruta post.
    });
    const btnPostHeader = document.querySelector('#postHeader'); // Botón para ir a la sección post

    // evento vista escritorio
    btnPostHeader.addEventListener('click', (e) => { // Evento click para ir a la sección post
      e.preventDefault(); // Evitamos que se recargue la página
      window.location.hash = 'post'; // Redireccionamos a la ruta post.
    }); // Fin de la función script.
  },
};

// const profileStatus = window.document.querySelector('.nameUser');
//   console.log('profileStats', profileStatus);

//   // const nameU = profileStatus.querySelector('.nameUser');
//   // console.log('name', nameU);
