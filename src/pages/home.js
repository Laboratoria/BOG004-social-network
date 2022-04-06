export default { // Exportamos un objeto con la descripcion de la ruta home.
  path: '#', // Ruta
  template: ` 
  <div class='paws-image'>
  <img class='paws' src='images/animalsBackground.png' alt='paws' />
</div>
<div class='modal'>
<img class='paws' src='images/animalsBackground.png' alt='paws' />
<img class='paws-logo' src='https://res.cloudinary.com/dtaq1ip2g/image/upload/v1649083428/logo-removebg-preview_b5cvjq.png' alt='paws-logo' />
<p>
    PAWS la unica red social que te permite interactuar, publicar y enterarte de las ultimas noticias sobre la proteccion y cuidado de los animales.
</p>
<div id='buttons'>
    <button id='sign-up'>Registrarse</button>
    <button id='log-in'>Ingresar</button>
</div>
</div>



    `, // Template de vista home (página principal).
  state: 'unlogged', // Solo puede acceder a esta ruta si no está logueado
  script: () => { // Función que se ejecuta al cargar la vista home.
    const btnRegister = document.querySelector('#sign-up'); // Botón para abrir la opcion de registro.
    btnRegister.addEventListener('click', () => { // Cuando se hace click en el botón de registro.
      window.location.hash = 'registro'; // Redireccionamos a registro.
    });
    const btnLogin = document.querySelector('#log-in'); // Botón para abrir la opcion de login.
    btnLogin.addEventListener('click', () => { // Cuando se hace click en el botón de login.
      window.location.hash = 'login'; // Redireccionamos a login.
    });
  }, // Fin de la función script.
}; // Fin de la ruta home.
