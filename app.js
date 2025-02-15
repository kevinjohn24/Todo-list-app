document.getElementById('add-task').addEventListener('click', function() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const taskItem = document.createElement('li');
    taskItem.innerHTML = `${taskText} <button>Delete</button>`;

    taskItem.querySelector('button').addEventListener('click', function() {
        taskItem.remove();
    });

    document.getElementById('task-list').appendChild(taskItem);
    taskInput.value = "";
});

document.getElementById('new-task').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('add-task').click();
    }
});
