export default () => {
  const viewWall = `
  <section class="all-wall">
    
    <section class="wall-nav"><aside class="sidebar">
      <div class="respmenu">
        <input type="checkbox">
        <i class="fas fa-bars"></i>
        <i class="fas fa-times"></i>
        
        <nav class="nav">
          <ul>
          <div class="img-mommi-wall"><img src="img/logo.png" alt="logo-mommi" class="logo-mommi-nav"></div>
            <li class="active"><a href="#">Muro</a></li>
            <li><a href="#">Blogs</a></li>
            <li><a href="#">Libros</a></li>
            <li><a href="#">Destacados</a></li>
            <li><a href="#">Más Reciente</a></li>
            <li><a href="#">Personas</a></li>
            <li><a href="#">Imagenes</a></li>
            <button class="button" id="logoutBtn">
            <i class="fa fa-sign-out icono-cerrar-sesion" aria-hidden="true">
            </i>
            </button>
          </ul>
        </nav>
      </div>
    </section>

    <section class="wall-post" id="wall-user"> 
    <p class="welcome-text">Mommi Wall</p>
    <div id="wall-content">
    <div id="editPost">
      <textarea id="thinksuseredit"  rows="4" placeholder="¿Que estas pensado?..." maxlength="200"></textarea>
      <button id = "btnSaveThought"class="btn-post">Publicar</button>
      </div>
    <div class="post" id="posts">
    </div>
    </div>
    </section>
    
    <section class="banner-img">
    <div class="img-univer-wall">
    <img src="img/picturemom.png" alt="Poster mommi" class="logo-unv">
    </div>
    </section>

    </section>
    
    <footer>
    <p class="text-footer">Made by Nataly  Escobar y Lizeth Rodríguez <br>© 2022 mommi, Inc.</p>
  </footer>`;

  const divElement = document.createElement('div');
  divElement.innerHTML = viewWall;
  return divElement;
};
