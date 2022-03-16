export default () => {
    const viewRegister = `
    <h2 class="bienvenida">EcoTraveler</h2>`

    const divRegister = document.createElement('div')
    divRegister.innerHTML = viewRegister;

    return divRegister;
    
}