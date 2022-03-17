export default () => {
  const viewWall = `  
    <section id="wall-user">
    <div id="wall-content">
    <div id="editPost">
      <textarea id="thinksuseredit" rows="4" cols="50" placeholder="¿Que estas pensado?..."></textarea>
      <button class="btn-post">Publicar</button>
      </div>
    <div class="post">
      <img src="" alt="" class="profile">
      <div class="postcontent">
        <h1 class="postuser">Madrescrianza @madrescrianza</h1>
        <p class="thinksuser">
    // eslint-disable-next-line max-len
          A veces se nos olvida que nuestros hijos están escuchando
          y ellos estan absorbiendo como esponjas todo lo que decimos y hacemos.
        </p>
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
