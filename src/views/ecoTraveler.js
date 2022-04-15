import { savePost, showsPost, editPost } from '../firebase/fbFunction.js';
import { getAuth, onSnapshot, serverTimestamp } from '../Firebase/firebaseImport.js';


const auth = getAuth();

const clickPost = (div) => {
   const userName = auth.currentUser;
   console.log("user name", userName.email);
   const actualDate = serverTimestamp();
   const postValue = div.querySelector('#inputPost').value;
   //   divEcotraveler.innerHTML = '';
   savePost(postValue, userName.email, actualDate).then(()=> {
//   divContainerPost.innerHTML = '';
showsPaintPost();
const cleanPost = document.querySelector('#inputPost');
cleanPost.value= '';
})
}
export const showsPaintPost = () => {
      console.log('Hola entre')
         showsPost()
      .then((res) => res.forEach((e) => { 
         divContainerPost.appendChild(paintPost(e.id, e.data()));
         console.log(e.id, "Esto es eeeeeeeeeeeeeeee");
           divEcotraveler.appendChild(divContainerPost);
      })
      )
   }
const divEcotraveler = document.createElement('div');
const divContainerPost = document.createElement('div');

export default () => { 
  const viewEcotraveler = `
  <div class='containerWall'>
   <div class='gridHeaderWall'>
    <h1 class='tittleAccount' id='tittleWall'>EcoTraveler</h1>
    <img src='img/cerrar-sesion.png' alt='signOut' class='signOut' id='signOutIcon' />
     </div>
        <div class='containerPost' id='formPost'>
       <textarea name='post' id='inputPost' rows= 4 placeholder='Comparte tu experiencia' autofocus></textarea>
       </div>
       <div class='containerIcons'>
     <button class='btnPublic' id='publicBtn'>Publicar</button>
     <div id='publicPost'></div>
     </div>
     </div>`;
     
   
  divEcotraveler.innerHTML = viewEcotraveler;
  
  const btnPost = divEcotraveler.querySelector('#publicBtn');
  // creamos un evento al boton publicar
  btnPost.addEventListener('click', () => clickPost(divEcotraveler));
  return divEcotraveler;
};


export const paintPost = (idPost, post) =>{
   console.log(auth.currentUser, "Esta es la prueba de si uid");
   console.log(post, "Hola soy post user name")
   const divPost = document.createElement('div');
   let historyPost =  `
   <div class='containerWallPost'>
      <div class='containerPost' id='postSpace'>
        <div class='userName'>${post.userName}</div>
         <textarea name='post' id='textAreaPost' readonly="readonly">${post.post}</textarea>
      </div>
      <div class='containerIconsPost'>
        <img src='img/heart (1).png' alt='like' class='icons like' id='likePost' >
        <img src='img/pencil (1).png' alt='editPost' class='icons' id='edit'>
        <img src='img/bin.png' alt='deletePost' class='icons' ></img id='delete'>
      </div>
   </div>
   `;

   divPost.innerHTML = historyPost;
//   pruebaedit.innerHTML= historyPost;
const btnEdit = divPost.querySelector('#edit');
console.log(btnEdit, 'soy el boton edit')
btnEdit.addEventListener('click', () => editFunction(idPost, 'Esta funcionando la funcion de editar   '));

    return divPost; 
}
window.onload = showsPaintPost;


const editFunction = (id, post) => {
   editPost( id, post);
}