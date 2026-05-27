const addTaskButton = document.getElementById('add-task-btn');

function initApp() {
    renderTasks(tasks);

    addTaskButton.addEventListener('click', () => {
        renderAddTaskForm(categories);

        const overlay = document.getElementById('blur-overlay');
        const closeFormButton = document.getElementById('close-form-btn');

        closeFormButton.addEventListener('click', () => {
            overlay.classList.add('hidden');
        });

        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.classList.add('hidden');
            }
        });
    });
};

initApp();