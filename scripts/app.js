const addTaskButton = document.getElementById('add-task-btn');
const categoriesButton = document.getElementById('categories-btn');

function initApp() {
    renderTasks(tasks);

    const editTaskButton = document.querySelectorAll('.edit-btn');

    addTaskButton.addEventListener('click', () => {
        renderAddTaskForm(categories);
        handleOverlayEvents('add-task-overlay', 'close-add-task-form-btn');

        const addTaskSubmitButton = document.getElementById('js-add-task-submit-btn');

        addTaskSubmitButton.addEventListener('click', (e) => {
            e.preventDefault();

            const title = document.getElementById('task-title-input').value;
            const priority = document.getElementById('task-priority-select').value;
            const category = document.getElementById('task-category-select').value;
            const dueDate = document.getElementById('task-date-input').value;

            addTask(title, priority, category, dueDate);
            renderTasks(tasks);
            
            const overlay = document.getElementById('add-task-overlay');
            overlay.classList.add('hidden');
        });
    });

    categoriesButton.addEventListener('click', () => {
        renderCategories(categories);
        handleOverlayEvents('categories-overlay', 'close-categories-btn');

        const addCategoryButton = document.getElementById('add-category-btn');

        addCategoryButton.addEventListener('click', () => {
            const overlay = document.getElementById('categories-overlay');
            overlay.classList.add('hidden');
            
            renderAddCategoryForm();
            handleOverlayEvents('add-category-overlay', 'close-add-category-form-btn');
        });
    });

    editTaskButton.forEach((button) => {
        button.addEventListener('click', () => {
            const taskId = button.dataset.taskId;
            const task = tasks.find(task => task.id === taskId);
            renderEditTaskForm(task, categories);
            handleOverlayEvents('edit-task-overlay', 'close-edit-task-form-btn');
        });
    });
};

initApp();