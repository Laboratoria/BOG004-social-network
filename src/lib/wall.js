import {
  savePost, viewpost, editar, deletepost, likePost,
} from '../Configfirebase/firestore.js';

import { singOff } from '../Configfirebase/Authentication.js';
// import {
//   userActive,
// } from '../Configfirebase/Authentication.js';

export const wall = () => {
  const divElement = document.createElement('div');
  const template = `
     <header>
     <img src='image/logo2.png' alt='social-trip-png' class = 'logo-W'>
     </header>
     <section class='post'>
     <form id='formpost' class='formpost' autocomplete='off'> 
        <label for='post' id='nameuser'> </label>
        <textarea id='post' rows='4'maxlength='150' placeholder='Comparte tu Experiencia'></textarea>
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
  const name = divElement.querySelector('#nameuser');
  const btnpost2 = divElement.querySelector('#btnpost');
  const viewpost2 = divElement.querySelector('.viewpost');
  const btnlogout = divElement.querySelector('#logout');

  showPosts(viewpost2);
  btnpost2.addEventListener('click', () => {
    if (description.value === '') {
      // alert('Por favor escribe algo');
      btnpost2.disabled = true;
    } else {
      btnpost2.disabled = false;
      showPosts(viewpost2);
    }
  });
  formPost.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('holi', description.value);
    savePost(description.value)
      .then((data) => {
        console.log('Holaaaaaaa', data);
        return 'Chao';
      })
      .catch((error) => console.log(error));
    formPost.reset();
  });
  btnlogout.addEventListener('click', () => {
    singOff();
  });
  return divElement;
};

const showPosts = (viewpost2) => {
  viewpost()
    .then((data) => {
      console.log(data);
      viewpost2.innerHTML = '';
      data.forEach((post) => {
        console.log('POST', post.id);
        let count = 0;
        const fcreacion = post.data().dateCreated;
        const contenedorPost = document.createElement('div');
        contenedorPost.classList.add('containerPost');
        const descripcion = document.createElement('p');
        const date = document.createElement('h3');
        date.innerText = fcreacion;
        const containerButton = document.createElement('div');
        containerButton.classList.add('containerButton');
        const likeButton = document.createElement('img');
        likeButton.classList.add('buttonpost');
        const likecounting = document.createElement('p');
        const editButton = document.createElement('img');
        editButton.classList.add('buttonpost');
        const removeButton = document.createElement('img');
        removeButton.classList.add('buttonpost');
        likeButton.src = 'image/likesimg.png';
        editButton.src = 'image/editar.png';
        removeButton.src = 'image/eliminar.png';
        descripcion.innerText = post.data().descripcion;
        contenedorPost.appendChild(date);
        containerButton.appendChild(likecounting);
        containerButton.appendChild(likeButton);
        containerButton.appendChild(editButton);
        containerButton.appendChild(removeButton);
        viewpost2.appendChild(containerButton);
        contenedorPost.appendChild(descripcion);
        viewpost2.appendChild(contenedorPost);
        likeButton.addEventListener('click', () => {
          const likePost2 = likePost();
          // likecounting.innerText = ++count
          console.log('likes', likePost2, likecounting);
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
          console.log('hola', post);
          btnPost.addEventListener('click', () => {
            console.log(inputPost.value);
            editar(post.id, inputPost.value);
            btnPost.style.display = 'none';
          });
        });
        removeButton.addEventListener('click', () => {
          const modalwindow = document.createElement('section');
          const modalText = document.createElement('p');
          const modalButton = document.createElement('button');
          viewpost2.appendChild(modalwindow);
          modalwindow.appendChild(modalText);
          modalText.innerText = '¿ Estas seguro de eliminar la publicación?';
          modalButton.innerText = 'Eliminar';
          modalwindow.appendChild(modalButton);
          modalText.classList.add('confirmation');
          modalButton.classList.add('btnconfirmation');
          modalwindow.classList.add('modals', 'active');
          console.log(post.id, post.data().descripcion);
          modalButton.addEventListener('click', () => {
            deletepost(post.id, post.data().descripcion);
            modalwindow.classList.remove('active');
          });
        });
      });
    });
};
