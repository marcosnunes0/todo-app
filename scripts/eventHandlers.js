function handleAddTask() {
    const addTaskButton = document.getElementById('add-task-btn');

    addTaskButton.addEventListener('click', () => {
        renderAddTaskForm(categories);
        handleOverlayEvents('add-task-overlay', 'close-add-task-form-btn');
        handleAddTaskFormSubmit();
    });
};

function handleFilteredTasks() {
    const filter = document.getElementById('filter');
    
    filter.addEventListener('change', (e) => {
        const filteredTasks = getFilteredTasks(e.target.value);
        renderTasks(filteredTasks);
    });
};

function handleDeleteTask(deleteButton) {
    const taskId = deleteButton.dataset.taskId;
    deleteTask(taskId);
    renderTasks(tasks);
};

function handleEditTask(editButton) {
    const taskId = editButton.dataset.taskId;
    const task = tasks.find(task => task.id === taskId);
    renderEditTaskForm(task, categories);
    handleOverlayEvents('edit-task-overlay', 'close-edit-task-form-btn');
    handleEditTaskFormSubmit(taskId);
}

function handleCheckbox(checkBox) {
    const taskId = checkBox.dataset.taskId;
    toggleTaskStatus(taskId);
    renderTasks(tasks);
}

function handleAddTaskFormSubmit() {
    const addTaskForm = document.getElementById('add-task-form');

    addTaskForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = document.getElementById('task-title-input').value;
        const priority = document.getElementById('task-priority-select').value;
        const category = document.getElementById('task-category-select').value;
        const dueDate = document.getElementById('task-date-input').value;

        addTask(title, priority, category, dueDate);
        renderTasks(tasks);
            
        hiddenOverlay('add-task-overlay');
    });
};

function handleEditTaskFormSubmit(taskId) {
    const editTaskForm = document.getElementById('edit-task-form');

    editTaskForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = document.getElementById('task-title-input').value;
        const priority = document.getElementById('task-priority-select').value;
        const category = document.getElementById('task-category-select').value;
        const dueDate = document.getElementById('task-date-input').value;

        editTask(taskId, title, priority, category, dueDate);
        renderTasks(tasks);
        
        hiddenOverlay('edit-task-overlay');
    });
};

function handleTaskActions(event) {
    const deleteButton = event.target.closest('.delete-btn');
    const editButton = event.target.closest('.edit-btn');
    const checkBox = event.target.closest('.checkbox');

    if (deleteButton) {
        handleDeleteTask(deleteButton);
    }

    if (editButton) {
        handleEditTask(editButton);
    }

    if (checkBox) {
        handleCheckbox(checkBox);
    }
};

function handleCategoriesButton() {
    const categoriesButton = document.getElementById('categories-btn');
    categoriesButton.addEventListener('click', () => {
        renderCategories(categories);
        handleOverlayEvents('categories-overlay', 'close-categories-overlay-btn');
    });
};

function handleAddCategory(addCategoryButton) {
    hiddenOverlay('categories-overlay');
    renderAddCategoryForm();
    handleOverlayEvents('add-category-overlay', 'close-add-category-form-btn');
    handleAddCategoryFormSubmit();
};

function handleDeleteCategory(deleteButton) {
    const categoryId = deleteButton.dataset.categoryId;

    deleteCategory(categoryId);
    renderCategories(categories);
    renderTasks(tasks);
    handleOverlayEvents('categories-overlay', 'close-categories-btn');
};

function handleEditCategory(editButton) {
    hiddenOverlay('categories-overlay');
    
    const categoryId = editButton.dataset.categoryId;
    const category = categories.find(category => category.id === categoryId);
    
    renderEditCategoryForm(category);
    handleOverlayEvents('edit-category-overlay', 'close-edit-category-form-btn');
    handleEditCategoryFormSubmit(categoryId);
};

function handleAddCategoryFormSubmit() {
    const addCategoryForm = document.getElementById('add-category-form');

    if (addCategoryForm) {
        addCategoryForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const title = document.getElementById('add-category-title-input').value;
            
            addCategory(title);
            renderCategories(categories);
            handleOverlayEvents('categories-overlay', 'close-categories-btn');
            renderTasks(tasks);
            
            hiddenOverlay('add-category-overlay');
        });
    };
};

function handleEditCategoryFormSubmit(categoryId) {
    const editCategoryForm = document.getElementById('edit-category-form');

    if (editCategoryForm) {
        editCategoryForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const title = document.getElementById('edit-category-title-input').value;
            
            editCategory(categoryId, title);
            renderCategories(categories);
            handleOverlayEvents('categories-overlay', 'close-categories-btn');
            renderTasks(tasks);
            
            hiddenOverlay('edit-category-overlay');
        });
    };
};

function handleCategoriesActions(event) {
    const addCategoryButton = event.target.closest('.add-category-btn');
    const editCategoryButton = event.target.closest('.category-edit-btn');
    const deleteCategoryButton = event.target.closest('.category-delete-btn');

    if (addCategoryButton) {
        handleAddCategory(addCategoryButton);
    }

    if (deleteCategoryButton) {
        handleDeleteCategory(deleteCategoryButton);
    }

    if (editCategoryButton) {
        handleEditCategory(editCategoryButton);
    }
};