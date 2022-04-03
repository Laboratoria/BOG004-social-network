//* EN ESTA PESTAÑA PONDREMOS TODO LO QUE IRA EN EL MURO *//
import { db } from '../firebaseInit.js';
import { createPost, getPost } from '../firebaseController.js';

export default () => {
  const divDaily = document.createElement('div');
  divDaily.setAttribute('class', 'container-div-daily');
  const viewDaily = `
  <header id='banner'>
    <img id='Banner_img' src='./img/title.png'>
  </header>
  <main>
    <div id='modal-background'>
      <form id='modal_post-container' class="post-container">
        <div id='modal_header'>
          <img id='user_img' src='./img/Icono_Harry.png'>
          <div id='name-container'></div>
        </div>
        <div id='line'>
          <div class="modal__close" id="modal__close">
            <i class="fa-solid fa-xmark"></i>
          </div>
          <div id='text-container'>            
            <textarea type='text' id='post-description' placeholder='Reveal your secrets'></textarea>
          </div>
        </div>
        <button disabled type='button' id='btn-post-save' class='btn-post-inactive'>save</button>  
      </form>
    </div>
    <div id='post-container' class="post-container">        
    </div>       
  </main>
  <footer id='create-post'>
    <button type='button' id='btn-post-create'>create +</button> 
  </footer>
  `;
  divDaily.innerHTML = viewDaily;

  const btnCreate = divDaily.querySelector('#btn-post-create');
  let background = divDaily.querySelector('#modal-background');
  let modalPost = divDaily.querySelector('#modal_post-container');
  const postDescription = divDaily.querySelector('#post-description');
  btnCreate.addEventListener('click', () => {
    console.log('Opened');
    background.style.display = 'flex';
    modalPost.style.display = 'block';
    postDescription.focus();
    postDescription.value = '';
    
  })

  const modalForm = divDaily.querySelector('#modal_post-container');
  const btnSave = divDaily.querySelector('#btn-post-save');

  btnSave.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('Saved');
    // document.querySelector('#post-description').focus();
    // const postDescription = divDaily.querySelector('#post-description');
    // console.log(postDescription.value);
    createPost(db, postDescription.value);
    modalForm.reset();
  });


  // declaracion modalClose para evento de cierre de boton en version mobile
  let modalClose = divDaily.querySelector('#modal__close'); 
  modalClose.addEventListener('click',()=>{
    console.log('Close');
    background.style.display= "none";
    modalPost.style.display= "";
  });


  postDescription.addEventListener('keyup', () => { // evento del textarea
    const postContent = postDescription.value.trim();
    // trim() metodo que no permite activar boton con espacio
    if (postContent === '') {
      document.querySelector('#btn-post-save').disabled = true; // boton publicar inactivo
    } else {
      document.querySelector('#btn-post-save').disabled = false; // boton publicar activo
    }
  });

  return divDaily;
};

<<<<<<< HEAD

=======
>>>>>>> 99293722646aaad271fd981dfc8107df2a6c8249
