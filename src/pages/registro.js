import { signInGoogle, signInEmail } from '../lib/firebase.js'; // Importamos la función de autenticación
import { expresiones, validateField } from '../utils.js'; // Importamos las expresiones regulares y la función de validación

export default { // Exportamos un objeto con la descripción de la ruta registro.
  path: '#registro', // Ruta
  template: `
  <div class='paws-image'>
  <img class='paws' src='images/animalsBackground.png' alt='paws' />
</div>
  <div class='container-form'>
    <form action='' class='form' id='form' >
      <p>BIENVENIDO</p>
      <div class='form__group' id='group__name'>
        <div class='form__group-input'>
          <input type='text' class='form__input' name='name' id='name' placeholder='Nombre y Apellido'>
          <i class='form__validation-state fas fa-times-circle'></i>
        </div>
        <p class='form__input-error'>Ingresa sólo tú nombre y apellido.</p>
      </div>
      <div class='form__group' id='group__email'>
        <div class='form__group-input'>
          <input type='email' class='form__input' name='email' id='email' placeholder='correo@email.com'>
          <i class='form__validation-state fas fa-times-circle'></i>
        </div>
        <p class='form__input-error'>El correo sólo puede contener letras, números,<br> puntos, guiones y guion bajo.</p>
      </div>
      <div class='form__group' id='group__password'>
        <div class='form__group-input'>
          <input type='password' class='form__input' name='password' id='password' placeholder='Contraseña'>
          <i class='form__validation-state fas fa-times-circle'></i>
        </div>
        <p class='form__input-error'>La contraseña tiene que ser de 6 a 15 dígitos alfanuméricos.</p>
    </div>
      <button type='button' id='btn-register'>Registrarse</button>
    </form>
    <div>
      <button id='btnSignInGoogle'>
      <img src='https://img.icons8.com/color/30/000000/google-logo.png'/> 
      <p>Ingresar con Google.</p>
      </button>
    </div>
    </div>
  
  
`, // Template de vista registro.
  state: 'unlogged', // Solo puede acceder a esta ruta si no está logueado
  script: () => { // Función que se ejecuta al cargar la vista registro.
    const btn = document.querySelector('#btn-register'); // Botón para registrarse.
    const inputs = document.querySelectorAll('#form input'); // Todos los inputs del formulario.

    const btnSignInGoogle = document.querySelector('#btnSignInGoogle'); // Botón para ingresar con Google.
    btnSignInGoogle.addEventListener('click', signInGoogle);
    // Cuando se hace click en el botón de ingresar con Google.

    btn.addEventListener('click', () => { // Cuando se hace click en el botón de registrarse.
      const name = document.querySelector('#name').value; // Nombre ingresado.
      const email = document.querySelector('#email').value; // Correo ingresado.
      const password = document.querySelector('#password').value; // Contraseña ingresada.
      if (name && email && password) { // Si todos los campos están llenos.
        signInEmail(email, password, name); // Llamamos a la función de autenticación.
      } else { // Si alguno de los campos está vacío.
        alert('Los campos no pueden estar vacios'); // Mostramos un mensaje de error.
      }
    });

    const validarForm = (e) => { // Función que valida los campos del formulario.
      switch (e.target.name) { // Seleccionamos el campo que se está validando.
        case 'name': // Si es el campo nombre.
          validateField(expresiones.name, e.target, 'name'); // Llamamos a la función de validación.
          break; // Salimos del switch.
        case 'email':
          validateField(expresiones.email, e.target, 'email');
          break;
        case 'password':
          validateField(expresiones.password, e.target, 'password');
          break;
        default: // Si no es ninguno de los campos anteriores.
      }
    };

    inputs.forEach((input) => { // Recorremos todos los inputs del formulario.
      input.addEventListener('keyup', validarForm); // Cuando se escribe en el input.
      input.addEventListener('blur', validarForm); // Cuando se quita el foco del input.
    }); // Fin de la función que valida los campos del formulario.
  },
};
