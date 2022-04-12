import {
  createPost,
  getPost,
  readAllPost,
  currentUser,
  deletePost,
  logout,
  giveMethePost,
  updatePost,
  likes,
  dislikes,
} from '../firebaseController.js';

// Template vista Daily
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
          <div id='post-container' class='post-container'></div>       
        </main>
        <footer id='create-post'>          
        </footer>
      `;
  divDaily.innerHTML = viewDaily;
  const userInfo = currentUser();
  const btnCreate = divDaily.querySelector('#btn-post-create');
  const background = divDaily.querySelector('#modal-background');
  const modalPost = divDaily.querySelector('#modal_post-container');
  const postDescription = divDaily.querySelector('#post-description');

  // Evento Boton crear
  btnCreate.addEventListener('click', () => {
    background.style.display = 'flex';
    modalPost.style.display = 'block';
    postDescription.focus();
    postDescription.value = '';
  });

  // Crear Post
  const putUp = (currentUserInfo) => {
    const postForm = divDaily.querySelector('#modal_post-container');
    postForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const postFormContent = postForm['post-description'];
      const postUid = currentUserInfo.uid;
      const likeIds = []; // Array vacio para likes
      createPost(postFormContent.value, postUid, likeIds);
      modalPost.reset();
    });
  };
  putUp(userInfo);

  // Controlador de Post (Read, Update, Delete)
  const postController = (currentUserInfo) => {
    const postContainer = divDaily.querySelector('#post-container');
    const querySnapshot = getPost();
    // función para leer las publicaciones en tiempo real
    readAllPost((response) => {
      let postTemplate = '';
      response.forEach((doc) => {
        const post = doc.data();
        let deleteEditSection;
        const userIdLogin = currentUserInfo.uid;
        if (userIdLogin === post.uidPost) {
          deleteEditSection = `
          <button class='edit-img' id='edit' data-postid='${doc.id}'></button>
          <button class='save-img hidenBtn'  id='save'  data-postid='${doc.id}'></button>
          <button class='delete-img' id='delete' data-postid='${doc.id}'></button>          
        `;
        } else {
          deleteEditSection = '';
        }
        const likeIcon = post.arraylike.includes(currentUserInfo.uid);
        postTemplate += `
        <div id='div-post-container' class='div-post-container'> 
          <div id='post-container-header' class='post-container-header'>
            <img class='user_img' src='./img/Icono_Harry.png'>
            <div class='name-container'>Wizard</div>
            <div class='btns-post-container'>${deleteEditSection}
            </div>
          </div>
          <textarea type='text' class='post-content inp-post-modal-post' readonly id='${doc.id}'>${doc.data().postDescription}</textarea>  
          <div class='counter-likebtn'>
            <button class='like' id='${doc.id}'><i class="${likeIcon}" id='${doc.id}></i></button>
            <div>
            <p class='like-lenght'>${post.arraylike.length}</p>
            </div>
          </div>
        </div>    
      `;
      });
      postContainer.innerHTML = postTemplate;

      // Eliminar post
      const postDelete = () => {
        const deleteButton = divDaily.querySelectorAll('#delete');
        deleteButton.forEach((btnDelete) => {
          btnDelete.addEventListener('click', ({ target: { dataset } }) => {
            deletePost(dataset.postid);
          });
        });
      };
      postDelete();

      // Editar Post
      const editPost = () => {
        const editPostDescrip = divDaily.querySelectorAll('.post-content');
        const editBtn = divDaily.querySelectorAll('#edit');
        const saveBtn = divDaily.querySelectorAll('#save');
        editBtn.forEach((btnEdit, index) => {
          btnEdit.addEventListener('click', (e) => {
            const clickBtnEdit = e.target.dataset.postid;
            giveMethePost(clickBtnEdit)
              .then(() => {
                editPostDescrip.forEach((textArea) => {
                  if (textArea.id === clickBtnEdit) {
                    textArea.removeAttribute('readonly');
                    btnEdit.classList.add('hidenBtn');
                    saveBtn[index].classList.remove('hidenBtn');
                  }
                });
              });
          });
        });
        saveBtn.forEach((btnSave, index) => {
          btnSave.addEventListener('click', (e) => {
            const clickBtn = e.target.dataset.postid;
            giveMethePost(clickBtn)
              .then(() => {
                editPostDescrip.forEach((textArea) => {
                  if (textArea.id === clickBtn) {
                    textArea.setAttribute('readonly', true);
                    btnSave.classList.add('hidenBtn');
                    editBtn[index].classList.remove('hidenBtn');
                    const postDescription = textArea.value;
                    updatePost(textArea.id, { postDescription });
                  }
                });
              });
          });
        });
      };
      editPost();

      // Dar like
      const giveMetheLike = () => {
        const userInfoId = currentUserInfo.uid;
        const btnLikes = divDaily.querySelectorAll('.like');
        btnLikes.forEach((like) => {
          like.addEventListener('click', () => {
            const liked = like.id;
            giveMethePost(liked)
              .then((docLike) => {
                const justOnePost = docLike.data();
                const likeIds = justOnePost.arraylike;
                if (likeIds.includes(userInfoId)) {
                  dislikes(liked, userInfoId);
                } else {
                  likes(liked, userInfoId);
                }
              });
          });
        });
      };
      giveMetheLike();
      // FIN funcion para dar like al post
    });
    readAllPost(querySnapshot);
  };
  postController(userInfo);

  // declaracion modalClose para evento de cierre de modal
  const modalClose = divDaily.querySelector('#close');
  modalClose.addEventListener('click', () => {
    background.style.display = 'none';
    modalPost.style.display = '';
  });

  // Función para no publicar espacios en blanco
  const btnSave = divDaily.querySelector('#btn-post-save');
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
      });
  });

  return divDaily;
};
