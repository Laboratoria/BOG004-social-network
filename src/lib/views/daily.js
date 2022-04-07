//* EN ESTA PESTAÑA PONDREMOS TODO LO QUE IRA EN EL MURO *//
import { createPost, getPost, readAllPost, currentUser, logout} from '../firebaseController.js'

//función principal para crear template
export default () => {
  const divDaily = document.createElement('div');
  divDaily.setAttribute('class', 'container-div-daily');
  const viewDaily = `
  <header id='banner'>
    <img id='Banner_img' src='./img/title.png'>
    <i class='fa-solid fa-arrow-right-from-bracket' id='logout' ></i> 
  </header>
  <main>
    <button type='button' id='btn-post-create'>create +</button> 
    <div id='modal-background'>
      <form id='modal_post-container' class="post-container">
        <div id='modal_header'>
          <img id='user_img' src='./img/Icono_Harry.png'>
          <div id='name-container'>Wizard</div>
          <i class="fa-solid fa-xmark" id="close"></i>
        </div>
        <div id='line'>
          <div id='text-container'>
            <textarea type='text' id='post-description' placeholder='Reveal your secrets'></textarea>
          </div>
        </div>
        <button disabled type='submit' id='btn-post-save' class='btn-post-inactive'>Save</button>  
      </form>
    </div>
    <div id='post-container' class="post-container">        
    </div>       
  </main>
  <footer id='create-post'>
    
  </footer>
  `;
  divDaily.innerHTML = viewDaily;

  const userInfo = currentUser();

  const btnCreate = divDaily.querySelector('#btn-post-create');
  let background = divDaily.querySelector('#modal-background');
  let modalPost = divDaily.querySelector('#modal_post-container');
  const postDescription = divDaily.querySelector('#post-description'); //revisar

  btnCreate.addEventListener('click', () => {
    console.log('Opened');
    background.style.display = 'flex';
    modalPost.style.display = 'block';
    postDescription.focus();
    postDescription.value = '';
    
  })

  const formPublication = divDaily.querySelector('#modal_post-container');

  formPublication.addEventListener('submit', (e) => {
    e.preventDefault();
    const formPublicationContent = formPublication['post-description'];
    createPost(formPublicationContent.value);
    modalPost.reset();    
  });

  const postController = (currentUserInfo) => {
    const postContainer = divDaily.querySelector('#post-container');
    const querySnapshot = getPost();
    //función para leer las publicaciones en tiempo real 
    readAllPost((response) => {
      let postTemplate = '';
      response.forEach((doc) => {
        // console.log(`${doc.id} => ${doc.data().postDescription}`);
      postTemplate += `
          <div id='post-container' class="post-container"> 
            <div id='post-container-header' class='post-container-header'>
              <img id='user_img' src='./img/Icono_Harry.png'>
              <div id='name-container'>Wizard</div>
              <div class='btn-post-container'></div>
            </div>  
            <p>${doc.data().postDescription}</p>       
          </div>    
          `;          
    });
    postContainer.innerHTML = postTemplate;
    });
    readAllPost(querySnapshot);
  };
  postController(userInfo);

  // declaracion modalClose para evento de cierre de modal
  let modalClose = divDaily.querySelector('#close'); 
  modalClose.addEventListener('click',()=>{
    console.log('Close');
    background.style.display= "none";
    modalPost.style.display= "";
  });

  // Función para no publicar espacios en blanco
  const btnSave = divDaily.querySelector('#btn-post-save')
  postDescription.addEventListener('keyup', () => { // evento del textarea
    const postContent = postDescription.value.trim();
    // trim() metodo que no permite activar boton con espacio
    if (postContent === '') {
      btnSave.disabled = true; // boton publicar inactivo
    } else {
      btnSave.disabled = false; // boton publicar activo
    }
  });

  // Evento click a boton de cerrar sesión
  const btnLogout = divDaily.querySelector('#logout');
  btnLogout.addEventListener('click', (e) => {
    e.preventDefault();
    logout()
      .then(() => {
        window.location.hash = '#/login';
      })
    });

  // btnSave.addEventListener('click', (e) => {
  //   e.preventDefault()
  //   console.log('Saved');
  //   createPost(postDescription.value);
  //   modalPost.reset();
  // });
  
  return divDaily;
};

