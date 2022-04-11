// import { createUserWithEmailAndPassword } from '../lib/firebase.js';

export default { // Exportamos un objeto con la descripcion de la ruta profile.
  path: '#filter', // Ruta
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
      <a href=''><i class='fa-solid fa-magnifying-glass fa-3x' id='filterHeader'><p>Buscar</p></i> </a>
    </div>
  </header>
    <figure class='container-filter'>
        <img class='filterImg' src='https://res.cloudinary.com/dtaq1ip2g/image/upload/v1649687814/en_construccion-removebg-preview_o2fums.png' alt='imagen filtro' />
        <p class='title-filter'>Lo siento página en construcción.</p>
    </figure>
  
    <footer>
        <a href=''><i class='fa-solid fa-user' id='userFooter'></i> </a>
        <a href=''><i class='fa-solid fa-paw' id='postFooter'></i> </a>
        <a href=''><i class='fa-solid fa-magnifying-glass' id='filterFooter'></i> </a>
      </footer>
    
        `, // Template
  state: 'logged', // Solo puede acceder a esta ruta si está logueado
  script: () => {
    const btnPostFooter = document.querySelector('#postFooter'); // Botón para ir a la sección post
    const btnPostHeader = document.querySelector('#postHeader'); // Botón para ir a la sección post
    const btnProfileFooter = document.querySelector('#userFooter'); // Botón para ir a la sección profile
    const btnProfileHeader = document.querySelector('#userHeader'); // Botón para ir a la sección profile
    // evento vista movil.
    btnPostFooter.addEventListener('click', (e) => { // Evento click para ir a la sección post
      e.preventDefault(); // Evitamos que se recargue la página
      window.location.hash = 'post'; // Redireccionamos a la ruta post.
    });

    // evento vista escritorio
    btnPostHeader.addEventListener('click', (e) => { // Evento click para ir a la sección post
      e.preventDefault(); // Evitamos que se recargue la página
      window.location.hash = 'post'; // Redireccionamos a la ruta post.
    }); // Fin de la función script.

    btnProfileFooter.addEventListener('click', (e) => { // captura el evento click del botón de perfil vista movil.
      e.preventDefault(); // evita que se recargue la página.
      window.location.hash = 'perfil'; // redirecciona a la página de perfil.
    });

    btnProfileHeader.addEventListener('click', (e) => { // captura el evento click del botón de perfil vista escritorio.
      e.preventDefault(); // evita que se recargue la página.
      window.location.hash = 'perfil'; // redirecciona a la página de perfil.
    });
  },
};

// const profileStatus = window.document.querySelector('.nameUser');
//   console.log('profileStats', profileStatus);

//   // const nameU = profileStatus.querySelector('.nameUser');
//   // console.log('name', nameU);
