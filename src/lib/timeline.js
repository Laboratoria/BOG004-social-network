import {
  close, savingPost, onGettingPost,
} from '../firebase.js';

export default () => {
  const viewTimeline = `
    <form id= "post-form">

      <label for= "post-it"></label>
      <textarea id= "postIt-description" rows= "3" placeholder= "What do you want to share?"></textarea>

      <button type="button" id="save-postIt">Post!</button>
      <br>
      <button type="button" id="userLogOut">Log Out</button>

    </form>
    <div id="post-it-container"></div>`;

  const divElement = document.createElement('div');
  divElement.innerHTML = viewTimeline;

  divElement.querySelector('#save-postIt').addEventListener('click', () => {
    const postIt = document.getElementById('postIt-description').value;
    savingPost(postIt);

    const posts = document.getElementById('post-form');

    posts.reset();
  });

  divElement.querySelector('#userLogOut').addEventListener('click', () => {
    close();
  });

  return divElement;
};

onGettingPost((querySnapshot) => {
  const postContainer = document.getElementById('post-it-container');
  let html = '';

  querySnapshot.forEach((doc) => {
    const postData = doc.data();
    // console.log(doc.id);
    html += `
                  <div>
                    <p>${postData.postIt}</p>
                  </div>
                `;
  });
  postContainer.innerHTML = html;
});
