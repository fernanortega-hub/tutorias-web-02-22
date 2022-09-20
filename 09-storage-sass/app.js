// const person = {
//     name: "Fernando",
//     languages: [
//         "Java",
//         "Javascript",
//         "Kotlin",
//         "Typescript"
//     ]
// }

// localStorage.setItem("name", person.name);

// console.log(localStorage.getItem("name"));

// localStorage.setItem("languages", person.languages.toString())

// localStorage.removeItem("languages")
// localStorage.clear() // eliminar todos

// sessionStorage.setItem("name", person.name);

// console.log(sessionStorage.getItem("name"));

// const dateinUTC = new Date()
// dateinUTC.setTime(dateinUTC.getTime() + (3*24*60*60*1000))

// document.cookie = `username=${person.name}; expires=${dateinUTC}`;


const button = document.getElementById('add-task');
const inputTask = document.getElementById('tarea');
const container = document.getElementById("container-tasks");





button.onclick = (ev) => {
    if (localStorage.getItem("todos") === null) {
        var todos = [];
        localStorage.setItem("todos", JSON.stringify(todos))
    }

    todos = JSON.parse(localStorage.getItem('todos'))
    
    if(inputTask.value === "") {
        alert("Agrega texto a la tarea")
    } else {
        const div = document.createElement("div");
        container.classList.remove("hidden")
        todos.push(inputTask.value)
        localStorage.setItem('todos', JSON.stringify(todos))
        // div.textContent = todos[0]
        container.appendChild(div)
    }
}

