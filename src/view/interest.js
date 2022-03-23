export default () => {
    document.getElementById("menuHtml").style.display = "block";
    const containerInterest = document.createElement("div");
    containerInterest.classList.add("containerInterest");

    const navMenu = document.getElementById("menuHtml");
    const menuDiv = document.createElement("div");
    menuDiv.classList.add("menuDiv");
    
    menuDiv.appendChild(navMenu);
    
    const rightColumn = document.createElement("div");
    rightColumn.classList.add("rightColumnInterest");
    const title = `
    <h2 class="welcome-text">Si no has escogido tu categoria de interes escogela aquí</h2>`;
    rightColumn.innerHTML = title;

    const interests = document.createElement("div");
    interests.classList.add("interests");
    
    //SUGAR FREE
    const sugarFreeDiv = document.createElement("div");
    sugarFreeDiv.classList.add("interestDiv");
    const sugarFreeImg =`
    <img id="sugar_free-img" class="interest-img" src="../img/sugar_free-img.jpg" alt="sugar_free-image">`;
    sugarFreeDiv.innerHTML = sugarFreeImg;

    const textGFDiv = document.createElement("div");
    textGFDiv.classList.add("textDiv");
    const textGF = `<h3>Diabeticos</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies turpis magna, vulputate semper velit faucibus ac.</p>`;
    textGFDiv.innerHTML = textGF;

    sugarFreeDiv.appendChild(textGFDiv);

    //VEGAN
    const veganDiv = document.createElement("div");
    veganDiv.classList.add("interestDiv");
    const veganImg =`
    <img id="vegan-img" class="interest-img" src="../img/vegan-img.jpg" alt="vegan-image">`;
    veganDiv.innerHTML = veganImg;

    const textVDiv = document.createElement("div");
    textGFDiv.classList.add("textDiv");
    const textV = `<h3>Vegano</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies turpis magna, vulputate semper velit faucibus ac.</p>`;
    textVDiv.innerHTML = textV;

    veganDiv.appendChild(textVDiv);

    //LACTOSE FREE
    const lactoseFreeDiv = document.createElement("div");
    lactoseFreeDiv.classList.add("interestDiv");
    const lactoseFreeImg =`
    <img id="lactose_free-img" class="interest-img" src="../img/lactose_free-img.jpg" alt="lactose_free-image">`;
    lactoseFreeDiv.innerHTML = lactoseFreeImg;

    const textLfDiv = document.createElement("div");
    textLfDiv.classList.add("textDiv");
    const textLF = `<h3>Sin Lactosa</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies turpis magna, vulputate semper velit faucibus ac.</p>`;
    textLfDiv.innerHTML = textLF;

    lactoseFreeDiv.appendChild(textLfDiv);

    //VEGETARIAN
    const vegetarianDiv = document.createElement("div");
    vegetarianDiv.classList.add("interestDiv");
    const vegetarianImg =`
    <img id="vegetarian-img" class="interest-img" src="../img/vegetarian-img.jpg" alt="vegetarian-image">`;
    vegetarianDiv.innerHTML = vegetarianImg;

    const textVegDiv = document.createElement("div");
    textVegDiv.classList.add("textDiv");
    const textVeg = `<h3>Vegetariano</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies turpis magna, vulputate semper velit faucibus ac.</p>`;
    textVegDiv.innerHTML = textVeg;

    vegetarianDiv.appendChild(textVegDiv);

    //GLUTEN FREE
    const gluterFreeDiv = document.createElement("div");
    gluterFreeDiv.classList.add("interestDiv");
    const glutenFreeDiv =`
    <img id="gluten_free-img" class="interest-img" src="../img/gluten_free-img.jpg" alt="gluten_free-image">`;
    gluterFreeDiv.innerHTML = glutenFreeDiv;

    const textGfDiv = document.createElement("div");
    textGfDiv.classList.add("textDiv");
    const textGf = `<h3>Libre de Gluten</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies turpis magna, vulputate semper velit faucibus ac.</p>`;
    textGfDiv.innerHTML = textGf;

    gluterFreeDiv.appendChild(textGfDiv);
  
    
    interests.appendChild(sugarFreeDiv);
    interests.appendChild(veganDiv);
    interests.appendChild(lactoseFreeDiv);
    interests.appendChild(vegetarianDiv);
    interests.appendChild(gluterFreeDiv);

    rightColumn.appendChild(interests);
    containerInterest.appendChild(menuDiv);
    containerInterest.appendChild(rightColumn);
    // containerInterest.appendChild(interests);
    
    return containerInterest;
}