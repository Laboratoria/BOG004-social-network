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
          <div id='text-container'>
            <textarea type='text' id='post-description' placeholder='Reveal your secrets'></textarea>
          </div>
        </div>
        <button type='button' id='btn-post-save' class='btn-post-inactive'>save</button>  
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

  btnCreate.addEventListener('click', () => {
    document.querySelector('#modal-background').style.display = 'flex';
    document.querySelector('#modal_post-container').style.display = 'block';
    document.body.style.overflow = 'hidden';
  })

  const modalForm = divDaily.querySelector('#modal_post-container');
  const btnSave = divDaily.querySelector('#btn-post-save');

  btnSave.addEventListener('click', (e) => {
    e.preventDefault()
    // console.log('Created');

    // document.querySelector('#post-description').focus();
    const postDescription = divDaily.querySelector('#post-description');
    // console.log(postDescription.value);

    createPost(db, postDescription.value);

    modalForm.reset();

  });

  return divDaily;
};
