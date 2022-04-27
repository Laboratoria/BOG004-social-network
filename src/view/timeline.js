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
  const userId=JSON.parse(localStorage.getItem("userInfo")).uid
  const divElement = document.createElement("div");
  divElement.innerHTML = viewTimeLine;
  divElement.className="container-timeline"

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
   <div class='container-post' >
  <textarea  class='task-title' readonly="readonly"> ${task.title}</textarea>
  <textarea id="description-post" readonly="readonly">${task.description}</textarea>
    <button class="btn-like-off" > 
    <img class='img-like' data-id="${doc.id}" src=${task.likes.includes(userId) ? "../img/like.png" : "../img/dislike.png"
    } "../img/dislike.png"> 
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
    const btnsLikeOff= tasksContainer.querySelectorAll(".btn-like-off");
    

//evento like 

     btnsLikeOff.forEach((btnOne, i) => {
      btnOne.addEventListener("click", ({ target: { dataset } }) => {
        console.log(btnOne)
    
      console.log(userId)
      const idPost=(dataset.id);
      getTask(idPost).then((response) => {
        const postClick = response.data() 

        if (postClick.likes.length == 0) {
          updateTask(idPost, {likes: [userId]
                    })

        } else {
          let likesExistentes = postClick.likes
          if (likesExistentes.includes(userId)) { /*Si entre este if es por que el usuario ya puese me gusta*/ 
           console.log("ya puso me gusta")
            likesExistentes.splice(likesExistentes.indexOf(userId),1)
            updateTask(idPost, {likes: likesExistentes})
            console.log(btnOne)
            btnOne.querySelector("img").setAttribute("src", "../img/like.png")
          }else{
            console.log("No he puesto like")
            likesExistentes.push(userId)
            updateTask(idPost, {likes: likesExistentes
                    })
          }
        }
          console.log(response.data())
      })
    /* btnsLikeOn[i].style.display = "block"
    btnsLikeOff[i].style.display ="none" */
      });
    });


    /* 1. Guardar el ID del usuario 
    2. Recuperar el ID del usuario 
    3. Guardar el ID del post 
    0
    4. Crear una condicion que valide si este usuario ya dio click en el post 
    5. Sí: no puede darle nuevamente click
    No: Su click suma +1 al  contador de ese post
    6.  */

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
          /*console.log('doc resolve: ', resolve)*/
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
      saveTask(title.value, description.value,[]);
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
