import { savePost, showsPost } from '../firebase/fbFunction.js';
import { getAuth, serverTimestamp } from '../Firebase/firebaseImport.js';

const auth = getAuth();

const clickPost = (div) => {
   const userName = auth.currentUser;
   console.log("user name", userName.email);
   const actualDate = serverTimestamp();
   const postValue = div.querySelector('#inputPost').value;
   savePost(postValue, userName.uid, actualDate );

   showsPost()
      .then((res) => res.forEach((e) => divEcotraveler.appendChild(paintPost(e.data().post)) )
      )
   }

const divEcotraveler = document.createElement('div');


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


   


export const paintPost = (post) =>{
    const divPost = document.createElement('div');
   let historyP = '';
   
   let historyPost =  `
   <div class='containerWallPost'>
        <div class='containerPost' id='postSpace'>
       <textarea name='post' id='textAreaPost' >${post}</textarea>
       </div>
       <div class='containerIconsPost'>
    
     </div>
     </div>
   `;

   
   historyP += historyPost
   divPost.innerHTML = historyP;
   /* divEcotraveler.appendChild(divPost); */
   divEcotraveler.appendChild(divPost);

    return divPost; 
}

{/* <img src='img/heart.png' alt='like' class='icons'>
    <img src='img/pencil (1).png' alt='editPost' class='icons'>
    <img src='img/bin.png' alt='deletePost' class='icons'></img> */}
