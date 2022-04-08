//* EN ESTA PESTAÑA PONDREMOS TODO LO QUE IRA EN EL MURO *//
import { createPost, getPost, readAllPost, currentUser, deletePost, logout, giveMethePost} from '../firebaseController.js'

//función principal para crear template
export default () => {
  const divDaily = document.createElement('div');
  divDaily.setAttribute('class', 'container-div-daily');
  const viewDaily = `
  <header id='banner'>
    <div class="tittle-daily"></div>
  </header>
  <i class='fa-solid fa-arrow-right-from-bracket' id='logout' ></i>
  <main class='main-daily'>
    <div id='modal-background'>
      <form id='modal_post-container' class='modal_post-container'>
        <div id='modal_header'>
          <img id='user_img' src='./img/Icono_Harry.png'>
          <div id='name-container'>Wizard</div>
          <i class='fa-solid fa-xmark' id='close'></i>
        </div>
        <div id='line'>
          <div id='text-container'>
            <textarea type='text' id='post-description' placeholder='Reveal your secrets'></textarea>
          </div>
        </div>
        <button disabled type='submit' id='btn-post-save' class='btn-post-inactive'>Save</button>  
      </form>
    </div>
    <button type='button' id='btn-post-create' class='btn-post-create'>Comment +</button>        
    <div id='post-container' class='post-container'>
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


  const putUp = (currentUserInfo, divDaily) => {
  const formPublication = divDaily.querySelector('#modal_post-container');
  formPublication.addEventListener('submit', (e) => {
    e.preventDefault();
    const formPublicationContent = formPublication['post-description'];
    const postUid = currentUserInfo.uid;
    createPost(formPublicationContent.value, postUid);
    modalPost.reset();    
  });
};

putUp(userInfo, divDaily);


  const postController = (currentUserInfo) => {
    const postContainer = divDaily.querySelector('#post-container');
    const querySnapshot = getPost();
    //función para leer las publicaciones en tiempo real 
    readAllPost((response) => {
      let postTemplate = '';
      response.forEach((doc) => {
        let deleteEditSection;
        console.log('Este es el User ID :', currentUserInfo.uid);
        console.log('Este es el docID: ', doc.data().uidPost)
        if (currentUserInfo.uid === doc.data().uidPost) {
          deleteEditSection = `
            <button class='edit-img' id='edit' data-postid='${doc.id}'>Editar</button>
            <button class='save-img hidenBtn' id='save' data-postid='${doc.id}'>Guardar</button>
            <button class='delete-img' id='delete' data-postid='${doc.id}'>Eliminar</button>          
          `;
        } else {
          deleteEditSection = '';
        }
        // console.log(`${doc.id} => ${doc.data().postDescription}`);
      postTemplate += `
          <div id='div-post-container' class='div-post-container'> 
            <div id='post-container-header' class='post-container-header'>
              <img class='user_img' src='./img/Icono_Harry.png'>
              <div class='name-container'>Wizard</div>
              <div class='btns-post-container'>${deleteEditSection}
              </div>
            </div>
            <textarea type='text' class='textarea-post-container' readonly id='${doc.id}'>${doc.data().postDescription}</textarea>       
          </div>    
          `;          
    });
    postContainer.innerHTML = postTemplate;

    // funcion para eliminar post
    const postDelete = () => {
      const deleteButton = divDaily.querySelectorAll('#delete');
      deleteButton.forEach((btnDelete) => {
        btnDelete.addEventListener('click', ({ target: { dataset } }) => {
          console.log('soy ID para eliminar post :', dataset.postid);
        deletePost(dataset.postid);
        });
      });
    };
    postDelete();
    // FIN funcion para eliminar post
    const postEdit = () => {
      const editPostContent = divDaily.querySelector('.textarea-post-container')
      const btnEdit = divDaily.querySelector('#edit')
      const btnSave = divDaily.querySelector('#save')
      btnEdit.forEach((buttonEdit, index) => {
        buttonEdit.addEventListener('click', (e) => {
          console.log('click')
          const clickBtnEdit = e.target.dataset.postid;
          giveMethePost(clickBtnEdit);
          .then(() => {
            editPostContent.forEach((textArea) => {
              if (textArea.id === clickBtnEdit) {
                textArea.removeAttribute('readonly');
                btnEdit.classList.add('hidenBtn');
                btnSave[index].classList.remove('hidenBtn');
              }
            });
          });
        });
      })

    }
    postEdit();
    });
    readAllPost(querySnapshot);
  };
  postController(userInfo);

  // declaracion modalClose para evento de cierre de modal
  let modalClose = divDaily.querySelector('#close'); 
  modalClose.addEventListener('click',()=>{
    console.log('Close');
    background.style.display= 'none';
    modalPost.style.display= '';
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

  
  
  return divDaily;
};

