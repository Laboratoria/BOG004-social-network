export default () => {
    const viewDifferent = `
     <h2>Página no encontrada</h2>
     <p> La página solicitada no se encontró en este sitio web. Por favor verifica la URL y vuelve a intentarlo</p>`;
     const divElem = document.createElement("div")
     divElem.setAttribute("id", "message");
     divElem.innerHTML = viewDifferent;
     return divElem;
    };
