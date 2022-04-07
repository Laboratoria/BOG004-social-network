import {
  logOut,
  crearPost,
  updatePost,
  deletePost,
  getPost,
  getDocsFn,
  viewDataRealtime,

} from '../view-controller/controllers.js';

let editMode = false;
let id = '';

function deleteEachPost(mostrarPost) {
  const btnsDelete = mostrarPost.querySelectorAll('.btnDelete');
  console.log(btnsDelete);
  btnsDelete.forEach((btn) => {
    btn.addEventListener('click', ({ target: { dataset } }) => {
      if (window.confirm('¿Estás seguro de eliminar?')) {
        deletePost(dataset.post);
      }
      viewDataRealtime();
    });
  });
}

function editEachPost(mostrarPost) {
  const btnsEdit = mostrarPost.querySelectorAll('.btnEdit');
  console.log('edit: ', btnsEdit);
  btnsEdit.forEach((btn) => {
    btn.addEventListener('click', async ({ target: { dataset } }) => {
      const doc = await getPost(dataset.post);
      const postEdit = doc.data();
      contentFeed.value = postEdit.content;
      editMode = true;
      id = doc.id;
      viewDataRealtime();
    });
  });
}

function readPost(mostrarPost) {
  let templateMostrarPost = '';
  const querySnapshot = getDocsFn();
  console.log('docs fn: ', getDocsFn());
  viewDataRealtime.then((res) => {
    res.forEach((doc) => {
      const post = doc.data();
      templateMostrarPost += `
      <div class="contenedorPost">
        <div class="contentPost">
          <p>${post.content}</p>
        </div>
        <div class="btnPost">
          <button class="btnEdit" data-post="${doc.id}">Editar</button>
          <button class="btnDelete" data-post="${doc.id}">Eliminar</button>
        </div>
      </div>
    `;
    });
    console.log('templateMostrarPost: ', templateMostrarPost);
    mostrarPost.innerHTML = templateMostrarPost;

    editEachPost(mostrarPost);
    deleteEachPost(mostrarPost);
  });
  viewDataRealtime(querySnapshot);
}

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
  console.log('mostrarPost elemento:', mostrarPost);
  btnSubmit.addEventListener('click', () => {
    console.log(contentFeed.value);
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
        console.log('editando');
        updatePost(id, { content: contentFeed.value });
      }
      posts.reset();
      viewDataRealtime();
    }
  });
  readPost(mostrarPost);
  viewDataRealtime();

  return divElemt;
};
