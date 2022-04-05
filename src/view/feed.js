import { saveRecipe } from '../lib/firebase-base-de-datos.js';

export default () => {
  const menuMobile = document.getElementById('navMobile');
  menuMobile.style.display = 'none';
  document.querySelector('header').style.display = 'block';
  document.querySelector('#sectionGrid').style.display = 'grid';

  // consultar todas las recetas y crear cada caja de la receta;

  const search = `
  <div class='searchFeed'>
    <form class='formFeed' id="feed-form">
      <input type='search' id='search-feed' class='inputsearch' placeholder='Explorar' required input/>
      <button id="btn-task-save">Buscar</button>
    </form>
    <div id="task-container"></div>
  </div>`;

  const createRecipeForm = `
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
      <button  id="btn-task-save">Guardar</button>
    </form>
  `;

  const divFeed = document.createElement('div');
  divFeed.innerHTML = search + createRecipeForm;

  const taskForm = divFeed.querySelector('#task-form');
  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = taskForm['task-title'];
    const description = taskForm['task-description'];
    saveRecipe(title.value, description.value);
    taskForm.reset();
  });

  return divFeed;
};
