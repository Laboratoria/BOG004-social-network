import { signInGoogle, logInEmail } from '../lib/firebase.js'; // Importamos las funciones de firebase

export default { // Exportamos un objeto con la descripcion de la ruta login.
  path: '#login', // Ruta
  template: ` 
  <div class='paws-image'>
    <img class='paws' src='images/animalsBackground.png' alt='paws' />
  </div>
    <div class='container-form'>
      <form action='' class='form' id='form'>
      <p class='p-login'>Inicia Sesión</p>
      <div class='form__group' id='group__email'>
        <div class='form__group-input'>
          <input type='email' class='form__input' name='emailLogin' id='emailLogin' placeholder='correo@email.com'>
          <i class='form__validation-state fas fa-times-circle'></i>
        </div>
        <p class='form__input-error'>Verifica tu correo.</p>
      </div>
  
      <div class='form__group' id='group__password'>
        <div class='form__group-input'>
          <input type='password' class='form__input' name='passwordLogin' id='passwordLogin' placeholder='Ingresa contraseña'>
          <i class='form__validation-state fas fa-times-circle'></i>
        </div>
        <p class='form__input-error'>Contraseña incorrecta.</p>
    </div>
      <button type='button' id='logIn'>Ingresar</button>
    </form>
    <button id='btnSignInGoogle'>
    <img src='https://img.icons8.com/color/30/000000/google-logo.png'/> 
    <p>Ingresar con Google.</p>
  </button>
 </div>
  
   
              `, // Template de vista login.
  state: 'unlogged', // Solo puede acceder a esta ruta si no está logueado
  script: () => { // Función que se ejecuta al cargar la vista login.
    const btn = document.querySelector('#logIn'); // Botón para iniciar sesión.
    btn.addEventListener('click', () => { // Cuando se hace click en el botón de iniciar sesión.
      const email = document.querySelector('#emailLogin').value; // Obtenemos el correo ingresado.
      const password = document.querySelector('#passwordLogin').value; // Obtenemos la contraseña ingresada.
      logInEmail(email, password);
      // Llamamos a la función de firebase logInEmail para iniciar sesión.
    });

    const btnSignInGoogle = document.querySelector('#btnSignInGoogle'); // Botón para iniciar sesión con google.
    btnSignInGoogle.addEventListener('click', signInGoogle);
    // Cuando se hace click en el botón de iniciar sesión con
    // google se llama la funcion signInGoogle de firebase.
  },
};
