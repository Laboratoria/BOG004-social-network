import { submithandler }  from '../Configfirebase/Authentication.js';
 
export const register = () => {
  const divElement = document.createElement('div'); 
 const template = `
  <header>
  <img src='image/logo2.png' alt='social-trip-png'>
  </header>
  <form onsubmit=${submithandler(e.target.name.email, e.target.name.password)} id='formregister' class='formregister' autocomplete='off'> 
  <label for='name'>Nombres y Apellidos</label>
  <input type='name' id='name' maxlength='20' >
  <label for='username'>Nombre de Usuario</label>
  <input type='username' id='username' maxlength='12'>
  <label for='email'>Correo Electrónico</label>
  <input type='email' id='email' name='email'>
  <label for='password'>Contraseña</label>
  <input type='password' id='password' name='password' minlength='8' maxlength='16'>
  </form> 
  <button  type='submit' id='btnregister'>REGISTRATE</button>
  <p>Al registrarte, aceptas nuestras condiciones, la politica de datos, y la politica de cookies.</p>
  <h1>O</h1>
  <button><img src='image/botongoogle.png' alt='logo-google'>Inicia sesión con Google</button>

  <section id='modal' class='modal'>
  <div id='btnclose' class='btnclose'>x</div>
  <p id='confirmation' class='confirmation'> Verifica tu correo electrónico. Gracias por unirte a nuestra red de viajeros. Social Trip te ofrece todo para que puedas compartir, recomendar y opinar sobre los sitios que has visitado. Para acceder a tu cuenta, crear y editar post, has click en verificar.</p>
  <button id='btnconfirmation' class='btnconfirmation'>VERIFICAR</button>
  </section>`;
  // aqui tu codigo
 
  divElement.classList.add('view2');
  divElement.innerHTML = template; 

  const bottomregister = divElement.querySelector('#btnregister');
  const modalwindow = divElement.querySelector('.modal');
  const bottomclose=divElement.querySelector('.btnclose');
  
  bottomregister.addEventListener('click',()=>{
    modalwindow.classList.add('active')
  })
  bottomclose.addEventListener('click',()=>{
    modalwindow.classList.remove('active') 
  })  
  return divElement;
};
