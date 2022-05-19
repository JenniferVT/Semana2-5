const inputTask = document.getElementById("inputTask");
const selectSubject = document.getElementById("selectSubject");
const inputSubject = document.getElementById("inputSubject");
const buttonAdd = document.getElementById("buttonAdd");
const ulTasks = document.getElementById("ulTasks");
const divMessage = document.getElementById("divMessage");
const divSummary = document.getElementById("divSummary");

const tasks = [];

selectSubject.addEventListener("change", (event) => {
    console.log(event);
    console.log(selectSubject.value);
    if (selectSubject.value == 5) {
        inputSubject.classList.add("show");
        inputSubject.classList.remove("hide");
        inputSubject.focus();
    } else {
        inputSubject.classList.add("hide");
        inputSubject.classList.remove("show");
    }
});

buttonAdd.addEventListener("click", (event) => {
    if (inputTask.value == "") {
        showMessage("Agrega el nombre de la tarea");
        inputTask.focus();
    } else {
        hideMessage();
        if (selectSubject.value == 5) {
            if (inputSubject.value == "") {
                showMessage("Agrega el nombre de la materia");
                inputSubject.focus();
            } else {
                tasks.push({
                    task: inputTask.value,
                    subject: inputSubject.value,
                    order: tasks.length - 1,
                    isDone: false
                });
            }
        } else {
            tasks.push({
                task: inputTask.value,
                subject: selectSubject.options[selectSubject.selectedIndex].text,
                order: tasks.length - 1
            });
        }
    }
    showTasks();
});

function showMessage(message) {
    divMessage.innerHTML = message;
    divMessage.classList.add("show");
    divMessage.classList.remove("hide");
}

function hideMessage() {
    divMessage.classList.add("hide");
    divMessage.classList.remove("show");
}

function showTasks() {
    ulTasks.innerHTML = "";
    let tasksDone = 0
    for (var i = 0; i < tasks.length; i++) {
        const liTask = document.createElement("li");
        const divTask = document.createElement("div");

        if (tasks[i].isDone) {
            tasksDone = tasksDone + 1;
            divTask.classList.add("done");
        } else
            divTask.classList.add("task");

        const buttonMoveTaskUp = document.createElement("button");
        buttonMoveTaskUp.innerHTML = "Arriba";
        buttonMoveTaskUp.classList.add("button");
        buttonMoveTaskUp.index = i;
        buttonMoveTaskUp.addEventListener("click", (event) => {
            alert("click en arriba");
        });
        divTask.appendChild(buttonMoveTaskUp);

        const buttonMoveTaskDown = document.createElement("button");
        buttonMoveTaskDown.innerHTML = "Abajo";
        buttonMoveTaskDown.classList.add("button");
        buttonMoveTaskDown.index = i;
        buttonMoveTaskDown.addEventListener("click", (event) => {
            alert("click en abajo");
        });
        divTask.appendChild(buttonMoveTaskDown);

        const buttonTaskDone = document.createElement("button");
        if (tasks[i].isDone) {
            buttonTaskDone.innerHTML = "Marcar como no acabado";
        } else {
            buttonTaskDone.innerHTML = "Marcar como acabado";
        }
        buttonTaskDone.classList.add("button");
        buttonTaskDone.index = i;
        buttonTaskDone.addEventListener("click", (event) => {
            tasks[buttonTaskDone.index].isDone = !tasks[buttonTaskDone.index].isDone;
            showTasks();
        });
        divTask.appendChild(buttonTaskDone);

        const buttonTaskDelete = document.createElement("button");
        buttonTaskDelete.innerHTML = "Eliminar";
        buttonTaskDelete.classList.add("button");
        buttonTaskDelete.index = i;
        buttonTaskDelete.addEventListener("click", (event) => {
            tasks.splice(buttonTaskDelete.index, 1);
            showTasks();
        });
        divTask.appendChild(buttonTaskDelete);

        divTask.appendChild(document.createTextNode(`${tasks[i].subject}: ${tasks[i].task}`));
        liTask.appendChild(divTask);
        ulTasks.appendChild(liTask);
    }
    divSummary.innerHTML = `${tasksDone} tarea(s) acabada(s) de ${tasks.length}`;
    // for (let i = 0; i < tasks.length; i++) {
    //     const liTask = document.createElement("li");
    //     const divTask = document.createElement("div");

    //     divTask.classList.add("task");
    //     divTask.appendChild(document.createTextNode(tasks[i].order));

    //     divTask.appendChild(document.createTextNode(tasks[i].task));

    //     divTask.appendChild(document.createTextNode(tasks[i].subject));





    //     liTask.appendChild(divTask);
    //     ulTasks.appendChild(liTask);
    // }
}

// var agregarTarea = function() {
//     if (tarea === "")
//         alert("Agregar tarea");
//     return false;
// };
// //Agregar tarea

// agregar.addEventListener("click", (evento) => {
//     lista.innerHTML += '<li>' + input.value + '<button class="boton">Borrar</button></li>';
// });
// //Borrar tarea
// lista.addEventListener("click", (evento) => {
//     if (evento.target.className === 'boton') {
//         evento.target.parentElement.outerHTML = '';
//     }
// });
// //comprobar input
// input.addEventListener("click", comprobarInput);