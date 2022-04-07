export default () => {
  const viewEcotraveler = `
  <div class='containerWall'>
   <div class='gridHeaderWall'>
    <h1 class='tittleAccount' id='tittleWall'>EcoTraveler</h1>
    <img src='img/cerrar-sesion.png' alt='signOut' class='signOut' id='signOutIcon' />
     </div>
        <div class='containerPost'>
       <input type="text" name="post" id="inputPost">
       </div>
       <div class='containerIcons'>
    <img src="img/heart.png" alt="like" class="icons">
    <img src="img/pencil (1).png" alt="editPost" class="icons">
    <img src="img/bin.png" alt="deletePost" class="icons">
     <button class='btnPublic' id='publicBtn'>Publicar</button>
     </div>
     </div>`;

  const divEcotraveler = document.createElement('div');
  divEcotraveler.innerHTML = viewEcotraveler;
  return divEcotraveler;
};
