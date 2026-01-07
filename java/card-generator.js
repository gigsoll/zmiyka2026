function createCardElement(parentName, data) {
    // I assume you will have only one element with this class name
    // better aproach is to use id
    parent = document.getElementsByClassName(parentName)[0];

    parent.innerHTML += `<div class="tovar" id="${data.id}">
    <a href="#"></a>
    <img src=${data.imageSrc} alt="">
    <p class="tovarlogo">${data.productName}</p>
    <div class="tovar_info flex_between">
    <h3>${data.productPrice}грн</h3>
    ${data.avalible ? "<p>у наявності</p>" : "<p class='nope'>нєма</p>"}
    </div>
    </div>`
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
    const dataLocation = "../data.json"

    

    data = await readData(dataLocation)

    data.forEach(element => {
        createCardElement(parentName, element)
    });
});

