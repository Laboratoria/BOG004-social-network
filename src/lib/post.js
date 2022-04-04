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
      // eslint-disable-next-line no-unused-vars
      html += `
        <div class='commentCreated'>
        <input type="button" value="X" id="btn-delete" data-id="${doc.id}">      
        <p class = 'postText'>${task.comment}</p>
        <div class='commentBtns'>
        <input type="button" value="Edit" id="btn-edit" data-id="${doc.id}">
        <button id='btn-like'>
          <span id="icon" <i class="fa-regular fa-thumbs-up"></i> </span>
          <span id="count"> 0 </span>
        </button>
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
  });

  /* const likeButton = commentsContainer.querySelectorAll('.like__btn');
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
*/

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
