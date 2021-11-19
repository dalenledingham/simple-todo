let inputField = document.querySelector(".new-todo");
let createBtn = document.querySelector(".create-btn");
let todoList = document.querySelector(".todo-list");

createBtn.addEventListener("click", createTodo);
todoList.addEventListener("click", buttonCheck);

function createTodo(event) {
    event.preventDefault();
    if (inputField.value === "") {
        return null;
    }
    let todoDiv = document.createElement("div");
    todoDiv.classList.add("todo-item");
    let todoText = document.createElement("li");
    todoText.innerText = inputField.value;
    todoDiv.appendChild(todoText);

    let completeBtn = document.createElement("span");
    completeBtn.innerHTML = "<img src='images/complete.png' alt='complete' class='complete-btn'>";
    todoDiv.appendChild(completeBtn);
    
    let deleteBtn = document.createElement("span");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerHTML = "<img src='images/delete.png' alt='delete' class='delete-btn'>";
    todoDiv.appendChild(deleteBtn);

    todoList.appendChild(todoDiv);
    inputField.value = "";
}

function buttonCheck(event) {
    let item = event.target;
    if (item.classList[0] === "delete-btn") {
        let todo = item.parentElement.parentElement; // item (button) --> span --> div
        todo.remove();
    }
    if (item.classList[0] === "complete-btn") {
        let todo = item.parentElement.parentElement; // item (button) --> span --> div
        todo.classList.toggle("completed");
    }
}