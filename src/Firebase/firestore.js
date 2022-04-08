import { db } from "./firebase-controller.js";
import {
    collection,
    addDoc,
    getDocs,
} from "https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js";
import { getFirestore } from "./firebase-import.js";
// import { async } from "regenerator-runtime";

//función para crear la collección post-collection
export const saveFormPost = (textAreaPost) => {
    addDoc(collection(db, "posts-collection"), { textAreaPost });
};

export const getPosts = () => getDocs(collection(db, "posts-collection"));

window.addEventListener('DOMContentLoaded', async() => {
    const querySnapshot = await getPosts()

    querySnapshot.forEach(text => {
        console.log(text.data());
        const divPost = document.querySelector("#div-post");
        console.log(divPost);
        let divPostTemaplate = ''
        divPostTemaplate.innerHTML += `
        <div>${text.textAreaPost}</div>
        `;
        divPost.innerHTML = divPostTemaplate;
    });

})









// export const getPost = async() => {
//     const querySnapshot = await getDocs(collection(db, "posts-collection"));
//     const postFeed = [];
//     querySnapshot.forEach((doc) => {
//         postFeed.push({ textAreaPost: doc.data().textAreaPost, id: doc.id });
//         // console.log(postFeed);
//     });
//     return postFeed;
// };