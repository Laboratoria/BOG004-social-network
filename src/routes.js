import { router } from './lib/index.js';
import { signInGoogle } from './lib/auth-google.js';
import { signInEmail } from './lib/auth-email.js';

export const routes = [
  {
    path: '/',
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
                  <button id='sign-up'>Registrar</button>
                  <button id='log-in' disabled>Ingresar</button>
              </div>
            </div>
           
            `,
    script: () => {
      const btnModal = document.querySelector('#sign-up');
      btnModal.addEventListener('click', () => {
        router.loadRoute('registro');
      });
    },
  },
  {
    path: '/registro',
    template: `
        <div class='paws-image'>
            <img class='paws' src='images/animalsBackground.png' alt='paws' />
        </div>
        <div class='container-form'>
        <form class='form'>
          <p>BIENVENIDO</p>
          <input type='text' class='name' placeholder='Nombre y Apellido' autocomplete='off'/>
          <input type='email' class='email' placeholder='Correo' autocomplete='off' />
          <span id='emailOK'></span>
          <input type='password' class='password' placeholder='Contraseña' autocomplete='off' />
          <span id='passOK'></span>
          <button type='button' id='btn-register' >Registrarse</button>
          <p id='btnSignInGoogle'>
       Registrate con
       <img src="https://img.icons8.com/color/30/000000/google-logo.png"/>
      </p>
        </form>
      </div>
      
            `,
    script: () => {
      const btn = document.querySelector('#btn-register');
      btn.addEventListener('click', () => {
        const email = document.querySelector('.email').value;
        const password = document.querySelector('.password').value;
        signInEmail(email, password);
      });

      const btnSignInGoogle = document.querySelector('#btnSignInGoogle');
      btnSignInGoogle.addEventListener('click', signInGoogle);
    },
  },
  {
    path: '/construccion',
    template: '<h1> Pagina en construccion para Firebase</h1>',
    script: () => {},
  },
];
