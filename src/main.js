import { changeView } from './lib/viewController.js';
import { saveTask } from './lib/index.js';

const init = () => {

    window.addEventListener('hashchange', () => changeView(window.location.hash))
}

window.addEventListener('load', init)


/*const taskForm = document.getElementById('task-form');
taskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = taskForm['task-title'];
    const description = taskForm['task-description'];

    saveTask(title.value, description.value);

    taskForm.reset();

})*/


