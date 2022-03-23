export default () => {
    const viewHomePage = `
    <img src="./img/home-image.png" alt="Girl-with-dog" width="200" height="200" style="padding:55px">
    <h2 id="hello">Welcome to PetShare</h2>
    <p id="home-textContent">
    PetShare is the foremost social network dedicated to people who love pets.
    Sharing photos and videos of you and your pet, getting advice for healthcare and behavior from our 
    veterinarian partners as well as hilarious cat and dog videos.
    </p>
        `

    const divElement = document.createElement("div")
    divElement.classList.add("position");
    divElement.innerHTML = viewHomePage;

    return divElement;
}