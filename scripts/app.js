const addTaskButton = document.getElementById('add-task-btn');
const addCategoryButton = document.getElementById('add-category-btn');

function initApp() {
    renderTasks(tasks);

    const editTaskButton = document.querySelectorAll('.edit-btn');

    addTaskButton.addEventListener('click', () => {
        renderAddTaskForm(categories);
        handleOverlayEvents();
    });

    addCategoryButton.addEventListener('click', () => {
        renderAddCategoryForm();
        handleOverlayEvents();
    });

    editTaskButton.forEach((button) => {
        button.addEventListener('click', () => {
            const taskId = button.dataset.taskId;
            const task = tasks.find(task => task.id === taskId);
            renderEditTaskForm(task, categories);
            handleOverlayEvents();
        });
    });
};

initApp();