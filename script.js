document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    addTaskBtn.addEventListener('click', addTask);
    taskList.addEventListener('click', removeTask);
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const listItem = document.createElement('li');
            listItem.innerHTML = `${taskText} <button class="remove-task">Remove</button>`;
            taskList.appendChild(listItem);
            taskInput.value = '';

            // Add animation class
            listItem.classList.add('added');
            setTimeout(() => listItem.classList.remove('added'), 1000); // Remove class after 1 second
        }
    }

    function removeTask(e) {
        if (e.target.classList.contains('remove-task')) {
            const listItem = e.target.parentElement;

            // Add fade-out effect
            listItem.classList.add('remove');
            listItem.addEventListener('transitionend', () => listItem.remove());
        }
    }
});
