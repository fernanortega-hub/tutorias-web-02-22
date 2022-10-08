let counter = 1;
let isExpanded = false;

const loadCharacters = async () => {

    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${counter}`)
    const data = await response.json()

    getCounterCharacters(data.info)

    data.results.map((el) => {
        // Pasamos el objeto sin destructurarlos
        addCharacters(el)
    })

}

loadCharacters()

const getCounterCharacters = ({ count, pages }) => {
    const header = document.getElementById("number-header");
    header.innerHTML = `
        <span> Total de personajes: ${count} </span>
        <span> Total de páginas: ${pages} </span>
        <span> Renderizando ${counter > 1 ? `${counter} páginas` : `${counter} página`}  </span>
    `
}


// La función recibe el elemento pasado en loadCharacters(), en el cual destructuramos 
// OJO: al ser una respuesta en JSON, debemos acceder por clave valor
const addCharacters = ({ id, name, image, status, type, species, gender, origin, location }) => {
    const container = document.querySelector("#container")

    // En la linea donde colocamos el tipo, hacemos un renderizado condicional, si type es una cadena vacia, colocamos un Unknown, si type no es una cadena vacia
    // colocamos el type
    container.innerHTML += `
        <section class="card" id="${id}">
            <img src="${image}" alt="Imagen de ${name}"/>
            <span class="status ${status}"> ${status} </span>
            <div class="card-footer">
                <p class="character character-name"> ${name} </p>
                <p class="character"> Species: ${species} </p>
                <div class="info hidden-prop">
                    <p class="character"> Type: ${type === "" ? "Unknown" : type} </p>
                    <p class="character"> Gender: ${gender} </p>
                    <p class="character"> Origin: ${origin.name} </p>
                    <p class="character"> Last location: ${location.name} </p>
                </div>

                <button class="see-more-btn" id="button-${id}" onclick="expandCard(${id})"> See more about ${name} </button>
            </div>
        </section>
    `
}

// Función para expandir carta, se trae el id del elemento, en este caso es el id del character dado de la API
// de Rick and Morty
const expandCard = (id) => {
    // isExpanded se reasigna porque el toggle retorna un booleano. En este caso, siempre accedemos al chilNode #5, 
    // porque debo acceder al div con clase .info.hidden-prop, para mostrarlos hago un toggle a la clase hidden-prop
    isExpanded = document.getElementById(`${id}`).childNodes.item(5).childNodes.item(5).classList.toggle("hidden-prop")
    const button = document.getElementById(`button-${id}`)
    console.log(isExpanded)

    // Si isExpanded is true, debo cambiar la palabra less por more (para mejor sentido en el botón)
    isExpanded
    ?
    button.textContent = button.textContent.replace("less", "more")
    // Si isExpanded is false, debo cambiar la palabra less por more (para mejor sentido en el botón)
        :
        button.textContent = button.textContent.replace("more", "less")
}

document.getElementById('toTop-btn').addEventListener('click', () => {
    // Al dar click a este botón, le decimos a la ventana del navegador que scrolleé hasta arriba o top: 0, de manera suave (behavior: "smooth")
    // Este ultimo ya es dado por JS
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})

window.onscroll = async function (ev) {
    if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 1000)) {
        counter += 1;
        if (counter >= 42) return
        await loadCharacters()
    }
}