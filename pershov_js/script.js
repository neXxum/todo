const ENTER = 'Enter';

const addButton = document.querySelector('#button-add');
const addInput = document.querySelector('.input-todo');
const elemList = document.querySelector('#elem-list');

let todos = [];
let count = 0;

const createTodo = () => {
    if (!addInput.value) return;

    let obj = {
        text: addInput.value,
        status: false,
        id: Date.now(),
    };
    todos.push(obj);

    console.log(todos);
    addInput.value = '';

    render();
}

const render = () => {
    let todoList = '';
    let startLiItem = `<li class="first-li"><div class="check-all"><input type="checkbox" class="first-checkbox" id="checked-all" /><label for="checked-all" class="checked-all-label"></label></div><div class="text-check-all"><p>Your todos:</p></div><div class="delete-select"><button>X</button> </div></li>`;

    count++

    todos.forEach(element => {
        todoList += `<li><div class="check-input"><input type="checkbox" class="completed" id="completed-${count}"/><label for="completed-${count}" class="completed-label"></label></div><div class="text-element"><p>${element.text}</p></div><div class="button-delete"><button id="delete-${count}">X</button></div></li>`;
    })

    elemList.setAttribute("todo-list", todoList);
    elemList.innerHTML = startLiItem + todoList;
}



const handleClick = (event) => {
    if (event.key === ENTER) {
        createTodo();
    }
}

const choiceFunction = (event) => {
    const elemId = event.path[0].id;
    // const elemNumber;
    const check = event.path[0].checked

    console.log(event.path[0].id)

    switch (elemId[0]) {
        case 'c':
        // todos[]
        case 'd':

        default:
            return
    }
}

addButton.addEventListener('click', createTodo);
addInput.addEventListener('keydown', handleClick);
elemList.addEventListener('click', choiceFunction);