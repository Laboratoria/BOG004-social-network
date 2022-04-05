import { logOut, crearPost, readPost } from '../view-controller/controllers.js';

export default () => {
  const viewFeed = `
  <div class="contenedor-feed">
    <div class="navbar-pantalla3">
        <img id="imgCodering" src="img/codering-img.png" alt="Logo Codering">
        <input type="text" id="buscar" placeholder="Buscar"></input>
        <button> <img id="imgBotonIr" src="img/ir-img.png" alt="Ir"> </button>
        <button> <img id="imgLogout" src="img/logout-img.png" alt="Cerrar sesión"> </button>
    </div>

    <div class="barra">
      <img src="img/home.png" alt="Logo Codering">
      <img src="img/mensajes.png" alt="Logo Codering">
      <img src="img/perfil.png" alt="Logo Codering">
      <img src="img/notif.png" alt="Logo Codering">
    </div>

    <div class="postGeneral">
      <div class="divForm" id="divForm">
        <form class="posts" id="posts">
            <textarea class="contentFeed" id="contentFeed"></textarea>
        </form>
        <button type="submit" id="submitPost">Publicar</button>
      </div>
      <div id="mostrarPost">
      </div>
    </div>

    <div id="atencion" class="modal">
       <div class="contenidoModal">
        <div class="modalHeader flex">
          <h2>Atención!</h2>
          <span class="cerrar" id="cerrar">&times;</span>  
        </div>
        <div class="modalBody">
          <p id="mensaje"></p>
        </div>
       </div>
    </div>
  </div>
  `;

  const divElemt = document.createElement('div');
  divElemt.innerHTML = viewFeed;
  const btnLogout = divElemt.querySelector('#imgLogout');
  btnLogout.addEventListener('click', () => {
    logOut();
  });
  const posts = divElemt.querySelector('#posts');
  const btnSubmit = divElemt.querySelector('#submitPost');
  const mostrarPost = divElemt.querySelector('#mostrarPost');
  const contentFeed = divElemt.querySelector('#contentFeed');
  const divForm = divElemt.querySelector('#divForm');
  console.log('mostrarPost :', mostrarPost);
  btnSubmit.addEventListener('click', () => {
    console.log(contentFeed.value);
    if (contentFeed.value === '') {
      document.querySelector('#mensaje').innerHTML = 'Este campo no puede estar vacío';
      document.querySelector('#atencion').style.display = 'flex';
      divElemt.querySelector('#cerrar').addEventListener('click', () => {
        divElemt.querySelector('#atencion').style.display = 'none';
      });
    } else {
      crearPost();
      posts.reset();
      readPost(mostrarPost, divForm);
    }
  });
  readPost(mostrarPost, divForm);
  return divElemt;
};
