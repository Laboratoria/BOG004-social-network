export default () => {
    const viewError = `
        <h2>404</h2>
        <h1>Página no encontrada</h1>`

    const divElement = document.createElement("div")
    divElement.setAttribute("id", "message");
    divElement.innerHTML = viewError;

    return divElement;
}