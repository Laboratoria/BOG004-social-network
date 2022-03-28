import { savePost, viewpost /* userActive */ } from '../Configfirebase/firestore.js';

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
        <button  type='submit' id='btnpost'>Publicar</button>
     </form> 
     </section>
     <section class='viewpost'>

     </section>
     `;
  // aqui tu codigo
  divElement.classList.add('view4');
  divElement.innerHTML = template;

  const formPost = divElement.querySelector('#formpost');
  const description = divElement.querySelector('#post');
  const name = divElement.querySelector('#nameuser');
  const btnpost2 = divElement.querySelector('#btnpost');
  const viewpost2 = divElement.querySelector('.viewpost');
  const likes = divElement.querySelector('.like');
  const countingLike = divElement.querySelector('#counting');

  showPosts(viewpost2);
  btnpost2.addEventListener('click', () => {
    showPosts(viewpost2);
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

  /*let click = 0;
  likes.addEventListener('click', () => {
    countingLike.innerHTML = ++click;
  });*/

  return divElement;
};

const showPosts = (viewpost2) => {
  viewpost()
    .then((data) => {
      console.log(data);
      viewpost2.innerHTML = '';
      data.forEach((post) => {
        let count = 0;
        const contenedorPost = document.createElement('div');
        const descripcion = document.createElement('p');
        const likeButton = document.createElement('img');
        const likecounting = document.createElement('p');
        likeButton.src = 'image/likesimg.png'; 
        descripcion.innerText = post;
        contenedorPost.appendChild(descripcion);
        viewpost2.appendChild(likeButton);
        viewpost2.appendChild(likecounting);
        viewpost2.appendChild(contenedorPost);
        likeButton.addEventListener('click', ()=>{
          likecounting.innerHTML = ++count;
        })
      });
    });
};
