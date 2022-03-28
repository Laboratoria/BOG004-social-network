/* eslint-disable quotes */
// eslint-disable-next-line import/no-cycle
import { changeView } from './viewController.js';
import {
  saveComment,
  onGetComments,
  deleteComment,
  userSignOut,
  getComment,
  updateComment,
} from './firebase.js';

export default () => {
  const post = `
<form id='form-container'>
<label for="comment">Comment!</label>

<textarea id="task-comment" rows="3" placeholder="Task Comment"></textarea>
<button id="btn-task-save">Publish!</button>
</form>
<button id="logout">Log out</button>
<div id="comments-container">

</div>
</form>`;

  const taskContainer = document.createElement('div');
  taskContainer.innerHTML = post;
  const formContainer = taskContainer.querySelector('#form-container');
  const commentsContainer = taskContainer.querySelector('#comments-container');
  // eslint-disable-next-line no-unused-vars
  let editStatus = false;
  let id = '';
  formContainer.addEventListener('submit', async (e) => {
    // eslint-disable-next-line no-undef
    e.preventDefault();
    onGetComments((querySnapshot) => {
      // eslint-disable-next-line no-unused-vars
      let html = '';
      querySnapshot.forEach((doc) => {
        const task = doc.data();
        // eslint-disable-next-line no-unused-vars
        html += `
              <div>
              <h3>${task.comment}</h3>
              <button class="btn-delete" data-id="${doc.id}">Delete</button> 
              <button class="btn-edit" data-id="${doc.id}">Edit</button> 
              <button class="like__btn">
              <span id="icon" <i class="fa-regular fa-thumbs-up"></i> </span>
              <span id="count"> 0 </span>
              </button>

              </div>  
              `;
      });
      commentsContainer.innerHTML = html;
      console.log(commentsContainer);
      const btnsDelete = commentsContainer.querySelectorAll('.btn-delete');
      btnsDelete.forEach((btn) => {
        btn.addEventListener('click', ({ target: { dataset } }) => {
          deleteComment(dataset.id);
        });
      });
      const likeButton = commentsContainer.querySelectorAll('.like__btn');
      const count = commentsContainer.querySelectorAll('#count');
      const likeIcon = commentsContainer.querySelectorAll('#icon');
      let clicked = false;
      // button clicked
      // eslint-disable-next-line no-shadow
      likeButton.forEach((btn, idx) => {
        // eslint-disable-next-line no-shadow
        btn.addEventListener('click', (e) => {
          console.log(`clicking button ${idx}`);
          e.preventDefault();
          if (!clicked) {
            clicked = true;
            likeIcon.innerHTML = `<i class="fa-solid fa-thumbs-up"></i>`;
            // eslint-disable-next-line no-plusplus
            count.textContent++;
          } else {
            clicked = false;
            // eslint-disable-next-line quotes
            likeIcon.innerHTML = `<i class="fa-regular fa-thumbs-up"></i>`;
            // eslint-disable-next-line no-plusplus
            count.textContent--;
          }
        });
      });
      const btnsEdit = commentsContainer.querySelectorAll('.btn-edit');
      btnsEdit.forEach((btn) => {
        // eslint-disable-next-line no-shadow
        btn.addEventListener('click', async (e) => {
          const doc = await getComment(e.target.dataset.id);
          const task = doc.data();
          formContainer['task-comment'].value = task.comment;
          editStatus = true;
          id = doc.id;

          formContainer['btn-task-save'].innerText = 'Update';
        });
      });
    });
    const comment = formContainer['task-comment'];
    if (!editStatus) {
      saveComment(comment.value);
    } else {
      updateComment(id, {
        comment: comment.value,
      });
      editStatus = false;
    }
    formContainer.reset();
  });

  const buttonSignOut = taskContainer.querySelector('#logout');
  buttonSignOut.addEventListener('click', (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-undef
    userSignOut().then(() => {
      changeView('#/home');
    });
  });
  return taskContainer;
};
