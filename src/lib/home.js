export default () => {
const home = `
<form id="task-form">
<label for="title">Title:</label>
<input type="text" placeholder="Task-title" id="task-title">
<label for="description">Description</label>
<textarea id="task-description" rows="3" placeholder="Task description"></textarea>
<button id="btn_task_save">Save</button>
</form>`

const taskContainer = document.createElement('div');
taskContainer.innerHTML = home;

return taskContainer;
}