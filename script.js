const taskBtn = document.querySelector("#taskBtn");
const taskList = document.querySelector("#taskList");
const taskInput = document.querySelector("#taskInput");
const clearAllBtn = document.querySelector("#clearAllBtn");
const clearCompletedBtn = document.querySelector("#clearCompletedBtn");
const taskCounter = document.querySelector("#taskCounter");

function updateCounter() {
    const totalTasks = document.querySelectorAll("li").length;
    const completedTasks = document.querySelectorAll(".completed").length;
    taskCounter.textContent = `${completedTasks} de ${totalTasks} tarefas concluídas`;
}

function addTask() {
    const taskInputValue = taskInput.value.trim();
    
    if (taskInputValue === '') return;

    const li = document.createElement('li');
    
    const span = document.createElement('span');
    span.textContent = taskInputValue;
    
    span.addEventListener('click', function() {
        li.classList.toggle('completed');
        updateCounter();
    });

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Editar';
    editBtn.style.marginLeft = "10px";
    editBtn.addEventListener('click', function() {
        const newValue = prompt("Edite sua tarefa:", span.textContent);
        if (newValue !== null && newValue.trim() !== "") {
            span.textContent = newValue;
        }
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Excluir';
    deleteBtn.addEventListener('click', function() {
        li.remove();
        updateCounter();
    });

    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);


    taskInput.value = '';
    taskInput.focus();
    
    updateCounter();
}

taskBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

clearAllBtn.addEventListener("click", function() {
    taskList.innerHTML = '';
    updateCounter();
});

clearCompletedBtn.addEventListener("click", function() {
    const completedItems = document.querySelectorAll(".completed");
    completedItems.forEach(item => item.remove());
    updateCounter();
});