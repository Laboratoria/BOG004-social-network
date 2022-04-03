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
    <div class="divForm">
      <form class="posts" id="posts">
          <textarea class="contentFeed" id="contentFeed"></textarea>
      </form>
      <button type="submit" id="submitPost">Publicar</button>
    </div>
    <div id="mostrarPost">
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
  btnSubmit.addEventListener('click', () => {
    crearPost();
    posts.reset();
    readPost();
  });
  return divElemt;
};
