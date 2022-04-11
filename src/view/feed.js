/* eslint-disable-next-line no-alert */
import {
  saveRecipe,
  onGetRecipes,
  deleteRecipe,
  editeRecipe,
  updateRecipe,
  likeRecipe,
  dislikeRecipe,
} from '../lib/firebase-base-de-datos.js';

import {
  getAuth, onAuthStateChanged,
} from '../lib/firebase-utils.js';

export default () => {
  let editStatus = false;
  let idRecipe = '';
  const menuMobile = document.getElementById('navMobile');
  menuMobile.style.display = 'none';
  document.querySelector('header').style.display = 'block';
  document.querySelector('#sectionGrid').style.display = 'grid';

  const search = `
  <div class='containerSearch'>
    <form class='formFeed' id="feed-form">
      <input type='search' id='search-feed' class='inputsearch' placeholder='Explorar' required input/>
      <button id="search">Buscar</button>
    </form>
    <div id="task-container"></div>
  </div>`;

  const createRecipeForm = `
    <h2>¡Publica tus mejores recetas!</h2>
    <form class='formtext' id='task-form'>
    <img id='bannerPostImg' src='https://raw.githubusercontent.com/MafeValenciaCastillo/BOG004-social-network/main/src/img/banner-recipeForm.jpg' alt='banner-recipeForm'>
      <div>
        <label for='title'>Título:</label>
        </br>
        <input type='text' id='task-title'>
      </div>
      <div>
        <label for='description'>Descripción:</label>
        </br>
        <textarea id='task-description' rows="3" placeholder="Escribe tu receta"></textarea>
      </div>
      <button id="btn-task-save">Publicar</button>
    </form>
  `;

  const divFeed = document.createElement('div');
  divFeed.setAttribute('id', 'containerRecipe');
  divFeed.innerHTML = `${search} ${createRecipeForm}<div id="container-recipes"></div>`;

  const taskForm = divFeed.querySelector('#task-form');

  onGetRecipes((querySnapshot) => {
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const uid = user.uid;
        let recipesToShow = '';
        querySnapshot.forEach((recipe) => {
          recipesToShow += `
                <div class="box-recipe">
                  <h2>${recipe.data().title}</h2>
                  <hr>
                  <p class='text-justify'>${recipe.data().description}</p>
                  
                  <div class= 'containerIcons'>
                    <div class="containerIcon">
                      <img id='${recipe.id}' class= 'icon-recipe likeRecipe' src='https://raw.githubusercontent.com/MafeValenciaCastillo/BOG004-social-network/main/src/img/like.png'  alt='like_image'>
                      <p class='likeText'>${recipe.data().likes.length} Me gusta</p>  
                    </div>
                    <div class="containerIcon">
                      <img id='${recipe.id}' class='icon-recipe deleteRecipe' src='https://raw.githubusercontent.com/MafeValenciaCastillo/BOG004-social-network/main/src/img/espatula.png' alt='espatula_image'>
                      <p class='eliminarText'>Eliminar</p>
                    </div>
                    <div class="containerIcon">
                      <img id='${recipe.id}' class='icon-recipe editRecipe' src='https://raw.githubusercontent.com/MafeValenciaCastillo/BOG004-social-network/main/src/img/rodillo.png' alt='rodillo_image'><p class='editarText'>Editar</p>
                    </div>
                  </div>
                </div>`;
          const recipesContainer = divFeed.querySelector('#container-recipes');
          recipesContainer.innerHTML = recipesToShow;

          const titleRecipe = divFeed.querySelector('#task-title');
          const descriptionRecipe = divFeed.querySelector('#task-description');

          const btnLike = document.querySelectorAll('.likeRecipe');
          btnLike.forEach((btn) => {
            btn.addEventListener('click', async ({ target }) => {
              const recipeToLike = await editeRecipe(target.id);
              const likeUser = recipeToLike.data().likes;
              if (likeUser.includes(uid)) {
                dislikeRecipe(uid, target.id);
              } else {
                likeRecipe(`${uid}`, `${target.id}`);
              }
            });
          });

          const btnDelete = recipesContainer.querySelectorAll('.deleteRecipe');
          btnDelete.forEach((btn) => {
            btn.addEventListener('click', (event) => {
              // eslint-disable-next-line no-restricted-globals
              const confMessage = confirm('¿Estás seguro que quieres eliminar esta receta?');
              // Verificamos si el usuario acepto el mensaje
              if (confMessage) {
                deleteRecipe(event.target.id);
              }
            });
          });

          const btnEdit = recipesContainer.querySelectorAll('.editRecipe');
          btnEdit.forEach((btn) => {
            btn.addEventListener('click', async ({ target }) => {
              const doc = await editeRecipe(target.id);
              const recipeData = doc.data();
              titleRecipe.value = recipeData.title;
              descriptionRecipe.value = recipeData.description;
              editStatus = true;
              divFeed.querySelector('#btn-task-save').innerText = 'Actualizar';
              idRecipe = target.id;
              window.scrollTo(0, 0);
            });
          });
        });
      }
    });
  });

  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = taskForm['task-title'];
    const description = taskForm['task-description'];
    if (editStatus !== true) {
      saveRecipe(title.value, description.value);
    } else {
      updateRecipe(idRecipe, {
        title: title.value,
        description: description.value,
      });
      editStatus = false;
    }
    taskForm.reset();
    divFeed.querySelector('#btn-task-save').innerText = 'Publicar';
  });
  return divFeed;
};
