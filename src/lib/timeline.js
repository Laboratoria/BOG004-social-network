import {
  close, savingPost, onGettingPost, deletePosts, getPost,
} from '../firebase.js';

export default () => {
  const viewTimeline = `
  <div id ="menuTimeline">
    <button type="button" id="userLogOut">Log Out</button>
  </div>
    <form id= "post-form">
      <label for= "post-it"></label>
      <textarea id= "postIt-description" rows= "3" placeholder= "What do you want to share?"></textarea>

      <button type="button" id="save-postIt">Post!</button>
      <br>
      

    </form>
    <div id="post-it-container"></div>
    
    `;

  const divElement = document.createElement('div');
  divElement.innerHTML = viewTimeline;

  // Saving posts
  divElement.querySelector('#save-postIt').addEventListener('click', () => {
    const postIt = document.getElementById('postIt-description').value;
    savingPost(postIt);

    const posts = document.getElementById('post-form');
    posts.reset();
  });

  // log Out
  divElement.querySelector('#userLogOut').addEventListener('click', () => {
    close();
  });

  // Getting posts-data from Firestore
  onGettingPost((querySnapshot) => {
    const postContainer = document.getElementById('post-it-container');
    let html = '';

    querySnapshot.forEach((doc) => {
      const postData = doc.data();
      html += `
                    <div>
                        <div>
                        <textarea id= "postIt-description" rows= "3" readonly>${postData.postIt}</textarea>
                        <button type="button" class="btndelete-postIt" data-id="${doc.id}">Delete</button>
                        <button type="button" class="btnedit-postIt">Edit</button>
                        </div>
                    </div>
                    `;
    });
    postContainer.innerHTML = html;

    // Deleting posts
    const deletePostIt = postContainer.querySelectorAll('.btndelete-postIt');
    deletePostIt.forEach((btndelete) => {
      btndelete.addEventListener('click', ({ target: { dataset } }) => {
        deletePosts(dataset.id);
      });
    });

    // Editing posts
    const editPostIt = postContainer.querySelectorAll('.btnedit-postIt');
    editPostIt.forEach((btn) => btn.addEventListener('click', async (e) => {
      const doc = await getPost(e.target.dataset.id);
      const posts = document.getElementById('post-form');
      const postData = doc.data();
      posts['post-form'].value = postData.postIt.description;
      // editStatus = true;//
      id = doc.id;
    }));
  });
  return divElement;
};
