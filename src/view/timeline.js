//import { async } from "regenerator-runtime";
import {
  saveTask,
  onGetTasks,
  deleteTask,
  getTask,
  updateTask,
} from "../view-controler/firebase.js";
import { changeView } from "../view-controler/router.js";

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

<button id="getOut" class="getOut">Cerrar Sesión</button>

<ul> 
<li class="menu-two">
      <a class="menu-three" href="#/profile">Profile</a>
    </li>
</ul>

    `;

  const divElement = document.createElement("div");
  divElement.innerHTML = viewTimeLine;

  //Creación del botón "Cerrar Sesión"//
  const getOut = divElement.querySelector("#getOut");
  getOut.addEventListener("click", (event) => {
    console.log(getOut);
    event.preventDefault();
    changeView("#/");
  });

  const taskForm = divElement.querySelector("#task-form");
  const tasksContainer = divElement.querySelector("#tasks-container");

  let editStatus = false;

  let id = "";


  //creación de post y botones de post 

  onGetTasks((querySnapshot) => {
    let commentList = "";
    querySnapshot.forEach((doc) => {
      const task = doc.data();
      commentList += `     
   <div style="color:white">
   <h3>${task.title}</h3>
   <p>${task.description}</p>
    <button class='btn-like-off' data-id="btn-like-off'">Like-off</button>
    <button class='btn-like-on' data-id="btn-like-on'">Like-on</button>
    <span>${task.likes}</span>
   <button class='btn-edit' data-id="${doc.id}">Edit</button>
    <button class='btn-delete' data-id="${doc.id}">Delete</button>
   </div>
  `;
    });
    tasksContainer.innerHTML = commentList;

    const btnsDelete = tasksContainer.querySelectorAll(".btn-delete");
    const btnsLikeOff= tasksContainer.querySelectorAll(".btn-like-off");

//evento like 

     btnsLikeOff.forEach((btn) => {
      btn.addEventListener("click", ({ target: { dataset } }) => {
      const userId=JSON.parse(localStorage.getItem("userInfo")).uid
      console.log(userId)
      const idPost=dataset.id;
      getTask(idPost).then((response) => {
      console.log(response.data())
      })
      });
    });

    //evento de borar
    btnsDelete.forEach((btn) => {
      btn.addEventListener("click", ({ target: { dataset } }) => {
        deleteTask(dataset.id);
      });
    });

    //evento de editar
    const btnsEdit = tasksContainer.querySelectorAll(".btn-edit");

    btnsEdit.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        getTask(e.target.dataset.id).then((resolve) => {
          const task = resolve.data();
          taskForm["task-title"].value = task.title;
          taskForm["task-description"].value = task.description;
          editStatus = true;
          id =
            e.target.dataset
              .id; 

          taskForm["btn-task-save"].innerText = "update";
        });
      });
    });
  });

  //evento de guardar un post y guarda un post editado.
  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = taskForm["task-title"];
    const description = taskForm["task-description"];
//
    if (!editStatus) {
      saveTask(title.value, description.value,0);
    } else {
      updateTask(id, {
        description: description.value,
        title: title.value,
        
      });

      editStatus = false;
    }

    taskForm.reset();
  });
  return divElement;
};
