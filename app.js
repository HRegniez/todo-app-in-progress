//Selectors
const todoIn = document.querySelector('.todo_in');
const todoBtn = document.querySelector('.todo_btn');
const todoList = document.querySelector('.todo_list');

//Event Listeners
todoBtn.addEventListener('click', addTodo);

//Functions
function addTodo(event){
    //prevent default
    event.preventDefault();

    //Todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //Li
    const newTodo = document.createElement('li');
    newTodo.innerText = 'hello';
    newTodo.classList.add('todo_item');

    todoDiv.appendChild(newTodo);

    //Check btn
    const completedBtn = document.createElement('button');
    completedBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    completedBtn.classList.add("completed_btn");

    todoDiv.appendChild(completedBtn)

    //Bin btn
    const binBtn = document.createElement('button');
    binBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    binBtn.classList.add("bin_btn");

    todoDiv.appendChild(binBtn);

    //Append to list
    todoList.appendChild(todoDiv);
}
