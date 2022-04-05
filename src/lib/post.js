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
  updateLikeBtn,
  auth,
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
<label for="comment" id = 'commentText'>Comment!</label>
<textarea id="task-comment" rows="3" placeholder="Post..."></textarea>
<button type="submit" id="btn-task-save">Publish!</button>
</div>
</form>
<div id="comments-container"></div>
`;

  const taskContainer = document.createElement('div');
  taskContainer.innerHTML = post;
  taskContainer.classList = 'taskContainer';
  const formContainer = taskContainer.querySelector('#form-container');
  const commentsContainer = taskContainer.querySelector('#comments-container');
  const postContainer = taskContainer.querySelector('#task-comment');
  // eslint-disable-next-line no-unused-vars
  let editStatus = false;
  let id = '';

  formContainer.addEventListener('submit', (e) => {
    // eslint-disable-next-line no-undef
    e.preventDefault();
    if (!editStatus) {
      saveComment(postContainer.value);
    } else {
      updateComment(id, { comment: postContainer.value });
      editStatus = false;
    }
    formContainer.reset();
  });

  onGetComments((querySnapshot) => {
    // eslint-disable-next-line no-unused-vars
    commentsContainer.innerHTML = '';
    let html = '';
    querySnapshot.forEach((doc) => {
      const task = doc.data();
      // console.log(task.name);
      // eslint-disable-next-line no-unused-vars
      html += `
        <div class='commentCreated'>
        <img src='${task.email}'>
        <p class = 'postText'>${task.name}</p>
        <input type="button" value="X" id="btn-delete" data-id="${doc.id}">      
        <p class = 'postText'>${task.comment}</p>
        <div class='commentBtns'>
        <input type="button" value="Edit" id="btn-edit" data-id="${doc.id}">
        <button id="btn-like" value='${doc.id}'><i class="fas fa-thumbs-up"></i>${task.likesCounter}</button>
            </div>
        </div> `;
    });
    commentsContainer.innerHTML = html;

    const btnsDelete = commentsContainer.querySelectorAll('#btn-delete');
    btnsDelete.forEach((btn) => {
      btn.addEventListener('click', ({ target: { dataset } }) => {
        deleteComment(dataset.id);
      });
    });

    const btnsEdit = commentsContainer.querySelectorAll('#btn-edit');
    btnsEdit.forEach((btn) => {
      btn.addEventListener('click', async (e) => {
        const doc = await getComment(e.target.dataset.id);
        const postText = doc.data();
        formContainer['task-comment'].value = postText.comment;
        editStatus = true;
        id = doc.id;
      });
    });

    const like = commentsContainer.querySelectorAll('#btn-like');
    like.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        console.log('se hizo click:', e.target.value);
        const userId = auth.currentUser.uid;
        console.log(userId);
        // console.log('userID: ', userId);
        updateLikeBtn(e.target.value, userId);
      });
    });
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
