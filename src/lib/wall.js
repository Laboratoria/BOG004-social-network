import {
  savePost, edit, deletePost, likePost, viewPost,
} from '../Configfirebase/firestore.js';

import { singOff } from '../Configfirebase/Authentication.js';

export const wall = () => { /* Aqui creamos el template del muro */
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
  showPosts(viewPost2); /* Aqui ejecutamos la funcion para ver los posts cuando se ingresa a la app */
  btnpost2.addEventListener('click', () => {
    // eslint-disable-next-line
  showPosts(viewPost2); /* Aqui ejecutamos la funcion para ver los posts cuando se publica */
  });

  /* Aqui añadimos un evento para guardar y subir los post a firestore */
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

  /* Aqui ejecutamos la funcion para cerrar sesion */
  btnlogout.addEventListener('click', () => {
    singOff();
  });
  // actualizaciones();
  return divElement;
};

/* Aqui creamos la funcion que nos permite crear, editar y eliminar los posts */
export const showPosts = (viewPost2) => {
  viewPost() /* Esta funcion es la que actualiza en tiempo real */
    .then((data) => {
      // eslint-disable-next-line
      console.log(data);
      // eslint-disable-next-line
      viewPost2.innerHTML = '';
      data.forEach((post) => {
        // eslint-disable-next-line
        console.log('POST', post.data().likesCounting);
        /* En estas variables guardamos los valores traidos desde firestore */
        const likesPost = post.data().likesCounting;
        const datePost = post.data().dateCreated;
        /* Definimos variables para crear en el DOM las etiquetas que necesitabamos
        y añadimos clases */
        const contenedorPost = document.createElement('div');
        contenedorPost.classList.add('containerPost');
        const descripcion = document.createElement('p');
        const date = document.createElement('h3');
        date.innerText = datePost; /* reemplazamos el texto de la variable por la fecha */
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
        // const commentButton = document.createElement('img');
        // commentButton.classList.add('buttonpost');
        const saveComment = document.createElement('div');
        saveComment.classList.add('savePost');
        /* añadimos las imagenes que queriamos para cada boton */
        likeButton.src = 'image/likesimg.png';
        editButton.src = 'image/editar.png';
        removeButton.src = 'image/eliminar.png';
        // commentButton.src = 'image/comentarios.png';
        /* reemplazamos por el valor traido desde firestore */
        descripcion.innerText = post.data().descripcion;
        /* añadimos al DOM con appendchild */
        contenedorPost.appendChild(date);
        containerButton.appendChild(likecounting);
        containerButton.appendChild(likeButton);
        // containerButton.appendChild(commentButton);
        containerButton.appendChild(editButton);
        containerButton.appendChild(removeButton);
        viewPost2.appendChild(containerButton);
        contenedorPost.appendChild(descripcion);
        viewPost2.appendChild(contenedorPost);
        viewPost2.appendChild(saveComment);
        /* reemplazamos por el valor traido desde firestore */
        likecounting.innerText = likesPost;
        /* Añadimos el evento que nos permite poner o quitar likes de cada post */
        likeButton.addEventListener('click', () => {
          likePost(post.id, localStorage.getItem('emailForSignIn')).then(() => {
            showPosts(viewPost2);
          });
          // eslint-disable-next-line
         console.log('likes', likecounting);
        });
        /* Añadimos el evento que nos permite editar cada post */
        editButton.addEventListener('click', () => {
          descripcion.innerText = '';
          /* creamos un nuevo textarea para editar en el mismo post */
          const inputPost = document.createElement('textarea');
          const btnPost = document.createElement('img');
          btnPost.src = 'image/aceptarcambios.png';
          inputPost.classList.add('editPost');
          btnPost.classList.add('buttonpost');
          /* añadimos al DOM con appendchild */
          contenedorPost.appendChild(inputPost);
          containerButton.appendChild(btnPost);
          /* reemplazamos por el valor traido desde firestore */
          inputPost.innerText = post.data().descripcion;
          // eslint-disable-next-line
          console.log('hola', post);
          /* Añadimos el evento que nos permite guardar lo que editamos en cada post */
          btnPost.addEventListener('click', () => {
            // eslint-disable-next-line
            console.log(inputPost.value);
            edit(post.id, inputPost.value).then(() => {
              showPosts(viewPost2);
              btnPost.style.display = 'none';
            });
          });
        });
        /* Añadimos el evento que nos permite crear la confirmacion de eliminar cada post */
        removeButton.addEventListener('click', () => {
          /* creamos una ventana modal para confirmar la eliminacion del post */
          const modalwindow = document.createElement('section');
          const modalText = document.createElement('p');
          const modalButton = document.createElement('button');
          /* añadimos al DOM con appendchild */
          viewPost2.appendChild(modalwindow);
          modalwindow.appendChild(modalText);
          modalText.innerText = '¿ Estas seguro de eliminar la publicación?';
          modalButton.innerText = 'Eliminar';
          modalwindow.appendChild(modalButton);
          /* añadimos clases */
          modalText.classList.add('confirmation');
          modalButton.classList.add('btnconfirmation');
          modalwindow.classList.add('modals', 'active');
          // eslint-disable-next-line
          console.log(post.id, post.data().descripcion);
          /* Añadimos el evento que nos permite eliminar cada post */
          modalButton.addEventListener('click', () => {
            deletePost(post.id, post.data().descripcion).then(() => {
              showPosts(viewPost2);
              modalwindow.classList.remove('active');
            });
          });
        });
        // commentButton.addEventListener('click', () => {
        //   const inputPost = document.createElement('textarea');
        //   const btnPost = document.createElement('img');
        //   btnPost.src = 'image/aceptarcambios.png';
        //   inputPost.classList.add('editPost');
        //   btnPost.classList.add('buttonpost');
        //   saveComment.appendChild(inputPost);
        //   containerButton.appendChild(btnPost);
        //   // eslint-disable-next-line
        //   console.log('hola', post);
        //   btnPost.addEventListener('click', () => {
        //   // eslint-disable-next-line
        //    console.log(inputPost.value);
        //     // saveComment(post.id, inputPost.value);
        //     btnPost.style.display = 'none';
        //   });
        // });
      });
    });
};
