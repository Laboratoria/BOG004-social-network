export const routes = [
  {
    path: '/',
    template: `
    <div class="modal">
      <img class="paws-logo" src="https://res.cloudinary.com/dtaq1ip2g/image/upload/v1646690477/logo_movil_byxlxx.png" alt="paws" />
      <p>
          PAWS la unica red social que te permite interactuar, publicar y enterarte de las ultimas noticias sobre la proteccion y cuidado de los animales.
      </p>
      <div id="buttons">
          <button id="sign-up">Registrar</button>
          <button id="log-in" disabled>Ingresar</button>
      </div>
    </div>`,
  },
  {
    path: '/registro',
    template: `<div class='container-form'>
      <form class='form' action='' method='post'>
        <p>BIENVENIDO</p>
        <input type='text' placeholder='Nombre y Apellido' />
        <input type='email' placeholder='Correo' />
        <input type='password' placeholder='Contraseña' />
        <button type='submit' id='btn-register' >Registrarse</button>
      </form>
    </div>
    <p id='btnSignInGoogle'>
     Registrate con
   <i class='fa-brands fa-google'></i>
    </p>
  `,
  },
  {
    path: '/construccion',
    template: '<h1> Pagina en construccion para Firebase</h1>',
  },
];
