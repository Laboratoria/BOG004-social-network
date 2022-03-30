export default () => {
  const viewWall = `
    <section id="wall-user"> 
    <p>Mommi Wall</p>
    <div id="wall-content">
    <div id="editPost">
      <textarea id="thinksuseredit" rows="4" cols="50" placeholder="¿Que estas pensado?..."></textarea>
      <button id = "btnSaveThought"class="btn-post">Publicar</button>
      </div>
    <div class="post" id="posts">
      
    </div>
    <button class="button" id="logoutBtn">
      <i class="fa fa-sign-out icono-cerrar-sesion" aria-hidden="true"></i>
    </button>
    </section>`;

  const divElement = document.createElement('div');
  divElement.innerHTML = viewWall;
  return divElement;
};
