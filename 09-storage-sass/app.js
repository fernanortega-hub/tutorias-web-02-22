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
const taskNumber = document.getElementById("task-number");
let todos = [];
// let otro = ["hola", 1, true];
// let otro2 = JSON.stringify(otro);
// console.log(otro)
// console.log(otro2)
// console.log(JSON.parse(otro2))


function showTask() {
    let getTodos = localStorage.getItem("todos");

    if (getTodos === null) {
        todos = []
    } else {
        todos = JSON.parse(getTodos)

        if (todos.length > 0) {
            container.classList.remove("hidden")
        } else {
            container.classList.add("hidden")
        }

        let div = "";

        todos.forEach((element, index) => {
            div +=
                `<div class="task">
                <input id=${index} type="checkbox" class="check-task" onclick="checkTask(${index})"/>
                ${element}
                <div> 
                    <button class="edit-task" onclick="editTask(${index})"> 
                    <span class="material-symbols-outlined">
                    edit
                    </span> 
                </button>
                <button class="delete-task" onclick="deleteTask(${index})"> 
                    <span class="material-symbols-outlined">
                    delete
                    </span> 
                </button>
                    </div>
            </div>`;
        });

        todos.length === 1 
        ? 
            taskNumber.textContent = `Tienes ${todos.length} tarea pendiente` 
            : 
            taskNumber.textContent = `Tienes ${todos.length} tareas pendientes`
        

        container.innerHTML = div;

    }

}

showTask()

button.onclick = (ev) => {

    if (localStorage.getItem("todos") === null) {
        localStorage.setItem("todos", JSON.stringify(todos))
    }

    todos = JSON.parse(localStorage.getItem('todos'))

    if (inputTask.value === "") {
        alert("Agrega texto a la tarea")
    } else {

        todos.push(inputTask.value)
        localStorage.setItem('todos', JSON.stringify(todos));
        inputTask.value = ""
        showTask();
    }
}

function deleteTask(index) {
    let getTodos = localStorage.getItem("todos");

    todos = JSON.parse(getTodos);

    todos.splice(index, 1);

    localStorage.setItem('todos', JSON.stringify(todos))

    showTask();
}

function checkTask(id) {
    const checkbox = document.getElementById(id)

    if (checkbox.checked) {
        console.log("Activado")
        checkbox.parentElement.classList.add("checked")

    } else {
        console.log("Desactivado")
        checkbox.parentElement.classList.remove("checked")

    }
}


function editTask(position) {
    let getTodos = localStorage.getItem("todos");
    todos = JSON.parse(getTodos);

    inputTask.value = todos[position];

    if(inputTask.value === "") {
        alert("Agrega texto")
    } else {
        todos[position] = inputTask.value;
    }
    showTask();

}

