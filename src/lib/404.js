export default () => {
    const viewError = `
        <h1>404</h1>
        <h>Page Not Found</h1>`

    const divElement = document.createElement("div")
    divElement.setAttribute("id", "message");
    divElement.innerHTML = viewError;

    return divElement;
}