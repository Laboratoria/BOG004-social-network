import { changeView } from "../view-controler/controler.js";

export const feed = () => {
    const viewFeedHtml = document.getElementById("root");
    const view = `
    <a href="#/feed"></a>
    <section id="info-user">
        <div>
            <img src="../images/Ellipse 2.png" alt="">
            <h3 id="name-user"></h3>
            <p id="type-user"></p>
            <p id="description-user"></p>
            <a href=""><img src="../images/Ellipse 1.png" alt="Avatar"></a>
            <a href=""><img src="../images/edit 1.png" alt="Edit"></a>
        </div>
        <div>
            <div class="speciality">Developer Js</div>
            <div class="speciality">Angular</div>
            <div class="speciality">React</div>
            <a href=""><img src="../images/logout 1.png" alt="Sign Out"></a>
        </div>
    </section>
    <section>
        <h3>Nuevo Post</h3>
        <textarea name="Post" id="area-post" cols="30" rows="10" maxlength="300" placeholder="¿Qué quieres compartir hoy?"></textarea>
        <div>
            <input type="checkbox" id="type-post-offer" name="Oferta">
            <label for="offer">Oferta</label>
            <input type="checkbox" id="type-post-demand" name="Búsqueda">
            <label for="demand">Búsqueda</label>
            <a href=""><img src="../images/send 1.png" alt="Send"></a>
        </div>
    </section>
    <section>
        <div>
        <img src="../images/Ellipse 2.png" alt="">
            <h3 id="name-user"></h3>
            <p id="type-user"></p>
            <a href=""><img src="../images/Group 2.png" alt="Options Group"></a>
        </div>
        <div>
            <p id="text-post"></p>
            <p>publicado <time datetime="2008-02-14 20:00"></time></p>
        </div>
        <div>
            <a href=""><img src="../images/ninja star 1.png" alt="Ninja Likes"></a>
            <a href=""><img src="../images/speech-bubble 1.png" alt="Comments"></a>
            <a href=""><img src="../images/share 1.png" alt="Share"></a>
        </div>
    </section>
    <button id="buttonHero"> Inicio </button>
    `;

    viewFeedHtml.innerHTML = view;

    document.querySelector("#buttonHero").addEventListener("click", () => {
        //Recordar cambiar la ruta cuando realicemos el template del muro de la aplicación
        window.location.hash = "/";
    });

    return viewFeedHtml;
};