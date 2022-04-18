import { changeView } from "../view-controler/controler.js";
import { saveFormPost, onGetPost, deletePost, getPost, getOnePost, updatePost } from "../Firebase/firestore.js";
// import { async } from "regenerator-runtime";

export const feed = () => {
    const viewFeedHtml = document.getElementById("root");
    const view = `
    <a href="#/feed"></a>
    <div id="feed-template">
    <section id="info-user">
        <div id="div-profile">
            <img id="photo-profile" src="../images/Ellipse 1.png" alt="">
            <div id="info-profile">
                <h3 id="name-user">Nombre Apellido</h3>
                <p id="type-user">Empresa</p>
            </div>
        </div>
        <a href="" id="edit-profile" class="button-profile"><img src="../images/edit 1.png" alt="Edit"></a>
        <div id="div-speciality">
            <div class="speciality">Js Code</div>
            <div class="speciality">Angular</div>
            <div class="speciality">React</div>
        </div>
        <a href="" class="button-profile"><img src="../images/logout 1.png" alt="Sign Out"></a>
    </section>
    <section id="section-post">
        <form action="" id="form-post">
            <div id="form-textarea">
                <label for="newpost">Nuevo Post</label>
                <textarea name="Post" id="area-post" cols="20" rows="3" maxlength="300" placeholder="¿Qué quieres compartir hoy?">    
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
        <div id="div-post"></div>
        <form id="form-post-user" action=""></form>
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
    const divPost = document.querySelector("#feed-user");
    const postForm = document.querySelector("#form-post");
    let editStatus = false;
    let id = '';

    postForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const post = postForm["area-post"];
        // saveFormPost(infoPost);
        if (!editStatus) {
            saveFormPost(post.value, []);
        } else {
            // saveFormPost(infoPost);
            updatePost(id, {
                textAreaPost: post.value,
            })
            editStatus = false;
        }
        postForm.reset();
    });

    //Seleccionamos de la data lo que queremos que se muestre en el feed (contenido del post)

    onGetPost((response) => {
        let infoPostUser = "";
        let postfeed = [];
        response.forEach((text) => {
            const datapost = text.data();
            console.log(datapost);
            postfeed.push({ textAreaPost: datapost.textAreaPost });
            const divpostuser = `
                <div id="div-profile-feed">
                 <img class="square" src="../images/Ellipse 2.png" alt="">
                    <div>
                        <h3 id="name-user">Nombre Apellido</h3>
                        <p id="type-user">Programador</p>
                    </div>
                    <div class="dropdown">
                    <button id="options-post" class="dropbtn" ><img src="../images/Group 2.png" alt="Options Group"></button>
                        <div class="dropdown-content">
                            <button class="btn-edit" data-id="${text.id}">Editar</button>
                            <button class="btn-delete" data-id="${text.id}">Eliminar</button>                            
                        </div>
                    </div>
                </div>
                    <div> ${datapost.textAreaPost} </div>
                    <div id="div-options">
                     <button id="${text.id}" class="btn-likes"><img src="../images/ninja star 1.png" alt="Ninja Likes"><p>${datapost.likes.length}</p></button>
                     <button class="btn-center"><img src="../images/speech-bubble 1.png" alt="Comments"></button>
                     <button class="btn-center"><img src="../images/share 1.png" alt="Share"></button>
                    </div>
                    <hr>            
                `;
            infoPostUser += divpostuser;
        });
        divPost.innerHTML = infoPostUser;

        // like del post 
        const btnsLike = divPost.querySelectorAll(".btn-likes");
        btnsLike.forEach((btn) => {
            btn.addEventListener("click", async(e) => {
                const uid = JSON.parse(localStorage.getItem("userInfo")).uid;
                const idLike = e.currentTarget.id
                console.log(e.currentTarget.id);
                const doc = await getOnePost(e.currentTarget.id);
                const savedPost = doc.data();
                const likesSaves = savedPost.likes;
                console.log(uid, likesSaves);
                if (likesSaves.includes(uid)) {
                    likesSaves.splice(uid)
                    updatePost(idLike, {
                        likes: likesSaves,
                    })
                    console.log("ya quite el like");
                } else {
                    likesSaves.push(uid);
                    updatePost(idLike, {
                        likes: likesSaves,
                    })
                    console.log("si ya puse like");
                }
            })
        })

        const btnsDelete = divPost.querySelectorAll(".btn-delete");

        btnsDelete.forEach((btn) => {
            btn.addEventListener("click", ({ target: { dataset } }) => {
                if (confirm("¿Estás seguro de eliminar este post?") === true) {
                    deletePost(dataset.id)
                    return alert("Tu post será eliminado")
                } else {
                    return false
                }
            });
        });

        const btnsEdit = divPost.querySelectorAll(".btn-edit");
        console.log(btnsEdit);
        btnsEdit.forEach((btn) => {
            btn.addEventListener('click', async(e) => {
                const doc = await getOnePost(e.target.dataset.id);
                const editPost = doc.data();

                console.log(editPost);

                postForm["area-post"].value = editPost.textAreaPost;

                editStatus = true;
                id = doc.id;

                postForm['send-post'].innerHTML
            });
        });

        return viewFeedHtml;
    });

};