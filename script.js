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
let checkbox = document.querySelector('.check-box');
let todoForm = document.querySelector('form');
let todoInput = document.getElementById('new-todo');
let todoList = document.querySelector('.todo-items');
let attribution = document.querySelector('.attribution');
let deleteBtn = document.querySelector('deletebtn');
let priority = document.querySelector('#priority')
let itemCheckbox = document.querySelector('.checkbox');
let remain = document.querySelector('.remain');
let filters = document.querySelector('.filters');
let all = document.querySelector('.all');
let active = document.querySelector('.activebtn');
let completed = document.querySelector('li .complete');
let clear = document.querySelector('.clear');


themeBtn.addEventListener('click', function () {
    if (bgImg.style.backgroundImage === 'url("./images/bg-desktop-dark.jpg")') {
        bgImg.style.backgroundImage = 'url("./images/bg-desktop-light.jpg")';
        themeBtn.innerHTML = '<img src="images/icon-moon.svg" alt="Toggle theme">';
        body.style.backgroundColor = 'var(--light-grayish-blue)';
        inputGroup.style.backgroundColor = 'var(--light-grayish-blue)';
        // todoList.style.backgroundColor = 'var(--light-grayish-blue)';
        todoItem.style.backgroundColor = 'var(--light-grayish-blue)';
        todoItem.style.borderBottom = 'none';
        todoBottom.style.backgroundColor = 'var(--light-grayish-blue)';
    } else {
        bgImg.style.backgroundImage = 'url("./images/bg-desktop-dark.jpg")';
        themeBtn.innerHTML = '<img src="images/icon-sun.svg" alt="Toggle theme">';
        body.style.backgroundColor = 'var(--dark-blue)';
        inputGroup.style.backgroundColor = 'var(--darker-desaturated-blue)';
        // todoList.style.backgroundColor = 'var(--darker-desaturated-blue)';
        todoItem.style.backgroundColor = 'var(--darker-desaturated-blue)';
        todoItem.style.borderBottom = '1px solid var(--dark-grayish-blue-dark)';
        todoBottom.style.backgroundColor = 'var(--darker-desaturated-blue)';
    }
});




class Todo {
    constructor(check, todoValue) {
        this.check = check;
        this.todoValue = todoValue;
    }
}

const todos = [];
function addTodoToLibrary(e) {
    e.preventDefault();
    const todoForm = document.querySelector('form');
    const check = todoForm.checkbox.checked;
    const todoValue = todoForm.newtodo.value;
    const newTodo = new Todo(check, todoValue)
    todos.push(newTodo);
    addItems();
    todoForm.reset();
}

todoForm.addEventListener('submit', addTodoToLibrary);
let todoCount = 0;
let allCount = 0;


function addItems() {
    for (let i = todoCount; i < todos.length; i++) {

        let inputValue = todoInput.value.trim();


        if (inputValue !== '') {

            let newTodoItem = document.createElement('li');
            newTodoItem.classList.add('todo-item');
            newTodoItem.setAttribute('draggable', 'true')

            let itemCheckbox = document.createElement('div');
            itemCheckbox.classList.add('item-checkbox');
            itemCheckbox.innerHTML = '<input type="checkbox" class="checkbox"><label></label>';
            newTodoItem.appendChild(itemCheckbox);

            let itemText = document.createElement('div');
            itemText.classList.add('item-text');
            if (checkbox.checked) {
                itemText.innerHTML = '<p>' + inputValue + '</p>';
                newTodoItem.appendChild(itemText);
                newTodoItem.style.textDecoration = 'line-through';
                itemCheckbox.innerHTML = '<input type="checkbox" class="checkbox" checked><label></label>';
                if (newTodoItem.style.textDecoration = 'line-through') {
                    itemCheckbox.addEventListener('click', () => {
                        newTodoItem.style.textDecoration = 'none';

                    })
                } else {
                    newTodoItem.style.textDecoration = 'line-through';
                }

            } else {
                itemText.innerHTML = '<p>' + inputValue + '</p>';
                newTodoItem.appendChild(itemText);
            }


            let itemDelete = document.createElement('div');
            itemDelete.classList.add('item-delete');
            itemDelete.innerHTML = '<button aria-label="Delete todo" class="deletebtn"><img src="./images/icon-cross.svg" alt="Delete todo"></button>';
            newTodoItem.appendChild(itemDelete);

            itemDelete.addEventListener('click', function () {
                todos.splice(i, 1);
                todoList.removeChild(newTodoItem);
                remaining = todos.length;
                remain.innerHTML = remaining;
            })
            let remaining = todos.length;
            remain.innerHTML = remaining;

            todoList.appendChild(newTodoItem);

            // itemCheckbox.addEventListener('click', () => {
            //     newTodoItem.style.textDecoration = 'line-through';
            // })

            console.log(todos)

            todoInput.value = ''; // clear the input field
        }
    }
};
completed.addEventListener('click', completedTodos)
active.addEventListener('click', activeTodos)
all.addEventListener('click', allTodos)
clear.addEventListener('click', () => {
    const completeTodos = todos.filter(function (todo) {
        return (todo.check === true)
    })
    completeTodos.forEach(function (todo) {
        completeTodos.splice(0, completeTodos.length)
    })
    todoList.innerHTML = ''
    console.log(completeTodos)

})



function completedTodos() {
    const completeTodos = todos.filter(function (todo) {
        return (todo.check === true)

    })
    todoList.innerHTML = ''
    completeTodos.forEach(function (todo) {
        const newTodoItem = document.createElement('li');
        newTodoItem.classList.add('todo-item');
        let itemCheckbox = document.createElement('div');
        itemCheckbox.classList.add('item-checkbox');
        itemCheckbox.innerHTML = '<input type="checkbox" class="checkbox" checked><label></label>';
        newTodoItem.appendChild(itemCheckbox);
        let itemText = document.createElement('div');
        itemText.classList.add('item-text');
        itemText.innerHTML = `<p>${todo.todoValue}</p>`;
        newTodoItem.appendChild(itemText);
        newTodoItem.style.textDecoration = 'line-through';
        let itemDelete = document.createElement('div');
        itemDelete.classList.add('item-delete');
        itemDelete.innerHTML = '<button aria-label="Delete todo" class="deletebtn"><img src="./images/icon-cross.svg" alt="Delete todo"></button>';
        newTodoItem.appendChild(itemDelete);

        itemDelete.addEventListener('click', function () {
            todos.splice(i, 1);
            todoList.removeChild(newTodoItem);
            remaining = todos.length;
            remain.innerHTML = remaining;
        })
        let remaining = todos.length;
        remain.innerHTML = remaining;

        todoList.appendChild(newTodoItem);

    });
    console.log(completeTodos)
}


function activeTodos() {
    const actTodos = todos.filter(function (todo) {
        return (todo.check === false)
    })
    todoList.innerHTML = '';
    actTodos.forEach(function (todo) {
        const newTodoItem = document.createElement('li');
        newTodoItem.classList.add('todo-item');
        let itemCheckbox = document.createElement('div');
        itemCheckbox.classList.add('item-checkbox');
        itemCheckbox.innerHTML = '<input type="checkbox" class="checkbox"><label></label>';
        newTodoItem.appendChild(itemCheckbox);
        let itemText = document.createElement('div');
        itemText.classList.add('item-text');
        itemText.innerHTML = `<p>${todo.todoValue}</p>`;
        newTodoItem.appendChild(itemText);
        newTodoItem.style.textDecoration = 'none';
        let itemDelete = document.createElement('div');
        itemDelete.classList.add('item-delete');
        itemDelete.innerHTML = '<button aria-label="Delete todo" class="deletebtn"><img src="./images/icon-cross.svg" alt="Delete todo"></button>';
        newTodoItem.appendChild(itemDelete);

        itemDelete.addEventListener('click', function () {
            todos.splice(i, 1);
            todoList.removeChild(newTodoItem);
            remaining = todos.length;
            remain.innerHTML = remaining;
        })
        let remaining = todos.length;
        remain.innerHTML = remaining;

        todoList.appendChild(newTodoItem);
    })
    console.log(actTodos)
}


function allTodos() {
    const allOfTodos = todos.filter(function (todo) {
        return (todo.check === false || todo.check === true)
    })
    todoList.innerHTML = '';
    for (let i = todoCount; i < todos.length; i++) {
        allOfTodos.forEach(function (todo) {
            const newTodoItem = document.createElement('li');
            newTodoItem.classList.add('todo-item');
            let itemCheckbox = document.createElement('div');
            itemCheckbox.classList.add('item-checkbox');

            if (todo.check == true) {
                itemCheckbox.innerHTML = '<input type="checkbox" class="checkbox" checked><label></label>';
            }
            else {
                itemCheckbox.innerHTML = '<input type="checkbox" class="checkbox"><label></label>';
            }
            newTodoItem.appendChild(itemCheckbox);
            let itemText = document.createElement('div');
            itemText.classList.add('item-text');
            itemText.innerHTML = `<p>${todo.todoValue}</p>`;
            newTodoItem.appendChild(itemText);
            if (todo.check == true) {
                newTodoItem.style.textDecoration = 'line-through';
            }
            else {
                newTodoItem.style.textDecoration = 'none';
            }

            let itemDelete = document.createElement('div');
            itemDelete.classList.add('item-delete');
            itemDelete.innerHTML = '<button aria-label="Delete todo" class="deletebtn"><img src="./images/icon-cross.svg" alt="Delete todo"></button>';
            newTodoItem.appendChild(itemDelete);

            itemDelete.addEventListener('click', function () {
                todos.splice(i, 1);
                todoList.removeChild(newTodoItem);
                remaining = todos.length;
                remain.innerHTML = remaining;
            })
            let remaining = todos.length;
            remain.innerHTML = remaining;

            todoList.appendChild(newTodoItem);
        })
    }
    console.log(allOfTodos)
}



// function allTodos() {
//     const allOfTodos = todos.filter(function (todo) {
//         return (todo.check === false || todo.check === true)
//     })
//     console.log(allOfTodos)
// }