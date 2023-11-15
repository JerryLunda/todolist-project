let header, input_task, btn_add, error_message;
let contenair_task = document.querySelector(".container-task")

header = document.querySelector("header");
input_task = document.querySelector(".form-task__input")


btn_add = document.querySelector("#add-button");


error_message = document.querySelector(".error-message");
error_message.setAttribute("style", "display:none") 

let array_task 

if (getData() <= 0) {
    array_task = getData()
    showTasks()
} else {
    array_task = []
}

function addTasks(ptask) {
    if (ptask.length > 3 ) {
        let task = new Object()
        task.name = ptask.toUpperCase()
        task.completed = false
        array_task.push(task)
        input_task.value = ""
        saveData(array_task)
        showTasks(getData())
        error_message.setAttribute("style", "display:none")
    }else{
        error_message.setAttribute("style", "display:block")
    }
    
}


function showTasks(tasks) {
    for (let index = 0; index < tasks.length; index++) {
        
        let div_task = document.createElement("div");
        div_task.setAttribute("class", "container-task__task-list")
        let hr_task = document.createElement("hr");

        let span_num_task = document.createElement("span")
        span_num_task.setAttribute("class", "num_span police-span")
        let span_name_task = document.createElement("span")
        span_name_task.setAttribute("class", "police-span")

        let button_complete = document.createElement("button")
        button_complete.setAttribute("class", "fa-solid fa-square")
        button_complete.setAttribute("id", "btn-ico-valide")

        let button_delete = document.createElement("button")
        button_delete.setAttribute("class", "fa-solid fa-trash")
        button_delete.setAttribute("id", "btn-ico-delete")


        span_num_task.innerText = index+1;
        span_name_task.innerText = tasks[index]["name"]
        div_task.appendChild(span_num_task)
        div_task.appendChild(span_name_task)
        div_task.appendChild(button_complete)
        div_task.appendChild(button_delete)
        contenair_task.appendChild(div_task)
        contenair_task.appendChild(hr_task)
    }
}

function saveData(array_tasks) {
    localStorage.setItem("task", JSON.stringify(array_tasks));
}

function getData() {
    return JSON.parse(localStorage.getItem("task"))
}

btn_add.addEventListener("click", ()=>{
    addTasks(input_task.value)
    contenair_task.innerHTML = ""
    showTasks()
})

