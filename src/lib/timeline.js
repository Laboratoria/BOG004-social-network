import { close, savingPost } from "../firebase.js";

export default () => {
  const viewTimeline = `
    <form id= "post-form">
    
      <label for= "post-it"></label>
      <textarea id= "post-it-description" rows= "3" placeholder= "What do you want to share?"></textarea>

      <button type="button" id="save-postIt">Post!</button>
      <br>
      <button type="button" id="userLogOut">Log Out</button>
    
    </form>`;

  const divElement = document.createElement("div");
  divElement.innerHTML = viewTimeline;

  divElement.querySelector("#userLogOut").addEventListener("click", () => {
    close();
  });

  divElement.querySelector("#save-postIt").addEventListener("click", () => {
    const postIt = document.getElementById("post-it-description").value;
    savingPost(postIt);
    console.log(postIt)

    const posts = document.getElementById("post-form");

    posts.reset();
  });

  return divElement;
};
