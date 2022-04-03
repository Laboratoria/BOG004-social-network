import { newRegister } from '../view-controller/controllers.js';

export default () => {
  const viewRegister = `
    <div class="contenedor-register">
      
      <div class="navbar-pantalla">
        <button class="atras">
        <a href="#/"> <img clas="img-atras" src="img/icono_atras.png" alt="Atrás"> </a>
        </button>
      </div>
      <div id="atencion" class="modal">
        <div class="contenidoModal">
         <div class="modalHeader flex">
           <h2>Atención!</h2>
            <span class="cerrar" id="cerrar">&times;</span>  
          </div>
          <div class="modalBody">
            <p id="mensaje" >Hola</p>
          </div>
        </div>
      </div>

      <div class="logo-formulario">
        <img src="img/logo-codering-letrasnegras.png" alt="Logo Codering">
      </div>

      <form id="formularioRegister">
        <label>Correo electrónico</label>
        <input type="text" id="correoRegister" class="formulario"></input>
        <label>Contraseña</label>
        <input type="password" id="contraseñaRegister" class="formulario"></input>
        <button type="submit" class="botones">REGISTRARME</button>
      </form>

     
    </div>
    `;
  const divElemt = document.createElement('div');
  divElemt.innerHTML = viewRegister;
  const formularioRegister = divElemt.querySelector('#formularioRegister');
  formularioRegister.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = divElemt.querySelector('#correoRegister').value;
    const password = divElemt.querySelector('#contraseñaRegister').value;
    formularioRegister.reset();
    newRegister(email, password);
  });
  divElemt.querySelector('#cerrar').addEventListener('click', () => {
    divElemt.querySelector('#atencion').style.display = 'none';
  });
  return divElemt;
};
