import {
  close, savingPost, onGettingPost,
} from '../firebase.js';

export default () => {
  const viewTimeline = `
  <div id ="menuTimeline">
    <nav>
        <ul class="tabs">
          <li><a href="#tab1" id="tab1"><span> Profile</span></a></li>
          <li><a href="#tab2" id="tab2"><span> Wall</span></a></li>
          <li><a href="#tab3" id="tab3"><span> Friends </span></a></li>
          <li><a href="#tab4" id="tab4"> Sign out</span></a></li>
        </ul>
    </nav>
  </div>
    <form id= "post-form">
      <label for= "post-it"></label>
      <textarea id= "postIt-description" rows= "3" placeholder= "What do you want to share?"></textarea>

      <button type="button" id="save-postIt">Post!</button>
      <br>
      <button type="button" id="userLogOut">Log Out</button>

    </form>
    <div id="post-it-container"></div>
    
    `;

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
    html += `
                  <div>
                      <div>
                      <textarea id= "postIt-description" rows= "3" readonly>${postData.postIt}</textarea>
                      </div>
                  </div>
                  `;
  });
  postContainer.innerHTML = html;
});
