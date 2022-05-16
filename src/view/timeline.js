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
  <button id="getOut" class="btn-getOut">
  <img  class="img-getOut" src= "../img/salida.png">
  </button>
  <img  class="img-timeline" src= "../img/mamapies.png"> 
    <h2 class= 'title-timeline'>¡Escribe tu duda!</h2>    
    <form id= "task-form">
    <input type= "text" placeholder = "¿Cuál es tu pregunta?" class= 'task-title' id="task-title">
    <textarea class= 'task-description' id="task-description" rows="5" placeholder= "Cuentanos un poco más sobre la situación en la que te encuentras"></textarea>
    <button id="btn-task-save">Save</button> 
  </form>
  <div id="tasks-container"></div>
<!--<ul> 
<li class="menu-two">
      <a class="menu-three" href="#/profile">Profile</a>
    </li>
</ul>-->
    `;
  const userId = JSON.parse(localStorage.getItem("userInfo")).uid;
  const divElement = document.createElement("div");
  divElement.innerHTML = viewTimeLine;
  divElement.className = "container-timeline";

  //Creación del botón "Cerrar Sesión"//
  const getOut = divElement.querySelector("#getOut");
  getOut.addEventListener("click", (event) => {
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
   <div class='container-post' >
  <textarea  class='task-title' readonly="readonly"> ${task.title}</textarea>
  <textarea id="description-post" readonly="readonly">${
    task.description
  }</textarea>
    <button class="btn-like-off" > 
    <img class='img-like' data-id="${doc.id}" src=${
        task.likes.includes(userId) ? "../img/like.png" : "../img/dislike.png"
      } > 
    </button>
    <span>${task.likes.length}</span>
   <button class='btn-edit' >
   <img  class="img-edit" data-id="${doc.id}" src= "../img/editar.png">
   </button>
    <button class="btn-delete" >
    <img  class="img-delete" data-id="${doc.id}" src= "../img/eliminar.png">
    </button>
   </div>
  `;
    });
    tasksContainer.innerHTML = commentList;

    const btnsDelete = tasksContainer.querySelectorAll(".btn-delete");
    const btnsLikeOff = tasksContainer.querySelectorAll(".btn-like-off");

    //Creacion del evento "Like"

    btnsLikeOff.forEach((btnOne, i) => {
      btnOne.addEventListener("click", ({ target: { dataset } }) => {
        const idPost = dataset.id;
        getTask(idPost).then((response) => {
          const postClick = response.data();
            let likesExistentes = postClick.likes;
            if (likesExistentes.includes(userId)) {
              /*Si entra este if es por que el usuario ya puede dar me gusta*/
              likesExistentes.splice(likesExistentes.indexOf(userId), 1);
              updateTask(idPost, { likes: likesExistentes });
            } else {
              likesExistentes.push(userId);
              updateTask(idPost, { likes: likesExistentes });
            }
        });
      });
    });
    //Creacion de la opcion borrar post 
    btnsDelete.forEach((btn) => {
      btn.addEventListener("click", ({ target: { dataset } }) => {
        deleteTask(dataset.id);
      });
    });

    //Creacion de la opción eliminar post 
    const btnsEdit = tasksContainer.querySelectorAll(".btn-edit");
    btnsEdit.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        getTask(e.target.dataset.id).then((resolve) => {
          const task = resolve.data();
          taskForm["task-title"].value = task.title;
          taskForm["task-description"].value = task.description;
          editStatus = true;
          id = e.target.dataset.id;
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
    if (!editStatus) {
      saveTask(title.value, description.value, []);
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
