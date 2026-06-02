const addTaskButton = document.getElementById('add-task-btn');
const categoriesButton = document.getElementById('categories-btn');
const tasksListGrid = document.getElementById('js-tasks-list-grid');
const categoriesGrid = document.getElementById('js-categories-grid');

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
            
        hiddenOverlay('add-task-overlay');
        });
    });

    if (tasksListGrid) {
        tasksListGrid.addEventListener('click', (e) => {
            const deleteButton = e.target.closest('.delete-btn');
            const editButton = e.target.closest('.edit-btn');
            const checkBox = e.target.closest('.checkbox');

            if (deleteButton) {
                const taskId = deleteButton.dataset.taskId;
                deleteTask(tasks, taskId);
                renderTasks(tasks);
            };

            if (editButton) {
                const taskId = editButton.dataset.taskId;
                const task = tasks.find(task => task.id === taskId);
                renderEditTaskForm(task, categories);
                handleOverlayEvents('edit-task-overlay', 'close-edit-task-form-btn');

                const editTaskSubmitButton = document.getElementById('js-edit-task-submit-btn');

                editTaskSubmitButton.addEventListener('click', (e) => {
                    e.preventDefault();

                    const title = document.getElementById('task-title-input').value;
                    const priority = document.getElementById('task-priority-select').value;
                    const category = document.getElementById('task-category-select').value;
                    const dueDate = document.getElementById('task-date-input').value;

                    editTask(tasks, taskId, title, priority, category, dueDate);
                    renderTasks(tasks);
                    
                    hiddenOverlay('edit-task-overlay');
                });
            };

            if (checkBox) {
                const taskId = checkBox.dataset.taskId;
                toggleTaskStatus(tasks, taskId);
                renderTasks(tasks);
            };
        });
    }

    categoriesButton.addEventListener('click', () => {
        renderCategories(categories);
        handleOverlayEvents('categories-overlay', 'close-categories-btn');
    });

    if (categoriesGrid) {
        categoriesGrid.addEventListener('click', (e) => {
            const addCategoryButton = e.target.closest('.add-category-btn');
            const editCategoryButton = e.target.closest('.category-edit-btn');
            const deleteCategoryButton = e.target.closest('.category-delete-btn');
            
            if (addCategoryButton) {
                hiddenOverlay('categories-overlay');
                
                renderAddCategoryForm();
                handleOverlayEvents('add-category-overlay', 'close-add-category-form-btn');

                const addCategorySubmitButton = document.getElementById('js-add-category-submit-btn');

                if (addCategorySubmitButton) {
                    addCategorySubmitButton.addEventListener('click', (e) => {
                        e.preventDefault();

                        const title = document.getElementById('add-category-title-input').value;
                        
                        addCategory(categories, title);
                        renderCategories(categories);
                        handleOverlayEvents('categories-overlay', 'close-categories-btn');
                        renderTasks(tasks);
                        
                        hiddenOverlay('add-category-overlay');
                    });
                };
            };

            if(deleteCategoryButton) {
                const categoryId = deleteCategoryButton.dataset.categoryId;

                deleteCategory(categories, categoryId);
                renderCategories(categories);
                handleOverlayEvents('categories-overlay', 'close-categories-btn');
                renderTasks(tasks);
            }

            if(editCategoryButton) {
                hiddenOverlay('categories-overlay');
                
                const categoryId = editCategoryButton.dataset.categoryId;
                const category = categories.find(category => category.id === categoryId);
                
                renderEditCategoryForm(category);
                handleOverlayEvents('edit-category-overlay', 'close-edit-category-form-btn');

                const editCategorySubmitButton = document.getElementById('js-edit-category-submit-btn');

                editCategorySubmitButton.addEventListener('click', (e) => {
                    e.preventDefault();

                    const title = document.getElementById('edit-category-title-input').value;
                        
                    editCategory(categories, categoryId, title);
                    renderCategories(categories);
                    handleOverlayEvents('categories-overlay', 'close-categories-btn');
                    renderTasks(tasks);
                        
                    hiddenOverlay('edit-category-overlay');
                });
            }
        });
    };
};

initApp();