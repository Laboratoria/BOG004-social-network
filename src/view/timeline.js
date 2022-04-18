//import { async } from "regenerator-runtime";
import { saveTask, onGetTasks, deleteTask,getTask,updateTask } from "../view-controler/firebase.js";
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

  let editStatus = false;

  let id='';

  onGetTasks((querySnapshot) => {
    let commentList = "";
    querySnapshot.forEach((doc) => {
      const task = doc.data();
      commentList += `     
   <div style="color:white">
   <h3>${task.title}</h3>
   <p>${task.description}</p>
   <button class='btn-edit' data-id="${doc.id}">Editar</button>
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
     
    const btnsEdit = tasksContainer.querySelectorAll('.btn-edit')   
     btnsEdit.forEach(btn => {
       /*btn.addEventListener('click', async (e) => {
        const doc = await getTask (e.target.dataset.id)
        console.log('doc await: ', doc)
       })*/

      btn.addEventListener('click', (e) => {
        getTask (e.target.dataset.id)
        .then((resolve)=>{
        const task =(resolve.data ());
        taskForm['task-title'].value = task.title
        taskForm['task-description'].value = task.description
        editStatus=true;
        id= e.target.dataset.id;
        taskForm['btn-task-save'].innerText='update'
          /*console.log('doc resolve: ', resolve)*/
          
        })
        
       })
     })
     
     
  });

  
  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = taskForm["task-title"];
    const description = taskForm["task-description"];
    if (!editStatus){
       saveTask(title.value, description.value);
    } else {
    updateTask( id, {
      title: title.value,
      description: description.value,
    });

    editStatus=false;

    }
 
    taskForm.reset();
  });
  return divElement;
};
