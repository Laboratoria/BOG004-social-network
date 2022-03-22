import { saveTask, userSignOut } from './firebase.js';
import { changeView } from './viewController.js';

export default () => {
    const post = `
<form id="task-form">
<label for="title">Paula</label>

<textarea id="task-description" rows="3" placeholder="Task description"></textarea>
<button id="btn_task_save">Publish!</button>
<button id="logout">Log out</button>
</form>`

    const taskContainer = document.createElement('div');
    taskContainer.innerHTML = post;
    const taskForm = taskContainer.querySelector('#task-form');
    console.log(taskForm);
    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('task-title');
        const description = document.getElementById('task-description');
        saveTask(title.value, description.value);
        taskForm.reset();

    })

    const buttonSignOut = taskContainer.querySelector('#logout');
    buttonSignOut.addEventListener('click', (e) => {
        e.preventDefault();
        userSignOut()
        .then(() => {changeView('#/home')});
    })
    return taskContainer;
    

}