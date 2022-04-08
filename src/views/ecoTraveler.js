import { savePost } from '../firebase/fbFunction.js';
const clickPost = (div) => {
   const postValue = div.querySelector('#inputPost').value;
   savePost(postValue);
}
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
    <img src='img/heart.png' alt='like' class='icons'>
    <img src='img/pencil (1).png' alt='editPost' class='icons'>
    <img src='img/bin.png' alt='deletePost' class='icons'>
     <button class='btnPublic' id='publicBtn'>Publicar</button>
     </div>
     </div>`;
     
    
  const divEcotraveler = document.createElement('div');
  divEcotraveler.innerHTML = viewEcotraveler;
  const btnPost = divEcotraveler.querySelector('#publicBtn');
  // creamos un evento al boton publicar
  btnPost.addEventListener('click', () => clickPost(divEcotraveler));
  return divEcotraveler;
};


