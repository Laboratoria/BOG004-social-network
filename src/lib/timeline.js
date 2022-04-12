import {
  close, savingPost, onGettingPost, deletePosts, getPost, updatePost, likeItPost,
} from './firebase.js';

export default () => {
  const viewTimeline = `
  <div id ="menuTimeline">
    <button type="button" id="userLogOut">Log Out</button>
  </div>
    <form id= "post-form">
      <label for= "post-it"></label>
      <textarea id= "postIt-description" rows= "3" placeholder= "What do you want to share?"></textarea>

      <button type="button" id="save-postIt">Post!</button>
      <button type="button" id="update-postIt" style="display: none">Update!</button>
      <br>
      

    </form>
    <div id="post-it-container"></div>
    
    `;

  const divElement = document.createElement('div');
  divElement.innerHTML = viewTimeline;

  // Saving posts
  divElement.querySelector('#save-postIt').addEventListener('click', () => {
    const postIt = document.getElementById('postIt-description').value;
    const infoPost = {
      postIt,
      likes: 0,
    };
    savingPost(infoPost);

    const posts = document.getElementById('post-form');
    posts.reset();
  });

  // Log Out
  divElement.querySelector('#userLogOut').addEventListener('click', () => {
    close();
  });

  // Getting posts-data from Firestore
  onGettingPost((querySnapshot) => {
    const postContainer = document.getElementById('post-it-container');
    let html = '';

    querySnapshot.forEach((doc) => {
      const postData = doc.data();
      // console.log (doc.id)
      html += `
                    <div>
                        <div>
                        <textarea id= "postIt-description" rows= "3" " readonly>${postData.postIt}</textarea>
                        <button type="button" class="btndelete-postIt" data-id="${doc.id}">Delete</button>
                        <button type="button" class="btnedit-postIt" data-id="${doc.id}">Edit</button>
                        <button type="button" class="btnlike-postIt" data-id="${doc.id}">I Like It!</button>
                        <span> ${postData.likes} </span>
                        </div>
                    </div>
                    `;
    });
    postContainer.innerHTML = html;

    // Liking posts
    const likeItbtn = postContainer.querySelectorAll('.btnlike-postIt');
    likeItbtn.forEach((likes) => {
      likes.addEventListener('click', ({ target: { dataset } }) => {
        const doc = getPost(dataset.id);
        doc.then((response) => {
          const saveLikes = response.data().likes;
          updatePost(dataset.id, { likes: saveLikes + 1 });
        });
        console.log(dataset.id);
      });
    });

    // Deleting posts
    const deletePostIt = postContainer.querySelectorAll('.btndelete-postIt');
    deletePostIt.forEach((btndelete) => {
      btndelete.addEventListener('click', ({ target: { dataset } }) => {
        deletePosts(dataset.id);
      });
    });

    // Editing posts
    const editPostIt = postContainer.querySelectorAll('.btnedit-postIt');
    const posts = document.getElementById('postIt-description');

    editPostIt.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const doc = getPost(e.target.dataset.id);
        doc.then((response) => {
          posts.value = response.data().postIt;
          divElement.querySelector('#save-postIt').style.display = 'none';
          divElement.querySelector('#update-postIt').style.display = 'inline-block';

          divElement.querySelector('#update-postIt').onclick = () => {
            const uPost = document.getElementById('postIt-description').value;
            updatePost(e.target.dataset.id, { postIt: uPost });

            const postForm = document.getElementById('post-form');
            postForm.reset();
            divElement.querySelector('#save-postIt').style.display = 'inline-block';
            divElement.querySelector('#update-postIt').style.display = 'none';
          };
        });
      });
    });
  });
  return divElement;
};

export {
  close, savingPost, onGettingPost, deletePosts, getPost, updatePost, likeItPost,
};
