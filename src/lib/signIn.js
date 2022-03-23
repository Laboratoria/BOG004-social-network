export default () => {
    const viewSignIn = `
        `

    const divElement = document.createElement("div")
    divElement.classList.add("position")
    divElement.innerHTML = viewSignIn;

    return divElement;
}