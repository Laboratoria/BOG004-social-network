import {
  savePost,
  getOnlyPost,
  onGetPost, deletePost,
  updatePost,
  auth,
} from '../lib/firebase.js'; // Importamos la librería de firebase.

export default { // Exportamos un objeto con la descripción de la ruta post.
  path: '#post', // Ruta
  template: `
  <header class='nav-bar'>
  <img
    class='logo-mobile'
    src='https://res.cloudinary.com/dtaq1ip2g/image/upload/v1646690477/logo_movil_byxlxx.png'
    alt='pawslogo'
  />
  <div id='allPost'>
    <a><i class='fa-solid fa-user fa-3x' id='userHeader'><p>Perfil</p></i> </a>
    <a href=''><i class='fa-solid fa-paw fa-3x'><p>Post</p></i> </a>
    <a href=''><i class='fa-solid fa-magnifying-glass fa-3x' id='filterHeader'><p>Buscar</p></i> </a>
  </div>
</header>

<div>
<form class='container-publicar'>
  <div class='container-post'>
  <textarea
        id='form__postCreate-text'
        rows='4' cols='50' maxlength='150'
        class='form__postCreate-text'
        placeholder='Escribe tu comentario...'>
      </textarea>
  <div class='option-post'>
  <button class="clip"><i class='fa-solid fa-paperclip fa-2x'></i></button>
  <input class='attachment'type='file'></input>
  <select class='select-post'>
    <option value='select' selected>Especie</option>
    <option value='canino'>#Canino</option>
    <option value='felino'>#Felino</option>
    <option value='otro'>#Otro</option>
  </select>
  <button type='submit' id='btn-publicar'>Publicar</button>
  </div>
  </div>
</form>

  <div id='post-list'></div>
  </div>
    <footer>
      <a><i class='fa-solid fa-user' id='userFooter'></i> </a>
      <a href=''><i class='fa-solid fa-paw'></i> </a>
      <a href=''><i class='fa-solid fa-magnifying-glass' id='filterFooter'></i> </a>
    </footer>`, // Template de vista post.
  state: 'logged', // Solo puede acceder a esta ruta si está logueado.
  script: () => { // Función que se ejecuta al cargar la vista post.
    const btnAttachment = document.querySelector('.fa-paperclip'); // Botón para adjuntar la imagen.
    const inputAttachment = document.querySelector('.attachment'); // Input para adjuntar la imagen.
    const btnProfileFooter = document.querySelector('#userFooter'); // Botón para abrir la opcion de perfil vista movil.
    const btnProfileHeader = document.querySelector('#userHeader'); // Botón para abrir la opcion de perfil vista escritorio.
    const postList = document.getElementById('post-list'); // captura la seccion que contiene la Lista de posts.
    const postForm = document.querySelector('.container-publicar'); // captura el formulario de publicar.

    // sección para pintar los post en el DOM
    let editStatus = false; // variable para saber si estamos editando o no.
    let id = ''; // variable para saber el id del post que estamos editando.

    /* CAPTURAR DATOS DEL USUARIO */
    const userSessionStorage = sessionStorage.getItem('user'); // captura el usuario de la sesión.
    // La variable "convertObjJson" convierte el usuario de string a objeto.
    const convertObjJson = JSON.parse(userSessionStorage);
    const userId = convertObjJson.uid; // captura el id del usuario.

    // Función para pintar los post en el DOM.
    onGetPost((querySnapshot) => { // Función para obtener los post.
      let html = ''; // variable para pintar los post.

      querySnapshot.forEach((doc) => { // Recorre los post.
        const postData = doc.data(); // captura los datos del post.
        const userid = auth.currentUser.uid; // captura el id del usuario.
        let buttons = ''; // variable para pintar los botones de editar y eliminar.
        const heartIcon = postData.userlikes.includes(userid) ? 'fa-solid' : 'fa-regular'; // variable para saber si el usuario le dio like al post.
        if (postData.userId === userid) { // Si el usuario es el mismo que el que publicó el post.
          buttons = `<div class="singlePost_button">
                      <button class="btnImage"><i data-id='${doc.id}' class='fa-solid fa-trash-can'></i></button>
                     </div>
                      <div class="singlePost_button">
                      <button class="btnImage"><i data-id='${doc.id}' class='fa-solid fa-pen-to-square'></i></button>
                      </div>                
      `; // pinta los botones de editar y eliminar.
        }
        // console.log(doc.id);
        html += `<div class="singlePost_container">
                    <img class="singlePost_img" src="images/animalsBackground.png" alt="imagenPost">
                    <div class="singlePost_footer">
                      <div class="singlePost_button">
                        <button class="btnImage"><i data-id='${doc.id}' class='${heartIcon} fa-heart'></i></button>
                        <p class="countLikes">${postData.countLike}</p> 
                        ${buttons} 
                      </div>
                      <div>
                        <p>${postData.species}</p>
                      </div>  
                    </div>
                    <div class="singlePost_header">
                      <p class="singlePost">${postData.postDescription}</p>
                    </div>         
                  </div>`; // pinta el post.
      });
      postList.innerHTML = html; // pinta los post en el DOM.

      // Eliminar post.
      const btnDelete = postList.querySelectorAll('.fa-trash-can'); // captura los botones de eliminar.
      btnDelete.forEach((btn) => btn.addEventListener('click', ({ target: { dataset } }) => { // captura el id del post.
        if (window.confirm('¿Estás seguro de eliminar el post?')) { // pregunta si está seguro de eliminar el post.
          deletePost(dataset.id); // elimina el post.
        }
      }));

      // Editar post.
      const btnEdit = postList.querySelectorAll('.fa-pen-to-square'); // captura los botones de editar.
      btnEdit.forEach((btn) => btn.addEventListener('click', async (e) => { // captura el id del post.
        const doc = await getOnlyPost(e.target.dataset.id); // captura el post.
        console.log(doc.data());
        const postOnly = doc.data(); // captura los datos del post.
        postForm['form__postCreate-text'].value = postOnly.postDescription; // captura el texto del post.
        editStatus = true; // variable para saber si estamos editando o no.
        id = doc.id; // variable para saber el id del post que estamos editando.
        console.log('valor de', id);

        postForm['btn-publicar'].innerText = 'Actualizar'; // cambia el texto del botón de Publicar a Actualizar.
      }));

      const btnLike = postList.querySelectorAll('.fa-heart'); // captura los botones de like.
      btnLike.forEach((btn) => btn.addEventListener('click', async ({ target: { dataset } }) => { // captura el id del post.
        console.log('clic');
        const doc = await getOnlyPost(dataset.id); // captura el post.
        const postOnly = doc.data(); // captura los datos del post.
        id = doc.id; // variable para saber el id del post que estamos editando.
        let userlikes = postOnly.userlikes; // captura los likes del post.
        let countLike = postOnly.countLike; // captura el contador de likes del post.
        if (userlikes.includes(userId)) { // si el usuario ya le dio like al post.
          userlikes = userlikes.filter((user) => user !== userId); // elimina el like del usuario.
          countLike -= 1; // disminuye el contador de likes.
          console.log(countLike);
        } else {
          userlikes.push(userId); // agrega el like al usuario.
          countLike += 1; // aumenta el contador de likes.
          console.log(countLike);
        }
        updatePost(id, { userlikes, countLike }); // actualiza en el post los likes y el contador.
      }));
    });

    const countLike = 0; // variable para contar los likes.
    const userlikes = []; // variable para guardar los likes.

    /* Guardar el post en la base de dato Firestore */
    postForm.addEventListener('submit', (e) => { // captura el evento submit del formulario.
      const postDescription = document.querySelector( // captura el texto del post.
        '#form__postCreate-text',
      ).value;
      const species = document.querySelector('.select-post').value;
      // const image = document.querySelector('.fa-paperclip').value;
      // const image = document.querySelector('.singlePost_img'); // .value pendiente por definir;
      e.preventDefault(); // evita que se recargue la página.
      if (!editStatus) { // si no estamos editando.
        savePost(postDescription, userId, countLike, userlikes, species); // guarda el post.
      } else { // si estamos editando.
        updatePost(id, { postDescription, species }); // actualiza el post.
        editStatus = false; // Reiniciando el estados de la validación en false.
      }
      postForm.reset(); // limpia el formulario del textarea.
    });

    btnAttachment.addEventListener('click', (e) => { // captura el evento click del botón de adjuntar.
      e.preventDefault(); // evita que se recargue la página.
      inputAttachment.click(); // abre el input de archivos.
    });

    btnProfileFooter.addEventListener('click', (e) => { // captura el evento click del botón de perfil vista movil.
      e.preventDefault(); // evita que se recargue la página.
      window.location.hash = 'perfil'; // redirecciona a la página de perfil.
    });

    btnProfileHeader.addEventListener('click', (e) => { // captura el evento click del botón de perfil vista escritorio.
      e.preventDefault(); // evita que se recargue la página.
      window.location.hash = 'perfil'; // redirecciona a la página de perfil.
    });

    document.querySelector('#filterHeader').addEventListener('click', (e) => {
      e.preventDefault();
      window.location.hash = 'filter';
    });

    document.querySelector('#filterFooter').addEventListener('click', (e) => {
      e.preventDefault();
      window.location.hash = 'filter';
    });
  },
};
