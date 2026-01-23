





function createCardElement(parentName, data) {
    // I assume you will have only one element with this class name
    // better aproach is to use id
    parent = document.getElementsByClassName(parentName)[0];

    // Create product card item for future manipulations
    card = document.createElement("div")
    card.classList.add("tovar")
    card.id = data.id
  

    // Fill the card with data
    card.innerHTML = `
    <a href="#"></a>
    <img src=${data.imageSrc} alt="">
    <p class="tovarlogo">${data.productName}</p>
    <div class="tovar_info flex_between">
    <h3>${data.productPrice}грн</h3>
    ${data.avalible ? "<p>у наявності</p>" : "<p class='nope'>нєма</p>"}
    </div>`

    // Add image hover event listener
    let image = card.querySelector("img")
    image.addEventListener("mouseover", () => {
        image.src = data.imageHoverSrc
    })
    image.addEventListener("mouseout", () => {
        image.src = data.imageSrc
    })

    // Add click action to create detailed view
    card.onclick = () => createDetails(data)

    // Add product card to document
    parent.appendChild(card)
}

function createDetails(data) {
    const svg = "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px' fill='#1f1f1f'><path d='m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z'/></svg>"
    const tgk = "https://t.me/Zmiyka44"

    // Get main component to add detailed card
    var main = document.querySelector("main")
    
    // Create clickable elements
    var cancelBtn = document.createElement("div")
    var orderBtn = document.createElement("a")
    var background = document.createElement("div")

    // Set clickable elements properties
    cancelBtn.classList.add("canel")
    cancelBtn.innerHTML = svg
    
    orderBtn.href = tgk
    orderBtn.innerHTML = "Замовити"

    background.classList.add("black")
    background.setAttribute("style", "display: block;")

    // Static elements

    const card = document.createElement("div");
    card.classList.add("bc", "flex");
    card.style.display = "flex";

    const img = document.createElement("img");
    img.src = data.imageSrc;
    img.alt = data.productName;

    const info = document.createElement("div");
    info.classList.add("kartca_info");

    const name = document.createElement("p");
    name.classList.add("nazva");
    name.textContent = data.productName;

    const price = document.createElement("p");
    price.classList.add("price");
    price.textContent = `${data.productPrice}грн`;

    const hr = document.createElement("hr");

    const description = document.createElement("p");
    description.classList.add("info");
    description.textContent = data.productDescription;


    // Add everything to kartka div
    kartka = document.createElement("div")
    kartka.classList.add("kartka")
    info.append(
        name,
        price,
        hr,
        description,
        orderBtn,
        cancelBtn
    );
    card.append(img, info)

    kartka.append(background, card)

    // Add click actions
    background.onclick = () => kartka.remove();
    cancelBtn.onclick = () => kartka.remove();

    main.appendChild(kartka)
}

async function readData(dataPath) {
    const url = dataPath
    try {
        const response =  await fetch(url)
        if (!response.ok) {
            throw new Error("There is no such file")
        }
        const result = await response.json();
        return result

    } catch (error) {
        console.error(error.mesage)
    } 
}

document.addEventListener('DOMContentLoaded', async function() {
    // Name of class of the card wrapper container
    const parentName = "tovar_main";
    const dataLocation = "https://raw.githubusercontent.com/MatiushkoDasha/zmiyka2026/refs/heads/master/data.json"

    // Load data from JSON file
    data = await readData(dataLocation)

    // Display each card using function
    data.forEach(element => {
        createCardElement(parentName, element)
    });
});

  const dark = document.querySelector(".dark"),
      burger = document.querySelector(".burger"),
      listheader = document.querySelector(".listheader"),
      cancelheader = document.querySelector(".cancelheader")

    burger.addEventListener("click", function() {
    listheader.style.display = "block";
    dark.style.display = "block"
    })

    function cancelBurger() {
    listheader.style.display = "none";
    dark.style.display = "none"
    }
    cancelheader.addEventListener("click", cancelBurger) 
    dark.addEventListener("click", cancelBurger)
