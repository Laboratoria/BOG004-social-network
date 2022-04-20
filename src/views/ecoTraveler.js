import {
  onSnapshotFunction,
  savePost,
  showsPost,
  editPost,
  deletePost,
  like,
  signOut,
} from '../firebase/fbFunction.js';
import {
  getAuth,
  onSnapshot,
  serverTimestamp,
} from '../firebase/firebaseImport.js';

const auth = getAuth();

const callOnSnapShot = () => {
  const queryCollection = onSnapshotFunction();
  onSnapshot(queryCollection, (querySnapshot) => {
    const collectionPost = [];
    querySnapshot.forEach((doc) => {
      collectionPost.push(doc.data());
      showsPaintPost();
    });
  });
};
setTimeout(() => {
  callOnSnapShot();
}, 100);

const clickPost = (div) => {
  const userName = auth.currentUser;
  const actualDate = serverTimestamp();
  const postValue = div.querySelector('#inputPost').value;
  savePost(postValue, userName.email, actualDate).then(() => {
    showsPaintPost();
    const cleanPost = document.querySelector('#inputPost');
    cleanPost.value = '';
  });
};
export const showsPaintPost = () => {
  showsPost().then((res) => {
    divContainerPost.innerHTML = '';
    res.forEach((e) => {
      divContainerPost.appendChild(paintPost(e.id, e.data()));
      divEcotraveler.appendChild(divContainerPost);
    });
  });
};
const divEcotraveler = document.createElement('div');
divEcotraveler.setAttribute('class', 'gridDivEcotraveler');
const divContainerPost = document.createElement('div');
divContainerPost.setAttribute('class', 'gridDivContainerPost');
export default () => {
  const viewEcotraveler = `
  <div class='containerWall'>
   <div class='gridHeaderWall'>
    <h1 class='tittleAccount' id='tittleWall'>EcoTraveler</h1>
    <img src='img/cerrar-sesion.png' alt='signOut' class='signOut' id='signOutIcon'/>
     </div>
        <div class='containerPost' id='formPost'>
       <textarea name='post' id='inputPost' rows= 4 placeholder='Comparte tu experiencia' autofocus></textarea>
       </div>
         <p class='alertMessage' id='errorMessageValidation'></p>
       <div class='containerIcons'>
     <button class='btnPublic' id='publicBtn'>Publicar</button>
     <div id='publicPost'></div>
     </div>
     </div>`;

  divEcotraveler.innerHTML = viewEcotraveler;

  const btnPost = divEcotraveler.querySelector('#publicBtn');
  // creamos un evento al boton publicar
  btnPost.addEventListener('click', () => {
    const validationInputPost = divEcotraveler.querySelector('#inputPost').value;
    const errorMessageValidation = divEcotraveler.querySelector('#errorMessageValidation');
    if (validationInputPost !== '') {
      clickPost(divEcotraveler);
    } else {
      errorMessageValidation.innerHTML = 'Por favor ingresa un valor en el campo';
    }
  });
  const btnSignOut = divEcotraveler.querySelector('#signOutIcon');
  btnSignOut.addEventListener('click', () => signOut(auth));
  return divEcotraveler;
};

const editFunction = (id, post) => editPost(id, post);

const deleteFunction = (id, posts) => deletePost(id, posts);

const likeFunction = (idPost, idUser, isLike) => like(idPost, idUser, isLike);

export const paintPost = (idPost, post) => {
  const divPost = document.createElement('div');
  const historyPost = `
   <div class='containerWallPost'>
      <div class='containerPost' id='postSpace'>
        <div class='userName'>${post.userName}</div>
         <textarea name='post' id='textAreaPost' readonly="readonly">${post.post}</textarea>
      </div>
      <div class='modalContainer' id='containerModal'>
      <div class='modal' id='modal'>
      <textarea name='post' id='editPost' rows= 4 placeholder='Comparte tu experiencia' autofocus>${post.post}</textarea>
       <button class='btnEditPost' id='publicBtnEditPost'>Editar</button>
      </div>
     </div>
      <div class='containerIconsPost'>
        <img src='img/heart (1).png' alt='like' class='icons' like' id='likePost'>
        <p class='icons' id='counter'>${post.like.length}</p>
        <img src='img/pencil (1).png' alt='editPost' class='icons' id='edit'>
        <img src='img/bin.png' alt='deletePost' class='icons' id='delete'>
      </div>

   </div>
   `;

  divPost.innerHTML = historyPost;
  //   pruebaedit.innerHTML= historyPost;
  const btnEdit = divPost.querySelector('#edit');
  const postEd = divPost.querySelector('#textAreaPost');
  const modal = divPost.querySelector('#containerModal');
  const edit = divPost.querySelector('#publicBtnEditPost');
  btnEdit.addEventListener('click', () => {
    postEd.classList.add('hide');
    modal.classList.add('show');
  });
  edit.addEventListener('click', () => {
    modal.classList.remove('show');
    const postEdited = divPost.querySelector('#editPost').value;
    editFunction(idPost, postEdited);
    postEd.value = postEdited;
    postEd.classList.remove('hide');
  });
  const btnDelete = divPost.querySelector('#delete');
  btnDelete.addEventListener('click', () => {
    if (window.confirm('¿Estás seguro de eliminar el post?')) {
      deleteFunction(idPost, post);
    }
  });
  const btnLike = divPost.querySelector('#likePost');
  btnLike.addEventListener('click', () => {
    showsPost().then((res) => res.forEach((e) => {
      if (e.id === idPost) {
        if (e.data().like.includes(auth.currentUser.uid)) {
          likeFunction(idPost, auth.currentUser.uid, true);
        } else {
          likeFunction(idPost, auth.currentUser.uid, false);
        }
      }
    }));
  });
  return divPost;
};
window.onload = showsPaintPost;
