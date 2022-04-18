import { saveTask, onGetTasks, deleteTask } from "../view-controler/firebase.js";
//import {changeView} from '../view-controler/router.js';

export default () => {
  const viewTimeLine = `
    <h2 class= 'title-timeline'>¡Welcome to your timeline!</h2>
     
    <form id= "task-form">
    
    <label for= "title">Title: </label> 
    <input type= "text" placeholder = "Task Title" id="task-title">

    <label for= "description"> Description: </label>
    <textarea id="task-description" rows="3" placeholder= "Task Description"></textarea>
       
    <button id="btn-task-save">Save</button> 
   
  </form>
  
  <div id="tasks-container"></div>

<ul> 
<li class="menu-two">
      <a class="menu-three" href="#/profile">Profile</a>
    </li>
</ul>

    `;

  const divElement = document.createElement("div");
  divElement.innerHTML = viewTimeLine;

  const taskForm = divElement.querySelector("#task-form");
  const tasksContainer = divElement.querySelector("#tasks-container");

  onGetTasks((querySnapshot) => {
    let commentList = "";
    querySnapshot.forEach((doc) => {
      const task = doc.data();
      commentList += `     
   <div style="color:white">
   <h3>${task.title}</h3>
   <p>${task.description}</p>
   <button class='btn-edit'>Editar</button>
    <button class='btn-delete' data-id="${doc.id}">Eliminar</button>
   </div>
  `;
    });
    tasksContainer.innerHTML = commentList;

     const btnsDelete = tasksContainer.querySelectorAll('.btn-delete')   
     
     btnsDelete.forEach(btn => {
       btn.addEventListener('click', ({target: {dataset }}) => {
         deleteTask(dataset.id)
       })
     })
     
     
  });

  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = taskForm["task-title"];
    const description = taskForm["task-description"];
    saveTask(title.value, description.value);
    taskForm.reset();
  });
  return divElement;
};
