let input = document.getElementById('todo');
let button = document.getElementById('Btn');
let todoContainer = document.querySelector('.to-dos');

// Function to create a new to-do item
function createTodoItem(text) {
    let todoItem = document.createElement('div');
    todoItem.classList.add('todo-item');
    todoItem.style.margin = "15px";
    todoItem.style.padding = "11px";
    todoItem.style.border = "0.5px solid white";
    todoItem.style.borderRadius = "15px";

    let todoText = document.createElement('span');
    todoText.textContent = text;

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = '✖';
    deleteBtn.style.marginLeft = "50px";
    deleteBtn.style.borderRadius="50px";
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => {
        todoContainer.removeChild(todoItem);
        removeTodoFromLocalStorage(text); // Remove from local storage
    });

    todoItem.appendChild(todoText);
    todoItem.appendChild(deleteBtn);

    todoContainer.appendChild(todoItem);
}

// Function to save to-do item to local storage
function saveTodoToLocalStorage(todo) {
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Function to remove to-do item from local storage
function removeTodoFromLocalStorage(todo) {
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos = todos.filter(t => t !== todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Load all to-dos from local storage when page loads
window.addEventListener('load', () => {
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.forEach(todo => {
        createTodoItem(todo);
    });
});

// Event listener for adding a new to-do item
button.addEventListener('click', () => {
    if (input.value === '') {
        alert("Please enter a valid item");
    } else {
        createTodoItem(input.value);
        saveTodoToLocalStorage(input.value); // Save to local storage
        input.value = '';
    }
});
