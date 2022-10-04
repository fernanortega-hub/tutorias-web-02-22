let items = JSON.parse(localStorage.getItem("products"))
const container = document.getElementById("container")

let div = "";

items.forEach(element => {
    div += 
    `<div class="card-product"> 
        <div class="card-header"> 
            <span class="vendor-name"> ${element.vendor.charAt(0).toUpperCase()} </span>
            <div class="price-title">
                <span class="price"> Precio: $${element.price} </span>
                <span class="title-product"> ${element.title} </span>
            </div>
        </div>
        <img class = "image-product"src="${element.image}" alt="Imagen de producto sobre ${element.product}"/>
        <div class="card-footer">
            <span class="description"> ${element.description}</span>
            <span class="location"> ${element.location} </span>
        </div>
    </div>`
});

container.innerHTML = div