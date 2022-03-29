export default () => {
  const viewWall = `  
    <section id="wall-user"> Wall
    <div id="wall-content">
    <div id="editPost">
      <textarea id="thinksuseredit" rows="4" cols="50" placeholder="¿Que estas pensado?..."></textarea>
      <button id="toPost" class="btn-post">Publicar</button>
      </div>
    <div class="post">
      <img src="" alt="" class="profile">
      <div class="postcontent">
        <div id="user-thinking" class="postuser"></div>
        <div id="space-thinking" class="thinksuser">
        </div>
      <div class="posticons">
        <img src="img/moms.jpeg" alt="like-moms" class="posticon">
        <img src="img/comment.jpeg" alt="click-comment" class="posticon">
        <img src="img/save.jpeg" alt="click-save" class="posticon">
      </div>
      </div>
    </div>
    </div>
    <button id="logoutBtn">Cerrar sesion</button>
    </section>`;
  const divElement = document.createElement('div');
  divElement.innerHTML = viewWall;
  return divElement;
};
