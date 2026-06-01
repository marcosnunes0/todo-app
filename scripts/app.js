const addTaskButton = document.getElementById('add-task-btn');
const categoriesButton = document.getElementById('categories-btn');
const tasksListGrid = document.getElementById('js-tasks-list-grid');

function initApp() {
    renderTasks(tasks);

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

    if (tasksListGrid) {
        tasksListGrid.addEventListener('click', (e) => {
            const deleteButton = e.target.closest('.delete-btn');
            const editButton = e.target.closest('.edit-btn');

            if (deleteButton) {
                const taskId = deleteButton.dataset.taskId;
                deleteTask(tasks, taskId);
                renderTasks(tasks);
            }

            if (editButton) {
                const taskId = editButton.dataset.taskId;
                const task = tasks.find(task => task.id === taskId);
                renderEditTaskForm(task, categories);
                handleOverlayEvents('edit-task-overlay', 'close-edit-task-form-btn');
            }
        });
    }
};

initApp();