let num1 = 3
let num2 = 3

function sumFunction (a,b) {
    return a + b
}

console.log(`Funcion normal: ${sumFunction(num1, num2)}`)

const sumAnonima = function(a,b) {return a+b}

console.log(`Funcion anonima: ${sumAnonima(num1, num2)}`)

const sumFlecha = (a,b) => {
    return a+b
}

console.log(`Funcion flecha: ${sumFlecha(num1, num2)}`)

const array = [1,2,3,5,7,9]
let arrayToString = array.toString()
let arrayJoin = array.join(";")


console.log(array)

// Metodos para array a string
console.log(arrayToString)
console.log(arrayJoin)


//Metodos para agregar-eliminar elementos
array.push(12)
console.log(array.toString())

array.pop()
console.log(array.toString())

//array.shift()
//console.log(array.toString())

// array[3] = 13
// console.log(array)

//array.splice(4, 2, null, "Hola", true)
//console.log(array)

function despedida() {
    console.log("Adios")
}

function bienvenida(callback) {
    console.log("Hola")
    console.log("-------")
    callback();
}

bienvenida(despedida)

// console.log(array)

array.forEach((element, index) => {
    console.log(`Mi valor es ${element} y mi indice es ${index}`)
})


let filteredArray = array.filter(element => element > 3)

console.log(filteredArray)

let mappedArray = array.map(element => 
    Math.sqrt(element)
)
console.log(mappedArray)


let exist = array.includes(9)
console.log(exist)

let newArray = ["Javazzz", "KotlinGOD", "JavaScript"]
// let existLanguage = newArray.includes("C++")
// console.log(existLanguage)

let array2 = array.concat(newArray)
console.log(array2)