import { logOut , auth, reglaUno } from "../FirebaseConfig.js";

export default () => {
  const viewFeed = `
  <div class="contenedor-feed">
    <div class="navbar-pantalla3">
        <img id="imgCodering" src="../img/codering.png" alt="Logo Codering">
        <input type="text" id="buscar" placeholder="Buscar"></input>
        <button> <img id="imgBotonIr" src="../img/buscar.png" alt="Ir"> </button>
        <button> <img id="imgLogout" src="../img/cerrar-sesion.png" alt="Cerrar sesión"> </button>
    </div>
    <div class="barra">
      <img src="../img/home.png" alt="Logo Codering">
      <img src="../img/mensajes.png" alt="Logo Codering">
      <img src="../img/perfil.png" alt="Logo Codering">
      <img src="../img/notif.png" alt="Logo Codering">
    </div>
    <div class="posts" id="posts">
      <div>
        <h3 id="titulo">titulo</h3>
        <textarea></textarea>
        <input type="file">
        <button type="submit">Publicar</button>
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


  return divElemt;
};
