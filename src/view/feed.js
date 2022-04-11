import {
  logOut,
  crearPost,
  updatePost,
  deletePost,
  getPost,
  onPost,
  currentUserOnline,
  likePost,
} from '../view-controller/controllers.js';

let editMode = false;
let id = '';

function likeEachPost(mostrarPost) {
  const btnsLike = mostrarPost.querySelectorAll('.like');
  btnsLike.forEach((btn) => {
    btn.addEventListener('click', ({ target: { dataset } }) => {
      // Traemos la función likePost desde el controller.
      likePost(dataset.post);
      // Adicionar o quitar clase al darle me gusta
      btn.classList.toggle('darLike');
    });
  });
}
function deleteEachPost(mostrarPost) {
  // le pasamos el parametro para que cuando se ejecute sepa donde esta
  // identificamos el grupo de botones para asignarle a cada uno el id del post
  const btnsDelete = mostrarPost.querySelectorAll('.btnDelete');
  btnsDelete.forEach((btn) => {
    btn.addEventListener('click', ({ target: { dataset } }) => {
      // confirma al usuario si está seguro de borrar el post
      if (window.confirm('¿Estás seguro de eliminar?')) {
        // ejecuta la función borrar
        deletePost(dataset.post);
      }
    });
  });
}
function editEachPost(mostrarPost) {
  const btnsEdit = mostrarPost.querySelectorAll('.btnEdit');
  btnsEdit.forEach((btn) => {
    btn.addEventListener('click', async ({ target: { dataset } }) => {
      // traemos la data y usamos async await ya que es asincrono
      const doc = await getPost(dataset.post);
      // guardamos la data en una constante para poder acceder a ella más adelante
      const postEdit = doc.data();
      // igualamos el valor del input al valor por el que se quiere editar
      contentFeed.value = postEdit.content;
      // se enciende el modo edición
      editMode = true;
      // igualamos el id vacio al id que se obtiene de la publicación, al guardar lo reemplaza
      id = doc.id;
    });
  });
}
function renderPosts(posts) {
  const mostrarPost = document.querySelector('#mostrarPost');
  let templateMostrarPost = '';
  posts.forEach((doc) => {
    const post = doc.data();
    templateMostrarPost += `
      <div class="contenedorPost">
        <div class='usuarioAutor'>
          <h3>User: ${post.usuario}</h3>
        </div>
        <div class="contentPost">
          <p>${post.content}</p>
        </div>
        <div class="btnPost">
          <button class="btnEdit" data-post="${doc.id}">Editar</button>
          <button class="btnDelete" data-post="${doc.id}">Eliminar</button>
          <button class="like" data-post="${doc.id}"></button>
          <p>${post.likesCount}</p>
        </div>
      </div>
    `;
  });
  mostrarPost.innerHTML = templateMostrarPost;
  editEachPost(mostrarPost);
  deleteEachPost(mostrarPost);
  likeEachPost(mostrarPost);
}
// ejecutamos la función onPost para que nos muestre en tiempo real cualquier cambio detectado
// le pasamos como parametro la función render post para que muestre el template, y los
// cambios de las funciones edit and delete.
onPost(renderPosts);

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
      <h2> Documentate aquí => </h2>
      <a href='https://docs.oracle.com/en/java/' target="_blank"><img src='img/java.png' alt='Java' title='Java'></a>
      <a href='https://docs.python.org/es/3/' target="_blank"><img src='img/python.png' alt='Python' title='Python'></a>
      <a href='https://es.reactjs.org/docs/getting-started.html' target="_blank"><img src='img/atom.png' alt='React' title='React'></a>
      <a href='https://developer.mozilla.org/es/docs/Web/JavaScript' target="_blank" ><img src='img/js.png' alt='JavaScript' title='JavaScript'></a>

    </div>
    <div class="postGeneral">
      <div class="divForm" id="divForm">
        <form class="posts" id="posts">
            <textarea class="contentFeed" id="contentFeed" placeholder='Escribe aquí tu post!'></textarea>
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
  onPost(renderPosts);
  currentUserOnline();
  const posts = divElemt.querySelector('#posts');
  const btnSubmit = divElemt.querySelector('#submitPost');
  const contentFeed = divElemt.querySelector('#contentFeed');
  btnSubmit.addEventListener('click', () => {
    if (contentFeed.value === '') {
      document.querySelector('#mensaje').innerHTML = 'Este campo no puede estar vacío';
      document.querySelector('#atencion').style.display = 'flex';
      divElemt.querySelector('#cerrar').addEventListener('click', () => {
        divElemt.querySelector('#atencion').style.display = 'none';
      });
    } else {
      if (!editMode) {
        crearPost();
      } else {
        updatePost(id, { content: contentFeed.value });
        editMode = false;
      }
      posts.reset();
    }
  });
  return divElemt;
};
