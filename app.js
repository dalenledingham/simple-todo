let inputField = document.getElementById("new-todo");
let createBtn = document.getElementById("create-btn");
let todoList = document.getElementById("todo-list");

createBtn.addEventListener("click", createTodo);

function createTodo(event) {
    event.preventDefault();
    if (inputField.value === "") {
        return null;
    }
    let todoDiv = document.createElement("div");
    todoDiv.className = "todo-item";
    let todoText = document.createElement("li");
    todoText.innerText = inputField.value;
    todoDiv.appendChild(todoText);

    let completeBtn = document.createElement("span");
    completeBtn.className = "complete-btn";
    completeBtn.innerHTML = "<img src='images/complete.png' alt='complete'>";
    todoDiv.appendChild(completeBtn);
    
    let deleteBtn = document.createElement("span");
    deleteBtn.className = "delete-btn";
    deleteBtn.innerHTML = "<img src='images/delete.png' alt='delete'>";
    todoDiv.appendChild(deleteBtn);

    todoList.appendChild(todoDiv); 
}