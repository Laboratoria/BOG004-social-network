// import { router } from '../lib/index.js';
// import { router } from '../routes.js';

export default {
  path: '#',
  template: `
  <div class='paws-image'>
  <img class='paws' src='images/animalsBackground.png' alt='paws' />
</div>
<div class='modal'>
<img class='paws' src='images/animalsBackground.png' alt='paws' />
<img class='paws-logo' src='https://res.cloudinary.com/dtaq1ip2g/image/upload/v1646690477/logo_movil_byxlxx.png' alt='paws-logo' />
<p>
    PAWS la unica red social que te permite interactuar, publicar y enterarte de las ultimas noticias sobre la proteccion y cuidado de los animales.
</p>
<div id='buttons'>
    <button id='sign-up'>Registrarse</button>
    <button id='log-in'>Ingresar</button>
</div>
</div>

    `,
  script: () => {
    const btnModal = document.querySelector('#sign-up');
    btnModal.addEventListener('click', () => {
      window.location.hash = 'registro';
    });
    const btnLogin = document.querySelector('#log-in');
    btnLogin.addEventListener('click', () => {
      window.location.hash = 'Login';
    });
  },
};
