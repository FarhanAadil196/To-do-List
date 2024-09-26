let input = document.getElementById('todo');
let button = document.getElementById('Btn');
let todoContainer = document.querySelector('.to-dos');

button.addEventListener('click', () => {
    if (input.value === '') {
        alert("Please enter a valid item");
    } else {
        let todoItem = document.createElement('div');
        todoItem.classList.add('todo-item');
        todoItem.style.margin = "15px";
        todoItem.style.padding = "11px";
        todoItem.style.border = "0.5px solid white";

        todoItem.style.borderRadius = "15px";

        let todoText = document.createElement('span');
        todoText.textContent = input.value;

        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = '✖';
        deleteBtn.style.marginLeft = "50px";
        deleteBtn.style.borderRadius="50px";
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', () => {
            todoContainer.removeChild(todoItem);
        });

        todoItem.appendChild(todoText);
        todoItem.appendChild(deleteBtn);

        todoContainer.appendChild(todoItem);

        input.value = '';
    }
});