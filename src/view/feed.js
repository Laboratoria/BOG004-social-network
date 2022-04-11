import { changeView } from "../view-controler/controler.js";
import { saveFormPost, getPosts } from "../Firebase/firestore.js";


export const feed = () => {
    const viewFeedHtml = document.getElementById("root");
    const view = `
    <a href="#/feed"></a>
    <div id="feed-template">
    <section id="info-user">
        <div id="div-profile">
            <img id="photo-profile" src="../imageS/Ellipse 1.png" alt="">
            <div>
                <h3 id="name-user">Nombre Apellido</h3>
                <p id="type-user">Empresa</p>
                <p id="description-user">Hola solicito información</p>
            </div>
        </div>
        <a href="" id="edit-profile" class="button-profile"><img src="../images/edit 1.png" alt="Edit"></a>
        <div id="div-speciality">
            <div class="speciality">Developer Js</div>
            <div class="speciality">Angular</div>
            <div class="speciality">React</div>
        </div>
        <a href="" class="button-profile"><img src="../images/logout 1.png" alt="Sign Out"></a>
    </section>
    <section id="section-post">
        <form action="" id="form-post">
            <div id="form-textarea">
                <label for="newpost">Nuevo Post</label>
                <textarea name="Post" id="area-post" cols="30" rows="10" maxlength="300" placeholder="¿Qué quieres compartir hoy?">    
                </textarea>
            </div>
            <div id="div-check">
                <span>
                    <input type="checkbox" id="type-post-offer" name="Oferta">
                    <label for="offer">Oferta</label>
                    <input type="checkbox" id="type-post-demand" name="Búsqueda">
                    <label for="demand">Búsqueda</label>
                </span>
                <button id="send-post" class="button-profile" type="submit"><img src="../images/send 1.png" alt="Send"></button>
            </div>
        </form>
    </section>
    <section id="feed-user">
        <div id="div-profile-feed">
        <img src="../images/Ellipse 2.png" alt="">
            <div>
                <h3 id="name-user">Nombre Apellido</h3>
                <p id="type-user">Programador</p>
            </div>
            <a href="" class="button-profile"><img src="../images/Group 2.png" alt="Options Group"></a>
        </div>
        <div id="div-post">
            <p>publicado <time datetime=" "></time></p>
        </div>
        <div id="div-options">
            <a href=""><img src="../images/ninja star 1.png" alt="Ninja Likes"></a>
            <a href=""><img src="../images/speech-bubble 1.png" alt="Comments"></a>
            <a href=""><img src="../images/share 1.png" alt="Share"></a>
        </div>
        <hr>
        <button id="buttonHero"> Inicio </button>
    </section>
    </div>
    `;

    viewFeedHtml.innerHTML = view;

    document.querySelector("#buttonHero").addEventListener("click", () => {
        //Recordar cambiar la ruta cuando realicemos el template del muro de la aplicación
        window.location.hash = "/";
    });

    //Mostrar todos los post apenas se ingresa al feed
    // getPost();


    const divPost = document.getElementById('div-post')
    console.log(divPost);

    //función para hacer un post
    const postForm = document.querySelector("#form-post");
    postForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const textAreaPost = postForm['area-post'];
        saveFormPost(textAreaPost.value);

        postForm.reset()

    });


    return viewFeedHtml;
};










//Seleccionamos de la data lo que queremos que se muestre en el feed (contenido del post)
// getPost().then((response) => {
//     const divPost = document.querySelector('#div-post');
//     response.forEach((text) => {
//         console.log(text);
//         divPost.innerHTML += `
//             <p> ${text.textAreaPost} </p>
//         `;
//     });
// });


//     const containerPost = divElem.querySelector('#containerPost');
// response.forEach((element) => {
//   console.log(element);
//   containerPost.innerHTML += `
//     <h3>  ${element.id} </h3>
// //     <p> ${element.post} </p>
// //     <button class="delete" data-set=${element.id}> Eliminar </button>   
// //     <button class="edit" data-set='${element.id}', '${element.post}'> Editar </button>  
// //    `;