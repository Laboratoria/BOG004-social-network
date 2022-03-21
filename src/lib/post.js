import { savePost, auth } from './firebase.js';


export default () => {
  const postWall = `
  <form id="task-form">
  <label for="title">Title:</label>
  <input type="text" placeholder="Task-title" id="task-title">
  <label for="description">Description</label>
  <textarea id="task-description" rows="3" placeholder="Task description"></textarea>
  <button id="btn_task_save">Save</button>
  </form>
  <button id="signOut">signOut</button>`
  ;

  const taskContainer = document.createElement("div");
  taskContainer.innerHTML = postWall;
  const taskForm = taskContainer.querySelector("#task-form");
  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.getElementById("task-title");
    const description = document.getElementById("task-description");
    savePost(title.value, description.value);
    taskForm.reset();
  });

  return taskContainer;

};

