
export default () => {
    const viewPost = `

 <figure>
        <img class="Icono" src="images/iPhone 13/Logo.png" alt="Icono"><br>
        <img class="Nave" src="./images/Nave.png" alt="Nave">
        <h1>Post</h1>
</figure>

<footer> Made by Viviana, Camila & Paula</footer>
`
    const sectionElement = document.createElement('div')
    sectionElement.innerHTML = viewPost;

    return sectionElement;
}