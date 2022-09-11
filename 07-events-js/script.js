const title = document.getElementById('title');
const title2 = document.querySelector("#title");
const parrafo = document.getElementsByClassName("parrafo");
const body = document.body;

console.log(title);
console.log(title2);
console.log(parrafo);

const div = document.createElement('div');
const textInDiv = document.createTextNode("Otro div")
let otherText = document.createTextNode("Este es un nuevo div")
div.className = 'div2';
div.id = "div2ID";
div.appendChild(textInDiv);
div.appendChild(otherText);

body.appendChild(div);

console.log(div.textContent);

// div.textContent = "Texto modificado";

// body.removeChild(title) // Eliminar un elemento hijo de otro

const div2 = document.getElementById("div2ID");
const button = document.createElement('button');
button.textContent = "Haz click en mi";
button.className = 'primary-button';

div.appendChild(button);

// button.onclick = (ev) => {
//     console.log(ev);

//     title.classList = "otra-clase";

//     const img = document.createElement("img");
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png'
//     body.appendChild(img);
// }

button.addEventListener('click', (ev) => {
    title.classList = "otra-clase";

    const img = document.createElement("img");
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png';
    img.width = 200;
    img.height = 200;
    body.appendChild(img);
    alert("Bienvenido");
})

title.addEventListener('click', function (ev) {
    title.classList = "otra-clase";
})

// element.addEventListener('event', (ev) => { // Tu codigo })
// element.on[event] = (ev) => { // tu codigo }

// body.onscroll = (ev) => {
//     console.log(window.screenY)
// }