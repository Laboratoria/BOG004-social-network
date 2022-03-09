import { saveTask } from './lib/index.js';

const ROUTER = new Router(PATHS)

let signUpbtn = document.getElementById('signUp');
signUpbtn.addEventListener('click', () => {
    ROUTER.load('signUp')
})

let taskFormpbtn = document.getElementById('taskForm');
taskFormpbtn.addEventListener('click', () => {
    ROUTER.load('taskForm')
})

const taskForm = document.getElementById('task-form');
taskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = taskForm['task-title'];
    const description = taskForm['task-description'];

    saveTask(title.value, description.value);

    taskForm.reset();

})


