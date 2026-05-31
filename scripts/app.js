const addTaskButton = document.getElementById('add-task-btn');
const categoriesButton = document.getElementById('categories-btn');

function initApp() {
    renderTasks(tasks);

    const editTaskButton = document.querySelectorAll('.edit-btn');

    addTaskButton.addEventListener('click', () => {
        renderAddTaskForm(categories);
        handleOverlayEvents();
    });

    categoriesButton.addEventListener('click', () => {
        renderCategories(categories);
        handleOverlayEvents();

        const addCategoryButton = document.getElementById('add-category-btn');

        addCategoryButton.addEventListener('click', () => {
            const overlay = document.getElementById('blur-overlay');
            overlay.classList.add('hidden');
            
            renderAddCategoryForm();
            handleOverlayEvents();
        });
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