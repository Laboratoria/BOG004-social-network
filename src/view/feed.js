import { saveRecipe, onGetRecipes, deleteRecipe, editeRecipe, updateRecipe } from '../lib/firebase-base-de-datos.js';

export default () => {
  let editStatus = false;
  let idRecipe = '';
  const menuMobile = document.getElementById('navMobile');
  menuMobile.style.display = 'none';
  document.querySelector('header').style.display = 'block';
  document.querySelector('#sectionGrid').style.display = 'grid';

  const search = `
  <div class='searchFeed'>
    <form class='formFeed' id="feed-form">
      <input type='search' id='search-feed' class='inputsearch' placeholder='Explorar' required input/>
      <button id="search">Buscar</button>
    </form>
    <div id="task-container"></div>
  </div>`;

  const createRecipeForm = `
    <h2>¡Publica tus mejores recetas!</h2>
    <form class='formtext' id='task-form'>
    <img id='recipeForm' src='../img/banner-recipeForm.jpg' alt='banner-recipeForm'>
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

  let titleRecipe = divFeed.querySelector('#task-title');
  let descriptionRecipe = divFeed.querySelector('#task-description');


  // consultar todas las recetas y crrear cada caja de la receta;
  const data = onGetRecipes((querySnapshot) => {
    let recipesToShow = '';
    querySnapshot.forEach((recipe) => {
      recipesToShow += `
      <div class="box-recipe">
        <h2>${recipe.data().title}</h2>
        <hr>
        <p>${recipe.data().description}</p>
        <div class= 'iconos'>
          <img id='${recipe.id}' class= 'likeRecipe' src='../img/like.png' alt='like_image'><p class='likeText'>Me gusta</p>
          <img id='${recipe.id}' class='deleteRecipe' src='../img/espatula.png' alt='espatula_image'><p class='eliminarText'>Eliminar</p>
          <img id='${recipe.id}' class='editRecipe' href='#/feed'  src='../img/rodillo.png' alt='rodillo_image'><p class='editarText'>Editar</p>
        </div>
      </div>`;
      // <button class='deleteRecipe' id='${recipe.id}'>Eliminar</button>
      // <button class='editRecipe' id='${recipe.id}'>Editar</button>
      const recipesContainer = divFeed.querySelector('#container-recipes');
      recipesContainer.innerHTML = recipesToShow;

      const btnDelete = recipesContainer.querySelectorAll('.deleteRecipe');
      btnDelete.forEach(btn => {
        btn.addEventListener('click', (event) => {
          let confMessage = confirm("¿Estás seguro que quieres eliminar esta receta?");
            //Verificamos si el usuario acepto el mensaje
            if (confMessage) {
              deleteRecipe(event.target.id);
            }
            else {
            }
        });
      });

      const btnEdit = recipesContainer.querySelectorAll('.editRecipe');
      btnEdit.forEach(btn => {
        btn.addEventListener('click', async ({ target }) => {
          const doc = await editeRecipe(target.id);
          const recipe = doc.data();
          titleRecipe.value = recipe.title;
          descriptionRecipe.value = recipe.description;
          editStatus = true;
          divFeed.querySelector('#btn-task-save').innerText = 'Actualizar';
          return idRecipe = target.id;
        });
      });
    });
  });

  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = taskForm['task-title'];
    const description = taskForm['task-description'];
    if (editStatus !== true) {
      saveRecipe(title.value, description.value);
    } else {
      console.log('hola')
      updateRecipe(idRecipe, {
        title: title.value,
        description: description.value
      });
      editStatus = false;
    }
    taskForm.reset();
    divFeed.querySelector('#btn-task-save').innerText = 'Publicar';
  });
  return divFeed;
};
