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


todos = [];


addBtn.addEventListener('click', function (e) {
    e.preventDefault();
    let input = document.querySelector('#new-todo');
    if (checkbox.checked) {
        console.log(input.value);
        alert('It is a priority')
    } else {
        console.log(input.value);
        alert('It is not a priority')
    }

})

// function items() {

// }
// items.push(todos)