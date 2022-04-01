// import { router } from '../router.js';
import {
  savePost,
  getOnlyPost,
  onGetPost, deletePost,
  updatePost,
  auth,
} from '../lib/firebase.js';



export default {
  path: '#post',
  template: `
  <header class='nav-bar'>
  <img
    class='logo-mobile'
    src='https://res.cloudinary.com/dtaq1ip2g/image/upload/v1646690477/logo_movil_byxlxx.png'
    alt='pawslogo'
  />
  <div id='allPost'>
    <a><i class='fa-solid fa-user fa-3x' id='userHeader'><p>Perfil</p></i> </a>
    <a href='#'><i class='fa-solid fa-paw fa-3x'><p>Post</p></i> </a>
    <!-- <a href='#'><i class='fa-solid fa-circle-chevron-up fa-3x'><p>Post</p></i> </a> -->
    <a href='#'><i class='fa-solid fa-magnifying-glass fa-3x'><p>Buscar</p></i> </a>
  </div>
</header>

<div>
<form class='container-publicar'>
  <div class='container-post'>
  <textarea
        id='form__postCreate-text'
        rows='4' cols='50' maxlength='600'
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
      <!-- <a href=''><i class='fa-solid fa-circle-chevron-up'></i></a> -->
      <a href='#'><i class='fa-solid fa-magnifying-glass'></i> </a>
    </footer>`,
  private: true,
  state: 'logged', // Solo puede acceder a esta ruta si está logueado
  script: () => {
    const btnAttachment = document.querySelector('.fa-paperclip');
    const inputAttachment = document.querySelector('.attachment');
    const btnProfileFooter = document.querySelector('#userFooter');
    const btnProfileHeader = document.querySelector('#userHeader');
    const postList = document.getElementById('post-list');
    const postForm = document.querySelector('.container-publicar');

    // sección para pintar los post en el DOM
    let editStatus = false;
    let id = '';
    /* CAPTURAR DATOS DEL USUARIO */
    const userSessionStorage = sessionStorage.getItem('user');
    const convertObjJson = JSON.parse(userSessionStorage);
    const userId = convertObjJson.uid;

    onGetPost((querySnapshot) => {
      let html = '';

      querySnapshot.forEach((doc) => {
        const postData = doc.data();
        const userid = auth.currentUser.uid;
        let buttons = '';
        const heartIcon = postData.userlikes.includes(userid) ? 'fa-solid' : 'fa-regular';
        if (postData.userId === userid) {
          buttons = `<button class="btnImage"><i data-id='${doc.id}' class='fa-solid fa-trash-can'></i></button>
                      <button class="btnImage"><i data-id='${doc.id}' class='fa-solid fa-pen-to-square'></i></button>
      `;
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
                    <p>#Especie</p>
                    </div>
                    <div class="singlePost_header">
                      <p class="singlePost">${postData.postDescription}</p>
                    </div>
                  </div>`;
      });
      postList.innerHTML = html;

      // Eliminar post
      // const btnDelete = document.querySelectorAll('.fa-trash-can');
      const btnDelete = postList.querySelectorAll('.fa-trash-can');
      btnDelete.forEach((btn) => btn.addEventListener('click', ({ target: { dataset } }) => {
        if (window.confirm('¿Estás seguro de eliminar el post?')) {
          deletePost(dataset.id);
        }
      }));

      // Editar post.
      const btnEdit = postList.querySelectorAll('.fa-pen-to-square');
      btnEdit.forEach((btn) => btn.addEventListener('click', async (e) => {
        const doc = await getOnlyPost(e.target.dataset.id);
        console.log(doc.data());
        const postOnly = doc.data();
        postForm['form__postCreate-text'].value = postOnly.postDescription;
        editStatus = true;
        id = doc.id;
        console.log('valor de', id);

        postForm['btn-publicar'].innerText = 'Actualizar';
      }));

      const btnLike = postList.querySelectorAll('.fa-heart');
      btnLike.forEach((btn) => btn.addEventListener('click', async ({ target: { dataset } }) => {
        console.log('clic');
        const doc = await getOnlyPost(dataset.id);
        const postOnly = doc.data();
        id = doc.id;
        let userlikes = postOnly.userlikes;
        let countLike = postOnly.countLike;
        if (userlikes.includes(userId)) {
          userlikes = userlikes.filter((user) => user !== userId);
          countLike -= 1;
          console.log(countLike);
          document.querySelector('.countLikes').textContent = countLike;
        } else {
          userlikes.push(userId);
          countLike += 1;
          console.log(countLike);
          btn.classList.add('fa-solid');
          btn.classList.remove('fa-regular');
          document.querySelector('.countLikes').textContent = countLike;
        }
        updatePost(id, { userlikes, countLike });
      }));
    });

    // /* CAPTURAR DATOS DEL USUARIO */
    // const userSessionStorage = sessionStorage.getItem('user');
    // const convertObjJson = JSON.parse(userSessionStorage);
    // const userId = convertObjJson.uid;
    const countLike = 0;
    const userlikes = [];

    /* guardar el post en la base de dato Firestore */
    postForm.addEventListener('submit', (e) => {
      const postDescription = document.querySelector(
        '#form__postCreate-text',
      ).value;
      // const image = document.querySelector('.fa-paperclip').value;
      // const image = document.querySelector('.singlePost_img'); // .value pendiente por definir;
      e.preventDefault();
      if (!editStatus) {
        savePost(postDescription, userId, countLike, userlikes); // .value pendiente por definir;
      } else {
        updatePost(id, { postDescription });

        editStatus = false;
      }
      postForm.reset();
    });

    btnAttachment.addEventListener('click', () => {
      inputAttachment.click();
    });

    btnProfileFooter.addEventListener('click', () => {
      window.location.hash = 'perfil';
    });

    btnProfileHeader.addEventListener('click', () => {
      window.location.hash = 'perfil';
    });
  },
};

// const userName = convertObjJson.displayName;
// const userPhotoURL = convertObjJson.photoURL;
