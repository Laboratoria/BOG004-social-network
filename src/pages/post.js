// import { router } from '../router.js';
import {
  savePost,
  getPost,
  onGetPost, deletePost,
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
        rows='4' cols='50' maxlength='300'
        class='form__postCreate-text'
        placeholder='Escribe tu comentario...'>
      </textarea>
  <div class='option-post'>
  <i class='fa-solid fa-paperclip'></i>
  <input class='attachment'type='file'></input>
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
  script: () => {
    const btnAttachment = document.querySelector('.fa-paperclip');
    const inputAttachment = document.querySelector('.attachment');
    const btnProfileFooter = document.querySelector('#userFooter');
    const btnProfileHeader = document.querySelector('#userHeader');
    // const btnPublicar = document.querySelector('#btn-publicar');

    const postList = document.getElementById('post-list');
    const postForm = document.querySelector('.container-publicar');
    window.addEventListener('DOMContentLoaded', async () => {
      onGetPost((querySnapshot) => {
        let html = '';

        querySnapshot.forEach((doc) => {
          const postData = doc.data();
          // console.log(doc.id);
          html += `<div>
                      <p>${postData.postDescription}</p>
                      <button class='delete' data-id='${doc.id}'>Delete</button>
                      <button class='edit-post'>Edit</button>
                  </div>`;
        });
        postList.innerHTML = html;
        const btnDelete = postList.querySelectorAll('.delete');
        btnDelete.forEach(btn => btn.addEventListener('click', ({ target: { dataset } }) => {
          deletePost(dataset.id); 
        }))
      });
    });

    // const db = getFirestore();

    postForm.addEventListener('submit', (e) => {
      const postDescription = document.querySelector(
        '#form__postCreate-text',
      ).value;
      e.preventDefault();
      console.log(postDescription);
      savePost(postDescription);
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
