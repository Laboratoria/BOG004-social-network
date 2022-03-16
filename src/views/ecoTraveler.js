export default () => {
    const viewEcotraveler = `
    <h2 class="wall">Muro Principal</h2>`

    const divEcotraveler = document.createElement('div')
    divEcotraveler.innerHTML = viewEcotraveler;

    return divEcotraveler;
    
}