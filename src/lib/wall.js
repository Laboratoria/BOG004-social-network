import {
  savePost, edit, deletePost, likePost, viewPost,
} from '../Configfirebase/firestore.js';

import { singOff } from '../Configfirebase/Authentication.js';

export const wall = () => {
  const divElement = document.createElement('div');
  const template = `
     <header>
     <img src='image/logo2.png' alt='social-trip-png' class = 'logo-W'>
     </header>
     <section class='post'>
     <form id='formpost' class='formpost' autocomplete='off'> 
        <label for='post' id='nameuser'> </label>
        <textarea required id='post' rows='4'maxlength='150'  placeholder='Comparte tu Experiencia' ></textarea>
        <button type='submit' id='btnpost' class ='btnpost'>Publicar</button>
     </form> 
     </section>
     <section class='viewpost'>

   
     </section>
     <button id='logout'> Logout </button>
     `;
    // aqui tu codigo
  divElement.classList.add('view4');
  divElement.innerHTML = template;

  const formPost = divElement.querySelector('#formpost');
  const description = divElement.querySelector('#post');
  /* const name = divElement.querySelector('#nameuser'); */
  const btnpost2 = divElement.querySelector('#btnpost');
  const viewPost2 = divElement.querySelector('.viewpost');
  const btnlogout = divElement.querySelector('#logout');
  // eslint-disable-next-line
  showPosts(viewPost2);
  btnpost2.addEventListener('click', () => {
    // eslint-disable-next-line
  showPosts(viewPost2);
  });

  formPost.addEventListener('submit', (e) => {
    e.preventDefault();
    // eslint-disable-next-line
    console.log('holi', description.value);
    savePost(description.value)
    // saveComment(viewPost2)
      .then((data) => {
        // eslint-disable-next-line
        console.log('Holaaaaaaa', data);
        return 'Chao';
      })
      // eslint-disable-next-line
     .catch((error) => console.log(error));
    formPost.reset();
  });
  btnlogout.addEventListener('click', () => {
    singOff();
  });
  // actualizaciones();
  return divElement;
};

export const showPosts = (viewPost2) => {
  viewPost()
    .then((data) => {
      // eslint-disable-next-line
      console.log(data);
      // eslint-disable-next-line
      viewPost2.innerHTML = '';
      data.forEach((post) => {
        // eslint-disable-next-line
        console.log('POST', post.data().likesCounting);
        const likesPost = post.data().likesCounting;
        const datePost = post.data().dateCreated;
        const contenedorPost = document.createElement('div');
        contenedorPost.classList.add('containerPost');
        const descripcion = document.createElement('p');
        const date = document.createElement('h3');
        date.innerText = datePost;
        date.classList.add('datePost');
        const containerButton = document.createElement('div');
        containerButton.classList.add('containerButton');
        const likeButton = document.createElement('img');
        likeButton.classList.add('buttonpost');
        const likecounting = document.createElement('p');
        const editButton = document.createElement('img');
        editButton.classList.add('buttonpost');
        const removeButton = document.createElement('img');
        removeButton.classList.add('buttonpost');
        const commentButton = document.createElement('img');
        commentButton.classList.add('buttonpost');
        const saveComment = document.createElement('div');
        saveComment.classList.add('savePost');
        likeButton.src = 'image/likesimg.png';
        editButton.src = 'image/editar.png';
        removeButton.src = 'image/eliminar.png';
        commentButton.src = 'image/comentarios.png';
        descripcion.innerText = post.data().descripcion;
        contenedorPost.appendChild(date);
        containerButton.appendChild(likecounting);
        containerButton.appendChild(likeButton);
        containerButton.appendChild(commentButton);
        containerButton.appendChild(editButton);
        containerButton.appendChild(removeButton);
        viewPost2.appendChild(containerButton);
        contenedorPost.appendChild(descripcion);
        viewPost2.appendChild(contenedorPost);
        viewPost2.appendChild(saveComment);
        likecounting.innerText = likesPost;
        likeButton.addEventListener('click', () => {
          likePost(post.id, localStorage.getItem('emailForSignIn'));
          // eslint-disable-next-line
         console.log('likes', likecounting);
        });
        editButton.addEventListener('click', () => {
          descripcion.innerText = '';
          const inputPost = document.createElement('textarea');
          const btnPost = document.createElement('img');
          btnPost.src = 'image/aceptarcambios.png';
          inputPost.classList.add('editPost');
          btnPost.classList.add('buttonpost');
          contenedorPost.appendChild(inputPost);
          containerButton.appendChild(btnPost);
          inputPost.innerText = post.data().descripcion;
          // eslint-disable-next-line
          console.log('hola', post);
          btnPost.addEventListener('click', () => {
            // eslint-disable-next-line
            console.log(inputPost.value);
            edit(post.id, inputPost.value);
            btnPost.style.display = 'none';
          });
        });
        removeButton.addEventListener('click', () => {
          const modalwindow = document.createElement('section');
          const modalText = document.createElement('p');
          const modalButton = document.createElement('button');
          viewPost2.appendChild(modalwindow);
          modalwindow.appendChild(modalText);
          modalText.innerText = '¿ Estas seguro de eliminar la publicación?';
          modalButton.innerText = 'Eliminar';
          modalwindow.appendChild(modalButton);
          modalText.classList.add('confirmation');
          modalButton.classList.add('btnconfirmation');
          modalwindow.classList.add('modals', 'active');
          // eslint-disable-next-line
          console.log(post.id, post.data().descripcion);
          modalButton.addEventListener('click', () => {
            deletePost(post.id, post.data().descripcion);
            modalwindow.classList.remove('active');
          });
        });
        commentButton.addEventListener('click', () => {
          const inputPost = document.createElement('textarea');
          const btnPost = document.createElement('img');
          btnPost.src = 'image/aceptarcambios.png';
          inputPost.classList.add('editPost');
          btnPost.classList.add('buttonpost');
          saveComment.appendChild(inputPost);
          containerButton.appendChild(btnPost);
          // eslint-disable-next-line
          console.log('hola', post);
          btnPost.addEventListener('click', () => {
          // eslint-disable-next-line
           console.log(inputPost.value);
            // saveComment(post.id, inputPost.value);
            btnPost.style.display = 'none';
          });
        });
      });
    });
};
