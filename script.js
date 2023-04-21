// Create an array to store todos.
// Add an event listener to the form for adding new todos, which pushes the new todo to the array and updates the list.
// Add event listeners to the checkboxes for marking todos as complete, which updates the todo's status in the array and on the list.
// Add event listeners to the delete buttons for deleting todos from the array and the list.
// Add event listeners to the filter buttons for displaying todos based on their status.
// Add an event listener to the clear button for removing all completed todos from the array and the list.
// Add an event listener to the toggle button for switching between light and dark mode.
// Use JavaScript to enable drag and drop functionality for reordering items on the list(bonus).


// Add eventlistener to the theme toggle button to change themes
let bgImg = document.querySelector('.bg-img');
let themeBtn = document.querySelector('#theme');
let body = document.querySelector('body');
let inputGroup = document.querySelector('.input-group');
let todoItem = document.querySelector('.todo-item');
let todoBottom = document.querySelector('.todo-bottom');
let addBtn = document.querySelector('.addbtn');
let input = document.getElementById('#new-todo');
let checkbox = document.querySelector('.check-box');
let todoForm = document.querySelector('form');
let todoInput = document.getElementById('new-todo');
let todoList = document.querySelector('.todo-items');
let todoItems = document.querySelector('.todo-items');
let deleteBtn = document.querySelector('deletebtn');
// let inputValue = input.target.value;


themeBtn.addEventListener('click', function () {
    if (bgImg.style.backgroundImage === 'url("./images/bg-desktop-dark.jpg")') {
        bgImg.style.backgroundImage = 'url("./images/bg-desktop-light.jpg")';
        themeBtn.innerHTML = '<img src="images/icon-moon.svg" alt="Toggle theme">';
        body.style.backgroundColor = 'var(--light-grayish-blue)';
        inputGroup.style.backgroundColor = 'var(--light-grayish-blue)';
        todoItem.style.backgroundColor = 'var(--light-grayish-blue)';
        todoItem.style.borderBottom = 'none';
        todoBottom.style.backgroundColor = 'var(--light-grayish-blue)';
    } else {
        bgImg.style.backgroundImage = 'url("./images/bg-desktop-dark.jpg")';
        themeBtn.innerHTML = '<img src="images/icon-sun.svg" alt="Toggle theme">';
        body.style.backgroundColor = 'var(--dark-blue)';
        inputGroup.style.backgroundColor = 'var(--darker-desaturated-blue)';
        todoItem.style.backgroundColor = 'var(--darker-desaturated-blue)';
        todoItem.style.borderBottom = '1px solid var(--dark-grayish-blue-dark)';
        todoBottom.style.backgroundColor = 'var(--darker-desaturated-blue)';
    }
});

let todoCount = 0;
const todos = [];

// deleteBtn.addEventListener('click', function () {
//     todoList.removeChild(newTodoItem)
// })


function addTodoToLibrary() {

}

todoForm.addEventListener('submit', addItems)


function addItems(event) {
    event.preventDefault();

    let inputValue = todoInput.value.trim();

    if (inputValue !== '') {

        let newTodoItem = document.createElement('li');
        newTodoItem.classList.add('todo-item');

        let itemCheckbox = document.createElement('div');
        itemCheckbox.classList.add('item-checkbox');
        itemCheckbox.innerHTML = '<input type="checkbox" class="checkbox"><label></label>';
        newTodoItem.appendChild(itemCheckbox);

        let itemText = document.createElement('div');
        itemText.classList.add('item-text');
        itemText.innerHTML = '<p>' + inputValue + '</p>';
        newTodoItem.appendChild(itemText);

        let itemDelete = document.createElement('div');
        itemDelete.classList.add('item-delete');
        itemDelete.innerHTML = '<button aria-label="Delete todo" class="deletebtn"><img src="./images/icon-cross.svg" alt="Delete todo"></button>';
        newTodoItem.appendChild(itemDelete);

        todoList.appendChild(newTodoItem);
        const todo = {
            text: inputValue,
            completed: false
        };
        if (checkbox.checked) {
            todo.completed = true;
        } else true;

        todos.push(todo);
        console.log(todos)

        todoInput.value = ''; // clear the input field
    }
};


//Push all my todoitems to my array


//Delete Todo

// function items() {

// }
// items.push(todos)