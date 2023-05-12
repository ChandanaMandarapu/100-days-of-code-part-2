const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');
const productivityImage = document.getElementById('productivity-image');

let tasks = [];

function addTask(task) {
  const li = document.createElement('li');
  li.innerText = task.name;
  if (task.completed) {
    li.classList.add('checked');
  }
  const button = document.createElement('button');
  button.innerText = 'Delete';
  button.addEventListener('click', () => {
    deleteTask(task);
  });
  li.appendChild(button);
  li.addEventListener('click', () => {
    toggleTask(task);
  });
  taskList.appendChild(li);
}

function toggleTask(task) {
  task.completed = !task.completed;
  renderTasks();
}

function deleteTask(task) {
  const index = tasks.indexOf(task);
  if (index > -1) {
    tasks.splice(index, 1);
    renderTasks();
  }
}

function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach(task => {
    addTask(task);
  });
}

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
  const storedTasks = localStorage.getItem('tasks');
  if (storedTasks) {
    tasks = JSON.parse(storedTasks);
    renderTasks();
  }
}

addTaskBtn.addEventListener('click', () => {
  const taskName = taskInput.value.trim();
  if (taskName !== '') {
    const task = {
      name: taskName,
      completed: false
    };
    tasks.push(task);
    addTask(task);
    taskInput.value = '';
    saveTasks();
  }
});

productivityImage.style.backgroundImage = 'url("https://images.unsplash.com/photo-1596003906949-67221c37965c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI4fHxwcm9kdWN0aXZpdHklMjB3b3JrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60")';

loadTasks();
