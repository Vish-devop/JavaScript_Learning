
const todoList = document.getElementById('todo-list');
const newTaskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');


let tasks = [];

// Loading tasks from local storage if available
const storedTasks = JSON.parse(localStorage.getItem('todoList'));
if (storedTasks) {
  tasks = storedTasks;
  renderTodoList();
}

// Function for rendering the todo list
function renderTodoList() {
  todoList.innerHTML = ''; 
  for (let i = 0; i < tasks.length; i++) {
    const taskItem = document.createElement('li');
    taskItem.textContent = tasks[i];
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      tasks.splice(i, 1);
      renderTodoList(); // Update the list after deletion
      storeTasksInLocalStorage(); // Update local storage
    });
    taskItem.appendChild(deleteButton);
    todoList.appendChild(taskItem);
  }
}

// Function to add a new task
addTaskButton.addEventListener('click', () => {
  const newTask = newTaskInput.value.trim();
  if (newTask) {
   
    tasks.push(newTask);
   
    renderTodoList();
    newTaskInput.value = ''; 
    storeTasksInLocalStorage(); 
  }
});
