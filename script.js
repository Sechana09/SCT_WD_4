const taskList = document.getElementById('taskList');

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskDateInput = document.getElementById('taskDate');

    const taskText = taskInput.value.trim();
    const taskDate = taskDateInput.value;

    if (taskText === '') {
        alert("Please enter a task.");
        return;
    }

    const task = document.createElement('div');
    task.classList.add('task');

    const taskInfo = document.createElement('div');
    taskInfo.classList.add('task-info');

    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;

    const taskDueDate = document.createElement('span');
    taskDueDate.classList.add('task-date');
    taskDueDate.textContent = `Due: ${new Date(taskDate).toLocaleString()}`;

    taskInfo.appendChild(taskContent);
    taskInfo.appendChild(taskDueDate);

    const taskActions = document.createElement('div');
    taskActions.classList.add('task-actions');

    // Complete Button
    const completeButton = document.createElement('button');
    completeButton.textContent = "Complete";
    completeButton.onclick = () => {
        task.classList.toggle('completed');
    };

    // Edit Button
    const editButton = document.createElement('button');
    editButton.textContent = "Edit";
    editButton.onclick = () => editTask(task, taskContent, taskDueDate);

    // Delete Button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => taskList.removeChild(task);

    taskActions.appendChild(completeButton);
    taskActions.appendChild(editButton);
    taskActions.appendChild(deleteButton);

    task.appendChild(taskInfo);
    task.appendChild(taskActions);

    taskList.appendChild(task);

    taskInput.value = '';
    taskDateInput.value = '';
}

function editTask(task, taskContent, taskDueDate) {
    const newTaskText = prompt("Edit task:", taskContent.textContent);
    const newTaskDate = prompt("Edit due date (YYYY-MM-DDTHH:MM):", taskDueDate.textContent.replace('Due: ', ''));
    
    if (newTaskText !== null) {
        taskContent.textContent = newTaskText.trim() || taskContent.textContent;
    }
    
    if (newTaskDate) {
        const date = new Date(newTaskDate);
        if (!isNaN(date.getTime())) {
            taskDueDate.textContent = `Due: ${date.toLocaleString()}`;
        } else {
            alert("Invalid date format.");
        }
    }
}
