export default () => {
    const viewSignUp = `
    <h1 class = "text-align: "right"></h1>
        `

    const divElement = document.createElement("div")
    divElement.classList.add("position")
    divElement.innerHTML = viewSignUp;

    return divElement;
}