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
<div class = 'navPost'>
<h1 class = 'titlePost'>PAPYRUS</h1>
<button id="logout">Log out</button>
</div>
<figure>
      <img class="IconoPost" src="images/iPhone 13/Logo.png" alt="Icono">
    </figure>
<div class = 'postContainer'>
<label for="comment" id = 'commentText'>Postea lo que desees!</label>
<textarea id="task-comment" rows="3" placeholder="Post..."></textarea>
<button id="btn-task-save">Publish!</button>

<div id="comments-container"></div>
</div>
</form>`;

  const taskContainer = document.createElement('div');
  taskContainer.innerHTML = post;
  const formContainer = taskContainer.querySelector('#form-container');
  const commentsContainer = taskContainer.querySelector('#comments-container');
  const postContainer = taskContainer.querySelector('#task-comment');
  // eslint-disable-next-line no-unused-vars
  let editStatus = false;
  let id = '';
  formContainer.addEventListener('submit', (e) => {
    // eslint-disable-next-line no-undef
    e.preventDefault();
    saveComment(postContainer.value);
    formContainer.reset();
    console.log(commentsContainer);
  });

  onGetComments((querySnapshot) => {
    // eslint-disable-next-line no-unused-vars
    commentsContainer.innerHTML = '';
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

    const deletePost = (id) => {
      console.log(id);
      deleteComment(id);
    };
    const btnsDelete = commentsContainer.querySelectorAll('.btn-delete');
    btnsDelete.forEach((btn) => {
      btn.addEventListener('click', (e) => deletePost(e.target.getAttribute('data-id')));
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
