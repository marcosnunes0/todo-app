const addTaskButton = document.getElementById('add-task-btn');
const addCategoryButton = document.getElementById('add-category-btn');

function initApp() {
    renderTasks(tasks);

    addTaskButton.addEventListener('click', () => {
        renderAddTaskForm(categories);
        handleOverlayEvents();
    });

    addCategoryButton.addEventListener('click', () => {
        renderAddCategoryForm();
        handleOverlayEvents();
    });
};

initApp();