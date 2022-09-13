const person = {
    name: "Fernando",
    lastName: "Ortega",
    dui: "0090390-1",
    birthday: "02/11",
    languages: [
        "Kotlin",
        "Javascript",
        "C++",
        "Javazzz"
    ],
    age: 19
}

// console.log(person.birthday);

const titleName = document.getElementById("name");
const lastName = document.querySelector("#lastName");
const languages1 = document.querySelector("#lenguajes");

titleName.textContent = `Hola persona llamada ${person.name}`;
let showLastName = document.createTextNode(`Tu apellido es: ${person.lastName}`)
lastName.appendChild(showLastName)

person.languages.forEach((value, index) => {
    const createLI = document.createElement("li");
    const textNodeLanguages = document.createTextNode(`${index+1} ${value}`);
    createLI.appendChild(textNodeLanguages);
    languages1.appendChild(createLI)
})

person.gender = "Male";
person.address = {
    city: "San Salvador",
    house: 12,
    street: "1ra calle poniente"
}

const createH2 = document.createElement("h2");
createH2.textContent = person.gender;
document.body.appendChild(createH2)


const createP = document.createElement("p");
createP.textContent = `Soy ${person.name} 
    y vivo en: ${person.address.city}, Casa número ${person.address.house}`

document.body.appendChild(createP)

person.address.house = 15;
console.log(person);

// delete person.languages;

console.log(person)

let { name, languages, gender } = person;

console.log(gender)

// console.log(Object.keys(person)) // Mostrando llaves de Person
// console.log('1' === 1) // debe ser false
// console.log('1' == 1) // Sera true, pero está malo

function sayMyAge(universidad, carrera) {
    if(this.age === undefined) {
        console.log(`Voy a la ${universidad} y estudio ${carrera}`)
    } else {
        console.log(`Tengo ${this.age} y voy a la ${universidad} y estudio ${carrera}`)
    }
}
console.log("Mostrando mi edad")
var arrayInfo = ["UCA", "Info"]

sayMyAge.call(person, arrayInfo[0], arrayInfo[1]) 
sayMyAge.apply(person, arrayInfo)
const isMyAge = sayMyAge.bind(person, arrayInfo[0], arrayInfo[1])
isMyAge()

const button = document.createElement("button");
button.classList = "button";
button.textContent = "Click me";
document.body.appendChild(button);

button.onclick = (ev)  => {
    alert("Me clickaste");
}