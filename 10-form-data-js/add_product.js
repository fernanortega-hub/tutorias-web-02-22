let products = [];

const form = document.getElementById("form-add-product");

form.onsubmit = (event) => {
    // preventDefault() evita que se recargue o haga un re-render de la pagina en si
    event.preventDefault();

    const formData = new FormData(event.target);
    const formBody = Object.fromEntries(formData.entries());

    // if(!formBody.description && !formBody.title) {
    //     alert("Todos los datos son necesarios")
    // }

    if(!localStorage.getItem("products")) {
        localStorage.setItem("products", JSON.stringify(products));
    }

    products = JSON.parse(localStorage.getItem("products"));
    
    products.push(formBody);
    localStorage.setItem("products", JSON.stringify(products));

    history.back()
}